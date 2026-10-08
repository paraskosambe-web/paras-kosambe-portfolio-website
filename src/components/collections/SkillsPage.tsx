import { motion } from "motion/react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { useSiteContent } from "@/services/site";

export function SkillsPage() {
  const content = useSiteContent().skills;
  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <motion.div layout className="collection-grid certification-grid">
      {content.items.map((item, index) => <PortfolioCard key={item.id} item={item} expandableTags={{ expandLabel: content.viewSkillsLabel, collapseLabel: content.hideSkillsLabel }} delay={index * 0.06} />)}
    </motion.div>
  </div></main>;
}
