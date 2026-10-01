import { motion } from "motion/react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { getSkillsContent } from "@/services/site";

export function SkillsPage() {
  const content = getSkillsContent();
  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <div className="skills-page-grid">
      {content.items.map((item, index) => <motion.article key={item.id} className="skill-page-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.07 }}>
        <div className="skill-page-card-head"><span>{item.index}</span><strong>{String(item.count).padStart(2, "0")}</strong></div>
        <h2>{item.title}</h2><p>{item.description}</p>
        <div className="skill-page-tags">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </motion.article>)}
    </div>
  </div></main>;
}