import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useSiteContent } from "@/services/site";
import type { ArtCategory, ArtItem } from "@/types/site";

export function ArtPage() {
  const content = useSiteContent().art;
  const [filter, setFilter] = useState<ArtCategory>("ALL");
  const [preview, setPreview] = useState<ArtItem | null>(null);
  const items = content.items.filter((item) => filter === "ALL" || item.category === filter);
  return <main className="projects-page art-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <div className="art-controls"><div className="project-filters" aria-label="Artwork categories">{content.filters.map((category) => <Button key={category} variant="outline" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</Button>)}</div></div>
    <motion.div layout className="collection-grid art-grid"><AnimatePresence mode="popLayout">{items.map((item, index) => <PortfolioCard key={item.id} item={item} delay={index * 0.06} details={[item.medium, item.year]} onImageClick={() => setPreview(item)} />)}</AnimatePresence></motion.div>
    {content.portfolioUrl ? <div className="art-portfolio-link"><Button asChild variant="hero"><a href={content.portfolioUrl} target="_blank" rel="noreferrer">{content.portfolioLabel}<ArrowUpRight /></a></Button></div> : null}
    <Dialog open={preview !== null} onOpenChange={(open) => { if (!open) setPreview(null); }}><DialogContent className="art-lightbox">{preview ? <><DialogTitle>{preview.title}</DialogTitle><img src={preview.imageUrl} alt={preview.imageAlt} /><span>{preview.medium} · {preview.year}</span></> : null}</DialogContent></Dialog>
  </div></main>;
}
