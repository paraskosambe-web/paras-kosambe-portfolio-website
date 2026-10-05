
import { useEffect, useState } from "react";

import { Link, useLocation } from "@tanstack/react-router";

import { AnimatePresence, motion } from "motion/react";

import { ArrowUpRight, Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Art", href: "/art" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`)
    );
  };

  return (
    <>
      {/* ─────────────────────────────────────────────
          DESKTOP / MAIN HEADER
      ───────────────────────────────────────────── */}

      <motion.header
        className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="site-header-inner">
          {/* LOGO */}

          <Link
            to="/"
            className="site-logo"
            aria-label="Paras Kosambe — Home"
          >
            <motion.span
              className="site-logo-mark"
              whileHover={{ rotate: -4, scale: 1.04 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              PK
            </motion.span>

            <span className="site-logo-name">
              <span>PARAS</span>
              <span>KOSAMBE</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="desktop-nav"
            aria-label="Primary navigation"
          >
            {navItems.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`desktop-nav-link ${
                    active ? "desktop-nav-link-active" : ""
                  }`}
                >
                  <span className="desktop-nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="desktop-nav-label">
                    {item.label}
                  </span>

                  <motion.span
                    className="desktop-nav-line"
                    initial={false}
                    animate={{
                      scaleX: active ? 1 : 0,
                      opacity: active ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}

          <div className="header-actions">
            <Link
              to="/contact"
              className="header-cta"
            >
              <span>LET'S TALK</span>

              <motion.span
                className="header-cta-icon"
                whileHover={{ x: 3, y: -3 }}
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </motion.span>
            </Link>

            <button
              type="button"
              className="mobile-menu-button"
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((value) => !value)
              }
            >
              {mobileOpen ? (
                <X size={23} strokeWidth={1.7} />
              ) : (
                <Menu size={23} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─────────────────────────────────────────────
          MOBILE NAVIGATION
      ───────────────────────────────────────────── */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-navigation"
            initial={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="mobile-navigation-inner"
              initial={{ y: -25 }}
              animate={{ y: 0 }}
              exit={{ y: -25 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mobile-navigation-label">
                <span>MENU</span>
                <span>01 — 09</span>
              </div>

              <nav aria-label="Mobile navigation">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.05 + index * 0.045,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        to={item.href}
                        className={`mobile-nav-link ${
                          active
                            ? "mobile-nav-link-active"
                            : ""
                        }`}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                      >
                        <span className="mobile-nav-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{item.label}</span>

                        {active && (
                          <span className="mobile-nav-current">
                            CURRENT
                          </span>
                        )}

                        <ArrowUpRight
                          className="mobile-nav-arrow"
                          size={20}
                          strokeWidth={1.5}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mobile-navigation-footer">
                <div>
                  <span>CONNECT</span>

                  <div className="mobile-social-links">
                    {siteConfig.github && (
                      <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {siteConfig.linkedin && (
                      <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mobile-work-link"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  <span>START A CONVERSATION</span>

                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}