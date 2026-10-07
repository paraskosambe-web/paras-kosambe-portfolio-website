import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/services/site";
import type { AchievementCategory } from "@/types/site";

type Filter = "ALL" | AchievementCategory;

export function AchievementsPage() {
  const content = useSiteContent().achievements;
  const [filter, setFilter] = useState<Filter>("ALL");
  const items = content.items.filter((item) => filter === "ALL" || item.category === filter);
  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <div className="collection-controls project-filters" aria-label="Achievement categories">{content.filters.map((category) => <Button key={category} variant="outline" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</Button>)}</div>
    <motion.div layout className="collection-grid"><AnimatePresence mode="popLayout">{items.map((item, index) => <PortfolioCard key={item.id} item={item} delay={index * 0.08} details={[item.organization, item.date, item.category]} />)}</AnimatePresence></motion.div>
  </div></main>;
}
