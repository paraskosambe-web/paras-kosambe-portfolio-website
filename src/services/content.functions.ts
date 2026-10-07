import { createServerFn } from "@tanstack/react-start";
import type { PortfolioData } from "./content.types";

/** Public portfolio content, read server-side so database credentials stay out of the browser. */
export const fetchPortfolioData = createServerFn({ method: "GET" }).handler(
  async (): Promise<PortfolioData | null> => {
    const { fetchPublicPortfolioData } = await import("./public-portfolio.server");
    return fetchPublicPortfolioData();
  },
);
