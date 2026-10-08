import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { ReactNode } from "react";

import type { LinkContent, PortfolioItem } from "@/types/site";

function getCardImageUrl(imageUrl: string) {
  if (!imageUrl.startsWith("/api/public/media/portfolio-images/")) return imageUrl;
  const separator = imageUrl.includes("?") ? "&" : "?";
  return `${imageUrl}${separator}width=900&quality=74`;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  visual?: ReactNode;
  compact?: boolean;
  details?: string[];
  secondaryActions?: LinkContent[];
  expandableTags?: { expandLabel: string; collapseLabel: string };
  replayOnView?: boolean;
  delay?: number;
  onActivate?: () => void;
  onActionClick?: () => void;
  onImageClick?: () => void;
  imageLoading?: "eager" | "lazy";
  imageFetchPriority?: "high" | "low" | "auto";
}

export function PortfolioCard({ item, visual, compact = false, details = [], secondaryActions = [], expandableTags, replayOnView = false, delay = 0, onActivate, onActionClick, onImageClick, imageLoading = "lazy", imageFetchPriority = "auto" }: PortfolioCardProps) {
  const reduceMotion = useReducedMotion();
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const visibleTags = tagsExpanded ? item.tags : item.tags.slice(0, 3);
  const extraTags = tagsExpanded ? 0 : Math.max(item.tags.length - visibleTags.length, 0);

  return (
    <motion.article
      className={`portfolio-card${compact ? " portfolio-card-compact" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !replayOnView, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={onActivate}
      onKeyDown={onActivate ? (event) => { if (event.key === "Enter" || event.key === " ") onActivate(); } : undefined}
      role={onActivate ? "button" : undefined}
      tabIndex={onActivate ? 0 : undefined}
    >
      <div className={`portfolio-card-media${onImageClick ? " is-interactive" : ""}`} onClick={onImageClick ? (event) => { event.stopPropagation(); onImageClick(); } : undefined}>
        {item.imageUrl ? <img src={getCardImageUrl(item.imageUrl)} alt={item.imageAlt} loading={imageLoading} fetchPriority={imageFetchPriority} decoding="async" sizes="(max-width: 639px) 100vw, (max-width: 900px) 50vw, 33vw" /> : visual ?? <span>{item.index}</span>}
      </div>
      <div className="portfolio-card-body">
        <div className="portfolio-card-meta"><span>{item.index}</span><span>{item.meta}</span></div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {details.length > 0 ? <div className="portfolio-card-details">{details.map((detail) => <span key={detail}>{detail}</span>)}</div> : null}
        {secondaryActions.length > 0 ? <div className="portfolio-card-secondary-actions" aria-label={`${item.title} links`}>
          {secondaryActions.filter((link) => link.href).map((link) => {
            const external = /^https?:\/\//.test(link.href);
            return <a key={link.label} href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{link.label}</a>;
          })}
        </div> : null}
        <div className="portfolio-card-tags" aria-label="Tags">
          {visibleTags.map((tag) => <span key={tag}>{tag}</span>)}
          {extraTags > 0 ? <span>+{extraTags}</span> : null}
        </div>
        {expandableTags && item.tags.length > 3 ? <button className="portfolio-card-expand-tags" type="button" aria-expanded={tagsExpanded} onClick={() => setTagsExpanded((expanded) => !expanded)}>
          {tagsExpanded ? expandableTags.collapseLabel : expandableTags.expandLabel}<ChevronDown className={tagsExpanded ? "is-expanded" : ""} aria-hidden="true" />
        </button> : null}
        {item.action ? <a className="portfolio-card-action" href={item.action.href} onClick={(event) => { event.stopPropagation(); if (onActionClick) { event.preventDefault(); onActionClick(); } }}>
          {item.action.label}<ArrowUpRight aria-hidden="true" />
        </a> : null}
      </div>
    </motion.article>
  );
}
