import { motion, useReducedMotion } from "motion/react";
import { PageHeader } from "@/components/portfolio/PageHeader";
import { getAboutContent } from "@/services/site";

export function AboutPage() {
  const content = getAboutContent();
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 };

  return <main className="projects-page"><div className="projects-inner">
    <PageHeader eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
    <div className="about-page-layout">
      <motion.div className="about-portrait-wrap about-page-portrait" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
        <div className="about-portrait">{content.imageUrl ? <img src={content.imageUrl} alt={content.imageAlt} /> : <span>PK</span>}</div>
      </motion.div>
      <div className="about-page-copy">
        <motion.div className="about-bio" initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {content.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </motion.div>
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