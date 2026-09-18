const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = "2026-09-18";

export const sanityConfigured = Boolean(projectId && dataset);

export async function querySanity<T>(query: string, fallback: T): Promise<T> {
  if (!projectId) return fallback;
  try {
    const endpoint = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
    endpoint.searchParams.set("query", query);
    const token = process.env.SANITY_API_READ_TOKEN;
    const response = await fetch(endpoint, { headers: { Accept: "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) } });
    if (!response.ok) return fallback;
    const payload = await response.json() as { result?: T };
    return payload.result ?? fallback;
  } catch {
    return fallback;
  }
}
