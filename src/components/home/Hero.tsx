import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState, type MouseEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { getSiteContent } from "@/services/site";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function MagneticLink({ children, href, external = false }: { children: ReactNode; href: string; external?: boolean }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 22 });
  const springY = useSpring(y, { stiffness: 240, damping: 22 });

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 12);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 12);
  };

  return (
    <motion.div style={{ x: springX, y: springY }} onMouseLeave={() => { x.set(0); y.set(0); }}>
      <Button asChild variant="hero">
        <a
          href={href}
          onMouseMove={handleMove}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {children}
        </a>
      </Button>
    </motion.div>
  );
}

function DataVisual({ labels }: { labels: string[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="hero-data-visual"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.35 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 640 620" role="presentation">
        <g className="hero-grid-lines">
          {Array.from({ length: 9 }, (_, index) => <line key={`v-${index}`} x1={40 + index * 70} y1="30" x2={40 + index * 70} y2="590" />)}
          {Array.from({ length: 9 }, (_, index) => <line key={`h-${index}`} x1="40" y1={30 + index * 70} x2="600" y2={30 + index * 70} />)}
        </g>
        <g className="hero-axis-lines">
          <line x1="40" y1="520" x2="600" y2="520" />
          <line x1="110" y1="30" x2="110" y2="590" />
        </g>
        <motion.polyline
          className="hero-data-line"
          points="110,470 185,435 250,450 320,335 390,365 465,205 540,245 600,120"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <g className="hero-data-points">
          {[[110,470],[185,435],[250,450],[320,335],[390,365],[465,205],[540,245],[600,120]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />)}
        </g>
        <g className="hero-coordinate-labels">
          <text x="122" y="496">{labels[0]}</text>
          <text x="332" y="325">{labels[1]}</text>
          <text x="430" y="192">{labels[2]}</text>
          <text x="515" y="106">{labels[3]}</text>
        </g>
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const { hero } = getSiteContent();
  const reduceMotion = useReducedMotion();
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    setShift({
      x: ((event.clientX / window.innerWidth) - 0.5) * 16,
      y: ((event.clientY / window.innerHeight) - 0.5) * 16,
    });
  };

  return (
    <section className="hero" onMouseMove={handlePointerMove} onMouseLeave={() => setShift({ x: 0, y: 0 })}>
      <div className="hero-corner hero-corner-nw" aria-hidden="true" />
      <div className="hero-corner hero-corner-se" aria-hidden="true" />
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: reduceMotion ? 0 : 0.13, delayChildren: reduceMotion ? 0 : 0.16 }}
          style={reduceMotion ? {} : { x: shift.x * -0.28, y: shift.y * -0.28 }}
        >
          <motion.p className="hero-eyebrow" variants={reveal} transition={transition}>{hero.eyebrow}</motion.p>
          <h1 className="hero-name" aria-label={`${hero.firstName} ${hero.lastName}`}>
            {[hero.firstName, hero.lastName].map((line) => (
              <span className="hero-name-mask" key={line}>
                <motion.span
                  variants={{ hidden: { y: "105%" }, visible: { y: 0 } }}
                  transition={{ duration: reduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
                >{line}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="hero-role"
            variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ ...transition, duration: reduceMotion ? 0 : 0.8 }}
          >{hero.primaryRole}</motion.p>
          <motion.p className="hero-disciplines" variants={reveal} transition={transition}>{hero.disciplines}</motion.p>
          <motion.p className="hero-description" variants={reveal} transition={transition}>{hero.description}</motion.p>
          <motion.div className="hero-actions" variants={reveal} transition={transition}>
            <MagneticLink href={hero.primaryAction.href}>{hero.primaryAction.label}<ArrowUpRight /></MagneticLink>
            <MagneticLink href={hero.secondaryAction.href}>{hero.secondaryAction.label}<ArrowUpRight /></MagneticLink>
          </motion.div>
          <motion.div className="hero-socials" variants={reveal} transition={transition}>
            {hero.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} title={social.label}>
                {social.label === "GitHub" ? <Github /> : <Linkedin />}
              </a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual-wrap"
          animate={reduceMotion ? false : { x: shift.x, y: shift.y }}
          transition={{ type: "spring", stiffness: 80, damping: 24 }}
        >
          <DataVisual labels={hero.coordinates} />
        </motion.div>
      </div>
      <motion.div
        className="hero-scroll"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <span>{hero.scrollLabel}</span><span className="hero-scroll-line" /><ArrowDown />
      </motion.div>
    </section>
  );
}