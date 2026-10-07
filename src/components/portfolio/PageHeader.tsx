import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  className = "page-header",
}: PageHeaderProps) {
  const reduceMotion = useReducedMotion();

  const isLongTitle =
    typeof title === "string" && (title.toLowerCase() === "certifications" || title.toLowerCase() === "experience");

  return (
    <header className={className}>
      <motion.span
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {eyebrow}
      </motion.span>

      <div className="page-header-mask">
        <motion.h1
          className={
            isLongTitle
              ? "page-header-title page-header-title-long"
              : "page-header-title"
          }
          initial={reduceMotion ? false : { y: "105%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {title}
        </motion.h1>
      </div>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {intro}
      </motion.p>
    </header>
  );
}
