import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import type { PortfolioItem } from "@/types/site";

interface PortfolioCardProps {
  item: PortfolioItem;
  visual?: ReactNode;
  compact?: boolean;
}

export function PortfolioCard({ item, visual, compact = false }: PortfolioCardProps) {
  const reduceMotion = useReducedMotion();
  const visibleTags = item.tags.slice(0, 3);
  const extraTags = Math.max(item.tags.length - visibleTags.length, 0);

  return (
    <motion.article
      className={`portfolio-card${compact ? " portfolio-card-compact" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="portfolio-card-media">
        {item.imageUrl ? <img src={item.imageUrl} alt={item.imageAlt} /> : visual ?? <span>{item.index}</span>}
      </div>
      <div className="portfolio-card-body">
        <div className="portfolio-card-meta"><span>{item.index}</span><span>{item.meta}</span></div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="portfolio-card-tags" aria-label="Tags">
          {visibleTags.map((tag) => <span key={tag}>{tag}</span>)}
          {extraTags > 0 ? <span>+{extraTags}</span> : null}
        </div>
        <a className="portfolio-card-action" href={item.action.href}>
          {item.action.label}<ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}