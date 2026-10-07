import { motion } from "motion/react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { useSiteContent } from "@/services/site";

export function SkillsPage() {
  const content = useSiteContent().skills;
  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <div className="skills-page-grid">
      {content.items.map((item, index) => <motion.article key={item.id} className={`skill-page-card${item.imageUrl ? " has-image" : ""}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.07 }}>
        {item.imageUrl ? <div className="skill-page-card-image"><img src={item.imageUrl} alt={item.imageAlt} loading="lazy" decoding="async" /></div> : null}
        <div className="skill-page-card-head"><span>{item.index}</span></div>
        <h2>{item.title}</h2><p>{item.description}</p>
        <div className="skill-page-tags">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </motion.article>)}
    </div>
  </div></main>;
}
