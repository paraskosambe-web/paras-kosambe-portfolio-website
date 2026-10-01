import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export type SectionTone = "ink" | "charcoal" | "grid" | "ruled" | "offset";
export type SectionLayout = "standard" | "split" | "right" | "compact";

interface SectionOverviewProps {
  index: string;
  title: string;
  intro?: string;
  action?: { label: string; href: string };
  tone?: SectionTone;
  layout?: SectionLayout;
  children: ReactNode;
  className?: string;
}

export function SectionOverview({ index, title, intro, action, tone = "ink", layout = "standard", children, className = "" }: SectionOverviewProps) {
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
          <span className="overview-index">/{index}</span>
          <div className="overview-heading-mask">
            <motion.h2
              initial={reduceMotion ? false : { y: "105%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            >{title}</motion.h2>
          </div>
          {intro ? <p>{intro}</p> : null}
        </header>
        <div className="overview-content">{children}</div>
        {action ? (
          <a className="overview-action" href={action.href}>{action.label}<ArrowRight aria-hidden="true" /></a>
        ) : null}
      </div>
    </section>
  );
}