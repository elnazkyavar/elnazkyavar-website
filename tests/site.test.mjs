import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("publishes the intended academic identity without starter metadata", async () => {
  const [home, layout, content] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("lib/site-data.ts", root), "utf8"),
  ]);
  assert.match(home, /Latest from Elnaz/);
  assert.match(home, /Evidence &amp; Mechanism/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /index: false/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(content, /doi\.org|orcid\.org|@.*\.edu/i);
});

test("includes every requested section in navigation", async () => {
  const content = await readFile(new URL("lib/site-data.ts", root), "utf8");
  for (const label of ["Research", "Publications", "Evidence & Mechanism", "Research Notes", "Peer Review & Editorial Service", "Talks & Conferences", "Professional Engagement", "Projects", "CV", "Contact"]) assert.match(content, new RegExp(label.replace(/[&]/g, "&")));
});
