import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { D as Github, G as ArrowDown, H as ArrowUpRight, K as ArrowDownToLine, U as ArrowRight, x as Linkedin } from "../_libs/lucide-react.mjs";
import { o as useSiteContent } from "./site-Ch96WP0p.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, r as useTransform, s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PortfolioCard } from "./PortfolioCard-tZeOIi4k.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
import { t as ExperienceDetailDialog } from "./ExperienceDetailDialog-BmGscH75.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DkxkFfjn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var reveal = {
	hidden: {
		opacity: 0,
		y: 18
	},
	visible: {
		opacity: 1,
		y: 0
	}
};
function MagneticLink({ children, href, external = false }) {
	const reduceMotion = useReducedMotion();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, {
		stiffness: 240,
		damping: 22
	});
	const springY = useSpring(y, {
		stiffness: 240,
		damping: 22
	});
	const handleMove = (event) => {
		if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
		const rect = event.currentTarget.getBoundingClientRect();
		x.set(((event.clientX - rect.left) / rect.width - .5) * 12);
		y.set(((event.clientY - rect.top) / rect.height - .5) * 12);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			x: springX,
			y: springY
		},
		onMouseLeave: () => {
			x.set(0);
			y.set(0);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				onMouseMove: handleMove,
				target: external ? "_blank" : void 0,
				rel: external ? "noreferrer" : void 0,
				children
			})
		})
	});
}
function DataVisual({ labels }) {
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "hero-data-visual",
		initial: reduceMotion ? false : { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			duration: .8,
			delay: 1.35
		},
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 640 620",
			role: "presentation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "hero-grid-lines",
					children: [Array.from({ length: 9 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: 40 + index * 70,
						y1: "30",
						x2: 40 + index * 70,
						y2: "590"
					}, `v-${index}`)), Array.from({ length: 9 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "40",
						y1: 30 + index * 70,
						x2: "600",
						y2: 30 + index * 70
					}, `h-${index}`))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "hero-axis-lines",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "40",
						y1: "520",
						x2: "600",
						y2: "520"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "110",
						y1: "30",
						x2: "110",
						y2: "590"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.polyline, {
					className: "hero-data-line",
					points: "110,470 185,435 250,450 320,335 390,365 465,205 540,245 600,120",
					initial: reduceMotion ? false : {
						pathLength: 0,
						opacity: 0
					},
					animate: {
						pathLength: 1,
						opacity: 1
					},
					transition: {
						duration: 1.3,
						delay: 1.45,
						ease: [
							.22,
							1,
							.36,
							1
						]
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					className: "hero-data-points",
					children: [
						[110, 470],
						[185, 435],
						[250, 450],
						[320, 335],
						[390, 365],
						[465, 205],
						[540, 245],
						[600, 120]
					].map(([cx, cy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx,
						cy,
						r: "3"
					}, `${cx}-${cy}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "hero-coordinate-labels",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "122",
							y: "496",
							children: labels[0]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "332",
							y: "325",
							children: labels[1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "430",
							y: "192",
							children: labels[2]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "515",
							y: "106",
							children: labels[3]
						})
					]
				})
			]
		})
	});
}
function Hero() {
	const { hero } = useSiteContent();
	const reduceMotion = useReducedMotion();
	const [shift, setShift] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [nameAnimationReady, setNameAnimationReady] = (0, import_react.useState)(false);
	const roles = (0, import_react.useMemo)(() => [...new Set([hero.primaryRole, ...hero.disciplines.split(/[·,]/).map((role) => role.trim())].filter(Boolean))], [hero.primaryRole, hero.disciplines]);
	const [roleIndex, setRoleIndex] = (0, import_react.useState)(0);
	const transition = {
		duration: .65,
		ease: [
			.22,
			1,
			.36,
			1
		]
	};
	(0, import_react.useEffect)(() => {
		if (reduceMotion || roles.length < 2) return;
		const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 3200);
		return () => window.clearInterval(timer);
	}, [reduceMotion, roles]);
	(0, import_react.useEffect)(() => {
		if (!document.querySelector(".portfolio-preloader")) {
			setNameAnimationReady(true);
			return;
		}
		const finishPreloader = () => setNameAnimationReady(true);
		window.addEventListener("portfolio-preloader-finished", finishPreloader);
		return () => window.removeEventListener("portfolio-preloader-finished", finishPreloader);
	}, []);
	const handlePointerMove = (event) => {
		if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
		setShift({
			x: (event.clientX / window.innerWidth - .5) * 16,
			y: (event.clientY / window.innerHeight - .5) * 16
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero",
		onMouseMove: handlePointerMove,
		onMouseLeave: () => setShift({
			x: 0,
			y: 0
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-corner hero-corner-nw",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-corner hero-corner-se",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "hero-copy",
					initial: "hidden",
					animate: "visible",
					transition: {
						staggerChildren: reduceMotion ? 0 : .13,
						delayChildren: reduceMotion ? 0 : .16
					},
					style: reduceMotion ? {} : {
						x: shift.x * -.28,
						y: shift.y * -.28
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "hero-eyebrow",
							variants: reveal,
							transition,
							children: hero.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "hero-name",
							"aria-label": `${hero.firstName} ${hero.lastName}`,
							children: [hero.firstName, hero.lastName].map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-name-mask",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: reduceMotion ? false : {
										y: "110%",
										opacity: 0
									},
									animate: nameAnimationReady ? {
										y: 0,
										opacity: 1
									} : {
										y: "110%",
										opacity: 0
									},
									transition: {
										duration: reduceMotion ? 0 : .72,
										delay: reduceMotion ? 0 : .12 + index * .1,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									children: line
								})
							}, index))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "hero-role",
							variants: {
								hidden: {
									opacity: 0,
									y: 24,
									filter: "blur(6px)"
								},
								visible: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)"
								}
							},
							transition: {
								...transition,
								duration: reduceMotion ? 0 : .8
							},
							"aria-live": "off",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-role-window",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									initial: false,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										className: "hero-role-word",
										initial: reduceMotion ? false : {
											opacity: 0,
											y: "0.55em",
											scale: .97,
											filter: "blur(10px)"
										},
										animate: {
											opacity: 1,
											y: 0,
											scale: 1,
											filter: "blur(0px)"
										},
										...reduceMotion ? {} : { exit: {
											opacity: 0,
											y: "-0.4em",
											scale: 1.01,
											filter: "blur(8px)"
										} },
										transition: {
											duration: reduceMotion ? 0 : .62,
											ease: [
												.22,
												1,
												.36,
												1
											]
										},
										children: roles[roleIndex] ?? hero.primaryRole
									}, roles[roleIndex] ?? hero.primaryRole)
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "hero-disciplines",
							variants: reveal,
							transition,
							children: hero.disciplines
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "hero-description",
							variants: reveal,
							transition,
							children: hero.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "hero-actions",
							variants: reveal,
							transition,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticLink, {
								href: hero.primaryAction.href,
								children: [hero.primaryAction.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticLink, {
								href: hero.secondaryAction.href,
								children: [hero.secondaryAction.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "hero-socials",
							variants: reveal,
							transition,
							children: hero.socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: `hero-social-link hero-social-link-${social.label.toLowerCase()}`,
								href: social.href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": social.label,
								title: social.label,
								children: social.label === "GitHub" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {})
							}, social.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "hero-visual-wrap",
					animate: reduceMotion ? false : {
						x: shift.x,
						y: shift.y
					},
					transition: {
						type: "spring",
						stiffness: 80,
						damping: 24
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataVisual, { labels: hero.coordinates })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "hero-scroll",
				initial: reduceMotion ? false : {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .5,
					delay: 1.8
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hero.scrollLabel }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-scroll-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})
				]
			})
		]
	});
}
function SectionOverview({ sectionName, index, title, intro, action, tone = "ink", layout = "standard", children, className = "" }) {
	const reduceMotion = useReducedMotion();
	const sectionRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"]
	});
	const ruleScale = useTransform(scrollYProgress, [
		0,
		.18,
		.82,
		1
	], [
		.12,
		1,
		1,
		.12
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: `overview overview-${tone} overview-${layout} ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "overview-rule",
			style: { scaleX: reduceMotion ? 1 : ruleScale }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overview-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "overview-header",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
							className: "overview-index",
							initial: reduceMotion ? false : {
								opacity: 0,
								y: 12
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: false,
								amount: .35
							},
							transition: {
								duration: .55,
								delay: .08,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							children: ["/", index]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overview-section-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "overview-section-name",
								initial: reduceMotion ? false : {
									opacity: 0,
									y: 24,
									filter: "blur(8px)"
								},
								whileInView: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)"
								},
								viewport: {
									once: false,
									amount: .35
								},
								transition: {
									duration: .7,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								children: sectionName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "overview-section-accent",
								initial: reduceMotion ? false : { scaleX: 0 },
								whileInView: { scaleX: 1 },
								viewport: {
									once: false,
									amount: .35
								},
								transition: {
									duration: .65,
									delay: .12,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								"aria-hidden": "true"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overview-heading-mask",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
								initial: reduceMotion ? false : { y: "105%" },
								whileInView: { y: 0 },
								viewport: {
									once: false,
									amount: .35
								},
								transition: {
									duration: .72,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								children: title
							})
						}),
						intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: reduceMotion ? false : {
								opacity: 0,
								y: 16
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: false,
								amount: .35
							},
							transition: {
								duration: .55,
								delay: .12,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							children: intro
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overview-content",
					children
				}),
				action ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "overview-action",
					href: action.href,
					children: [action.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
				}) : null
			]
		})]
	});
}
function CardCollection({ collection, className = "", experience = false }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const experienceContent = useSiteContent().experience;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `portfolio-grid ${className}`,
		children: collection.items.slice(0, 3).map((item, index) => {
			const experienceItem = experience && "responsibilities" in item && Array.isArray(item.responsibilities) ? item : null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
				item,
				delay: index * .08,
				replayOnView: true,
				details: experienceItem ? [
					experienceItem.role,
					experienceItem.dateRange,
					experienceItem.location
				].filter(Boolean) : [],
				secondaryActions: experienceItem ? [...experienceItem.linkUrl ? [{
					label: "Certificate",
					href: experienceItem.linkUrl
				}] : [], ...experienceItem.githubUrl ? [{
					label: "GitHub",
					href: experienceItem.githubUrl
				}] : []] : [],
				...experienceItem ? {
					onActivate: () => setSelected(experienceItem),
					onActionClick: () => setSelected(experienceItem)
				} : {}
			}, item.id);
		})
	}), experience ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceDetailDialog, {
		selected,
		onOpenChange: (open) => {
			if (!open) setSelected(null);
		},
		responsibilitiesLabel: experienceContent.dialogResponsibilitiesLabel,
		technologiesLabel: experienceContent.dialogTechnologiesLabel
	}) : null] });
}
function HomeOverviewSections() {
	const content = useSiteContent().home;
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.about.sectionName,
			index: content.about.index,
			title: content.about.title,
			intro: content.about.intro.join(" "),
			tone: "charcoal",
			layout: "split",
			className: "about-overview",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "about-portrait-wrap",
					initial: reduceMotion ? false : {
						opacity: 0,
						x: -22
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: false,
						amount: .3
					},
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "about-portrait",
						children: content.about.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: content.about.imageUrl,
							alt: content.about.imageAlt
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PK" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "currently-block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.about.currentlyLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: content.about.currently.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: reduceMotion ? false : {
								opacity: 0,
								x: -12
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: {
								once: false,
								amount: .4
							},
							transition: {
								duration: .45,
								delay: index * .08
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["0", index + 1] }), item]
						}, item)) })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: content.about.action.href,
							children: [content.about.action.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.skills.sectionName,
			index: content.skills.index,
			title: content.skills.title,
			intro: content.skills.intro,
			action: content.skills.action,
			tone: "grid",
			layout: "right",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "portfolio-grid skills-grid",
				children: content.skills.categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
					item: category,
					visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "skill-card-visual",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: category.title })
					}),
					delay: index * .07,
					replayOnView: true
				}, category.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.projects.sectionName,
			index: content.projects.index,
			title: content.projects.title,
			intro: content.projects.intro,
			action: content.projects.action,
			tone: "charcoal",
			layout: "standard",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardCollection, { collection: content.projects })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.experience.sectionName,
			index: content.experience.index,
			title: content.experience.title,
			intro: content.experience.intro,
			action: content.experience.action,
			tone: "ruled",
			layout: "split",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardCollection, {
				collection: content.experience,
				experience: true
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.certifications.sectionName,
			index: content.certifications.index,
			title: content.certifications.title,
			intro: content.certifications.intro,
			action: content.certifications.action,
			tone: "charcoal",
			layout: "right",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardCollection, { collection: content.certifications })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.achievements.sectionName,
			index: content.achievements.index,
			title: content.achievements.title,
			intro: content.achievements.intro,
			action: content.achievements.action,
			tone: "offset",
			layout: "standard",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardCollection, { collection: content.achievements })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.resume.sectionName,
			index: content.resume.index,
			title: content.resume.title,
			intro: content.resume.intro,
			tone: "charcoal",
			layout: "compact",
			className: "resume-overview",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "resume-strip",
				initial: reduceMotion ? false : {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: false,
					amount: .3
				},
				transition: {
					duration: .6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.resume.updatedLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: content.resume.updated })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "resume-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: content.resume.viewAction.href,
							children: [content.resume.viewAction.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: content.resume.downloadAction.href,
							download: true,
							children: [content.resume.downloadAction.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, {})]
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.art.sectionName,
			index: content.art.index,
			title: content.art.title,
			intro: content.art.intro,
			action: content.art.action,
			tone: "ink",
			layout: "split",
			className: "art-overview",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardCollection, { collection: content.art })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionOverview, {
			sectionName: content.contact.sectionName,
			index: content.contact.index,
			title: content.contact.title,
			tone: "grid",
			layout: "compact",
			className: "contact-overview",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "contact-cta",
				initial: reduceMotion ? false : {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: false,
					amount: .3
				},
				transition: {
					duration: .6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.contact.intro }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "hero",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: content.contact.action.href,
						children: [content.contact.action.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})]
			})
		})
	] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeOverviewSections, {})] });
}
//#endregion
export { Index as component };
