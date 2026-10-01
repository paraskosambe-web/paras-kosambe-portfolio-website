import { ArrowDownToLine, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { SectionOverview } from "@/components/portfolio/SectionOverview";
import { Button } from "@/components/ui/button";
import { getHomeContent } from "@/services/site";
import type { OverviewCollection } from "@/types/site";

function CardCollection({ collection, className = "" }: { collection: OverviewCollection; className?: string }) {
  return (
    <div className={`portfolio-grid ${className}`}>
      {collection.items.slice(0, 3).map((item) => <PortfolioCard key={item.id} item={item} />)}
    </div>
  );
}

export function HomeOverviewSections() {
  const content = getHomeContent();
  const reduceMotion = useReducedMotion();

  return (
    <>
      <SectionOverview index={content.about.index} title={content.about.title} tone="charcoal" layout="split" className="about-overview">
        <div className="about-grid">
          <motion.div className="about-portrait-wrap" initial={reduceMotion ? false : { opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}>
            <div className="about-portrait">
              {content.about.imageUrl ? <img src={content.about.imageUrl} alt={content.about.imageAlt} /> : <span>PK</span>}
            </div>
          </motion.div>
          <div className="about-copy">
            <div className="about-intro">{content.about.intro.map((line) => <p key={line}>{line}</p>)}</div>
            <div className="currently-block">
              <span>{content.about.currentlyLabel}</span>
              <ol>{content.about.currently.map((item, index) => <li key={item}><b>0{index + 1}</b>{item}</li>)}</ol>
            </div>
            <Button asChild variant="hero"><a href={content.about.action.href}>{content.about.action.label}<ArrowUpRight /></a></Button>
          </div>
        </div>
      </SectionOverview>

      <SectionOverview index={content.skills.index} title={content.skills.title} intro={content.skills.intro} action={content.skills.action} tone="grid" layout="right">
        <div className="portfolio-grid skills-grid">
          {content.skills.categories.map((category) => (
            <PortfolioCard key={category.id} item={category} visual={<div className="skill-card-visual"><strong>{String(category.count).padStart(2, "0")}</strong><span>{category.title}</span></div>} />
          ))}
        </div>
      </SectionOverview>

      <SectionOverview index={content.projects.index} title={content.projects.title} intro={content.projects.intro} action={content.projects.action} tone="charcoal" layout="standard">
        <CardCollection collection={content.projects} />
      </SectionOverview>

      <SectionOverview index={content.experience.index} title={content.experience.title} intro={content.experience.intro} action={content.experience.action} tone="ruled" layout="split">
        <CardCollection collection={content.experience} className="grid-step" />
      </SectionOverview>

      <SectionOverview index={content.certifications.index} title={content.certifications.title} intro={content.certifications.intro} action={content.certifications.action} tone="charcoal" layout="right">
        <CardCollection collection={content.certifications} />
      </SectionOverview>

      <SectionOverview index={content.achievements.index} title={content.achievements.title} intro={content.achievements.intro} action={content.achievements.action} tone="offset" layout="standard">
        <CardCollection collection={content.achievements} />
      </SectionOverview>

      <SectionOverview index={content.resume.index} title={content.resume.title} tone="charcoal" layout="compact" className="resume-overview">
        <div className="resume-strip">
          <div><span>{content.resume.updatedLabel}</span><strong>{content.resume.updated}</strong></div>
          <p>{content.resume.intro}</p>
          <div className="resume-actions">
            <Button asChild variant="hero"><a href={content.resume.viewAction.href}>{content.resume.viewAction.label}<ArrowRight /></a></Button>
            <Button asChild variant="hero"><a href={content.resume.downloadAction.href} download>{content.resume.downloadAction.label}<ArrowDownToLine /></a></Button>
          </div>
        </div>
      </SectionOverview>

      <SectionOverview index={content.art.index} title={content.art.title} intro={content.art.intro} action={content.art.action} tone="ink" layout="split" className="art-overview">
        <CardCollection collection={content.art} />
      </SectionOverview>

      <SectionOverview index={content.contact.index} title={content.contact.title} tone="grid" layout="compact" className="contact-overview">
        <motion.div className="contact-cta" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p>{content.contact.intro}</p>
          <Button asChild variant="hero"><a href={content.contact.action.href}>{content.contact.action.label}<ArrowUpRight /></a></Button>
        </motion.div>
      </SectionOverview>
    </>
  );
}