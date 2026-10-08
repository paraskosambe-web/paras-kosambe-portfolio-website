import { ArrowDownToLine, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { SectionOverview } from "@/components/portfolio/SectionOverview";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/services/site";
import type { OverviewCollection } from "@/types/site";

function CardCollection({ collection, className = "" }: { collection: OverviewCollection; className?: string }) {
  return (
    <div className={`portfolio-grid ${className}`}>
      {collection.items.slice(0, 3).map((item, index) => <PortfolioCard key={item.id} item={item} delay={index * 0.08} replayOnView />)}
    </div>
  );
}

export function HomeOverviewSections() {
  const content = useSiteContent().home;
  const reduceMotion = useReducedMotion();

  return (
    <>
      <SectionOverview sectionName={content.about.sectionName} index={content.about.index} title={content.about.title} intro={content.about.intro.join(" ")} tone="charcoal" layout="split" className="about-overview">
        <div className="about-grid">
          <motion.div className="about-portrait-wrap" initial={reduceMotion ? false : { opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="about-portrait">
              {content.about.imageUrl ? <img src={content.about.imageUrl} alt={content.about.imageAlt} /> : <span>PK</span>}
            </div>
          </motion.div>
          <div className="about-copy">
            <div className="currently-block">
              <span>{content.about.currentlyLabel}</span>
              <ol>{content.about.currently.map((item, index) => <motion.li key={item} initial={reduceMotion ? false : { opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.45, delay: index * 0.08 }}><b>0{index + 1}</b>{item}</motion.li>)}</ol>
            </div>
            <Button asChild variant="hero"><a href={content.about.action.href}>{content.about.action.label}<ArrowUpRight /></a></Button>
          </div>
        </div>
      </SectionOverview>

      <SectionOverview sectionName={content.skills.sectionName} index={content.skills.index} title={content.skills.title} intro={content.skills.intro} action={content.skills.action} tone="grid" layout="right">
        <div className="portfolio-grid skills-grid">
          {content.skills.categories.map((category, index) => (
            <PortfolioCard key={category.id} item={category} visual={<div className="skill-card-visual"><span>{category.title}</span></div>} delay={index * 0.07} replayOnView />
          ))}
        </div>
      </SectionOverview>

      <SectionOverview sectionName={content.projects.sectionName} index={content.projects.index} title={content.projects.title} intro={content.projects.intro} action={content.projects.action} tone="charcoal" layout="standard">
        <CardCollection collection={content.projects} />
      </SectionOverview>

      <SectionOverview sectionName={content.experience.sectionName} index={content.experience.index} title={content.experience.title} intro={content.experience.intro} action={content.experience.action} tone="ruled" layout="split">
        <CardCollection collection={content.experience} />
      </SectionOverview>

      <SectionOverview sectionName={content.certifications.sectionName} index={content.certifications.index} title={content.certifications.title} intro={content.certifications.intro} action={content.certifications.action} tone="charcoal" layout="right">
        <CardCollection collection={content.certifications} />
      </SectionOverview>

      <SectionOverview sectionName={content.achievements.sectionName} index={content.achievements.index} title={content.achievements.title} intro={content.achievements.intro} action={content.achievements.action} tone="offset" layout="standard">
        <CardCollection collection={content.achievements} />
      </SectionOverview>

      <SectionOverview sectionName={content.resume.sectionName} index={content.resume.index} title={content.resume.title} intro={content.resume.intro} tone="charcoal" layout="compact" className="resume-overview">
        <motion.div className="resume-strip" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div><span>{content.resume.updatedLabel}</span><strong>{content.resume.updated}</strong></div>
          <div className="resume-actions">
            <Button asChild variant="hero"><a href={content.resume.viewAction.href}>{content.resume.viewAction.label}<ArrowRight /></a></Button>
            <Button asChild variant="hero"><a href={content.resume.downloadAction.href} download>{content.resume.downloadAction.label}<ArrowDownToLine /></a></Button>
          </div>
        </motion.div>
      </SectionOverview>

      <SectionOverview sectionName={content.art.sectionName} index={content.art.index} title={content.art.title} intro={content.art.intro} action={content.art.action} tone="ink" layout="split" className="art-overview">
        <CardCollection collection={content.art} />
      </SectionOverview>

      <SectionOverview sectionName={content.contact.sectionName} index={content.contact.index} title={content.contact.title} tone="grid" layout="compact" className="contact-overview">
        <motion.div className="contact-cta" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <p>{content.contact.intro}</p>
          <Button asChild variant="hero"><a href={content.contact.action.href}>{content.contact.action.label}<ArrowUpRight /></a></Button>
        </motion.div>
      </SectionOverview>
    </>
  );
}
