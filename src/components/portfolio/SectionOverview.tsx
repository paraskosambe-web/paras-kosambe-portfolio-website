import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const ruleScale = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.12, 1, 1, 0.12]);

  return (
    <section ref={sectionRef} className={`overview overview-${tone} overview-${layout} ${className}`}>
      <motion.div className="overview-rule" style={{ scaleX: reduceMotion ? 1 : ruleScale }} />
      <div className="overview-inner">
        <header className="overview-header">
          <motion.span
            className="overview-index"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >/{index}</motion.span>
          <div className="overview-section-label">
            <motion.span
              className="overview-section-name"
              initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >{sectionName}</motion.span>
            <motion.span
              className="overview-section-accent"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />
          </div>
          <div className="overview-heading-mask">
            <motion.h2
              initial={reduceMotion ? false : { y: "105%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
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
