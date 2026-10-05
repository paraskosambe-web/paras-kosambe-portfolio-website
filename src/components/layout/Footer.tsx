import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

const footerNavigation = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="site-footer-intro">
          <span className="site-footer-eyebrow">LET'S CONNECT</span>

          <h2 className="site-footer-title">
            Let's build something
            <br />
            <span>meaningful.</span>
          </h2>

          <p className="site-footer-description">
            Data Science is my primary focus, supported by AI, analytics and
            full-stack development. I enjoy turning ideas, data and technology
            into practical digital solutions.
          </p>

          <Link to="/contact" className="site-footer-cta">
            <span>WORK WITH ME</span>
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="site-footer-navigation">
          <div className="site-footer-column">
            <span className="site-footer-column-title">NAVIGATION</span>

            <nav aria-label="Footer navigation">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="site-footer-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer-column">
            <span className="site-footer-column-title">SOCIAL</span>

            <div className="site-footer-socials">
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="site-footer-social"
                >
                  <Github size={16} strokeWidth={1.7} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              )}

              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="site-footer-social"
                >
                  <Linkedin size={16} strokeWidth={1.7} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              )}

              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="site-footer-social"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-brand">
        <motion.div
          className="site-footer-brand-name"
          initial={{ opacity: 0.35 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          PARAS
        </motion.div>

        <motion.div
          className="site-footer-brand-name site-footer-brand-name-offset"
          initial={{ opacity: 0.35 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          KOSAMBE
        </motion.div>
      </div>

      <div className="site-footer-bottom">
        <span>© {currentYear} Paras Kosambe</span>
        <span>DATA • AI • TECHNOLOGY</span>
        <span>BUILT WITH PURPOSE</span>
      </div>
    </footer>
  );
}