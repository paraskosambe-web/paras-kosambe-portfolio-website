import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useSiteContent } from "@/services/site";
import type { CertificationCategory, CertificationItem } from "@/types/site";

type Filter = "ALL" | CertificationCategory;

export function CertificationsPage() {
  const content = useSiteContent().certifications;
  const [filter, setFilter] = useState<Filter>("ALL");
  const [visibleCount, setVisibleCount] = useState(9);
  const [preview, setPreview] = useState<CertificationItem | null>(null);
  const filtered = content.items.filter((item) => filter === "ALL" || item.category === filter);
  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <div className="collection-controls certification-filters" aria-label="Certificate categories">{content.filters.map((category) => <Button key={category} variant="outline" aria-pressed={filter === category} onClick={() => { setFilter(category); setVisibleCount(9); }}>{category}</Button>)}</div>
    <motion.div layout className="collection-grid"><AnimatePresence mode="popLayout">{filtered.slice(0, visibleCount).map((item, index) => <PortfolioCard key={item.id} item={item} delay={index * 0.06} details={[item.issuer, item.date, item.credentialId]} onImageClick={() => setPreview(item)} />)}</AnimatePresence></motion.div>
    {filtered.length > visibleCount ? <Button className="projects-load-more" variant="hero" onClick={() => setVisibleCount((count) => count + 9)}>{content.loadMoreLabel}</Button> : null}
    <Dialog open={preview !== null} onOpenChange={(open) => { if (!open) setPreview(null); }}><DialogContent className="certificate-lightbox">{preview ? <><DialogTitle>{preview.title}</DialogTitle><img src={preview.imageUrl} alt={preview.imageAlt} /><span>{preview.issuer} · {preview.credentialId}</span></> : null}</DialogContent></Dialog>
  </div></main>;
}
