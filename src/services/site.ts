import { siteContent } from "@/data/mock";
import type { HomeContent, SiteContent } from "@/types/site";

export function getSiteContent(): SiteContent {
  return siteContent;
}

export function getHomeContent(): HomeContent {
  return siteContent.home;
}