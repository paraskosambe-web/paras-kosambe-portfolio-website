import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useSiteContent } from "@/services/site";

export function PortfolioPreloader() {
  const { hero } = useSiteContent();
  const reduceMotion = useReducedMotion();
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const leaveDelay = reduceMotion ? 120 : 1050;
    const leaveTimer = window.setTimeout(() => setLeaving(true), leaveDelay);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      window.dispatchEvent(new Event("portfolio-preloader-finished"));
    }, leaveDelay + (reduceMotion ? 20 : 460));
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, [reduceMotion]);

  if (!visible) return null;

  const initials = `${hero.firstName.charAt(0)}${hero.lastName.charAt(0)}`;
  const name = `${hero.firstName} ${hero.lastName}`.trim();

  return (
    <div className={`portfolio-preloader${leaving ? " is-leaving" : ""}`} role="status" aria-label={`Loading ${name}'s portfolio`}>
      <div className="portfolio-preloader-grid" aria-hidden="true" />
      <div className="portfolio-preloader-content">
        <div className="portfolio-preloader-mark" aria-hidden="true">
          <span className="portfolio-preloader-orbit" />
          <span>{initials}</span>
        </div>
        <p className="portfolio-preloader-name">{name}</p>
        <p className="portfolio-preloader-role">{hero.primaryRole}</p>
        <div className="portfolio-preloader-progress" aria-hidden="true">
          <span />
        </div>
      </div>
      <span className="portfolio-preloader-index" aria-hidden="true">PK / PORTFOLIO</span>
    </div>
  );
}
