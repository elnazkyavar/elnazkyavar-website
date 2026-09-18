import { isProductionSite } from "../lib/site-config";

export function ProductionAnalytics() {
  const source = process.env.NEXT_PUBLIC_ANALYTICS_SRC;
  if (!isProductionSite || !source) return null;
  return <script defer src={source} data-site="elnaz-kyavar" />;
}
