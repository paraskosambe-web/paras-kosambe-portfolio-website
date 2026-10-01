import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import type { PortfolioItem } from "@/types/site";

interface PortfolioCardProps {
  item: PortfolioItem;
  visual?: ReactNode;
  compact?: boolean;
  details?: string[];
  delay?: number;
  onActivate?: () => void;
  onImageClick?: () => void;
}

export function PortfolioCard({ item, visual, compact = false, details = [], delay = 0, onActivate, onImageClick }: PortfolioCardProps) {
  const reduceMotion = useReducedMotion();
  const visibleTags = item.tags.slice(0, 3);
  const extraTags = Math.max(item.tags.length - visibleTags.length, 0);

  return (
    <motion.article
      className={`portfolio-card${compact ? " portfolio-card-compact" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={onActivate}
      onKeyDown={onActivate ? (event) => { if (event.key === "Enter" || event.key === " ") onActivate(); } : undefined}
      role={onActivate ? "button" : undefined}
      tabIndex={onActivate ? 0 : undefined}
    >
      <div className={`portfolio-card-media${onImageClick ? " is-interactive" : ""}`} onClick={onImageClick ? (event) => { event.stopPropagation(); onImageClick(); } : undefined}>
        {item.imageUrl ? <img src={item.imageUrl} alt={item.imageAlt} /> : visual ?? <span>{item.index}</span>}
      </div>
      <div className="portfolio-card-body">
        <div className="portfolio-card-meta"><span>{item.index}</span><span>{item.meta}</span></div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {details.length > 0 ? <div className="portfolio-card-details">{details.map((detail) => <span key={detail}>{detail}</span>)}</div> : null}
        <div className="portfolio-card-tags" aria-label="Tags">
          {visibleTags.map((tag) => <span key={tag}>{tag}</span>)}
          {extraTags > 0 ? <span>+{extraTags}</span> : null}
        </div>
        {item.action ? <a className="portfolio-card-action" href={item.action.href} onClick={(event) => event.stopPropagation()}>
          {item.action.label}<ArrowUpRight aria-hidden="true" />
        </a> : null}
      </div>
    </motion.article>
  );
}