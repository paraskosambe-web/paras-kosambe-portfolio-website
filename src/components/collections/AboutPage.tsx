import { motion, useReducedMotion } from "motion/react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { useSiteContent } from "@/services/site";

export function AboutPage() {
  const content = useSiteContent().about;
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 };

  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro="" className="page-header about-page-header" />
    <div className="about-page-layout">
      <div className="about-page-hero">
        <motion.div className="about-portrait-wrap about-page-portrait" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <div className="about-portrait">{content.imageUrl ? <img src={content.imageUrl} alt={content.imageAlt} /> : <span>PK</span>}</div>
        </motion.div>
        <motion.div className="about-page-intro" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <p className="about-page-lead">{content.intro}</p>
          <div className="about-bio">
          {content.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </motion.div>
      </div>
      <div className="about-facts-grid">
        <motion.section className="about-detail-block" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span>{content.educationLabel}</span><h2>{content.education.degree}</h2><p>{content.education.institution}</p><p>{content.education.status}</p>
        </motion.section>
        <motion.section className="about-detail-block" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span>{content.currentlyLabel}</span><ol>{content.currently.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</li>)}</ol>
        </motion.section>
        <motion.section className="about-detail-block" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span>{content.lookingForLabel}</span><p className="about-looking">{content.lookingFor}</p>
        </motion.section>
      </div>
    </div>
  </div></main>;
}
