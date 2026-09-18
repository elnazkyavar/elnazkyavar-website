import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import worker from "../dist/server/index.js";

const clientRoot = fileURLToPath(new URL("../dist/client/", import.meta.url));

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const assets = {
  async fetch(request) {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    const relativePath = normalize(pathname).replace(/^[/\\]+/, "");
    const filePath = join(clientRoot, relativePath);

    if (!filePath.startsWith(clientRoot)) return new Response("Not found", { status: 404 });

    try {
      const body = await readFile(filePath);
      return new Response(body, {
        headers: { "content-type": contentTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream" },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
};

export default async function handler(request, response) {
  const protocol = request.headers["x-forwarded-proto"] ?? "https";
  const host = request.headers["x-forwarded-host"] ?? request.headers.host;
  const url = new URL(request.url, `${protocol}://${host}`);
  const headers = new Headers();

  for (const [name, value] of Object.entries(request.headers)) {
    if (Array.isArray(value)) value.forEach((item) => headers.append(name, item));
    else if (value !== undefined) headers.set(name, value);
  }

  const chunks = [];
  if (request.method !== "GET" && request.method !== "HEAD") {
    for await (const chunk of request) chunks.push(chunk);
  }

  const workerResponse = await worker.fetch(
    new Request(url, {
      method: request.method,
      headers,
      body: chunks.length ? Buffer.concat(chunks) : undefined,
      duplex: chunks.length ? "half" : undefined,
    }),
    { ASSETS: assets },
    { passThroughOnException() {}, waitUntil() {} },
  );

  response.statusCode = workerResponse.status;
  workerResponse.headers.forEach((value, name) => response.setHeader(name, value));

  if (request.method === "HEAD" || !workerResponse.body) {
    response.end();
    return;
  }

  response.end(Buffer.from(await workerResponse.arrayBuffer()));
}
