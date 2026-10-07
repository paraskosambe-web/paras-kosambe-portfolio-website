import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export type SectionTone = "ink" | "charcoal" | "grid" | "ruled" | "offset";
export type SectionLayout = "standard" | "split" | "right" | "compact";

interface SectionOverviewProps {
  sectionName: string;
  index: string;
  title: string;
  intro?: string;
  action?: { label: string; href: string };
  tone?: SectionTone;
  layout?: SectionLayout;
  children: ReactNode;
  className?: string;
}

export function SectionOverview({ sectionName, index, title, intro, action, tone = "ink", layout = "standard", children, className = "" }: SectionOverviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`overview overview-${tone} overview-${layout} ${className}`}>
      <motion.div
        className="overview-rule"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="overview-inner">
        <header className="overview-header">
          <motion.span
            className="overview-index"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >/{index}<span className="overview-section-name">{sectionName}</span></motion.span>
          <div className="overview-heading-mask">
            <motion.h2
              initial={reduceMotion ? false : { y: "105%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            >{title}</motion.h2>
          </div>
          {intro ? (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >{intro}</motion.p>
          ) : null}
        </header>
        <div className="overview-content">{children}</div>
        {action ? (
          <a className="overview-action" href={action.href}>{action.label}<ArrowRight aria-hidden="true" /></a>
        ) : null}
      </div>
    </section>
  );
}
