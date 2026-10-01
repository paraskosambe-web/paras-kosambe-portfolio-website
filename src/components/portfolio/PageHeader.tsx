import { motion, useReducedMotion } from "motion/react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro: string;
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  const reduceMotion = useReducedMotion();
  return (
    <header className="page-header">
      <motion.span initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>{eyebrow}</motion.span>
      <div className={`page-header-mask${title.length > 10 ? " page-header-mask-long" : ""}`}>
        <motion.h1 initial={reduceMotion ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>{title}</motion.h1>
      </div>
      <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>{intro}</motion.p>
    </header>
  );
}