import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { o as useSiteContent } from "./site-Ch96WP0p.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-M9uHX60d.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const content = useSiteContent().about;
	const reveal = useReducedMotion() ? false : {
		opacity: 0,
		y: 24
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "projects-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "projects-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: content.eyebrow,
				title: content.title,
				intro: "",
				className: "page-header about-page-header"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-page-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-page-hero",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "about-portrait-wrap about-page-portrait",
						initial: reveal,
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .2
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "about-portrait",
							children: content.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: content.imageUrl,
								alt: content.imageAlt
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PK" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "about-page-intro",
						initial: reveal,
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .2
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "about-page-lead",
							children: content.intro
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "about-bio",
							children: content.bio.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-facts-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
							className: "about-detail-block",
							initial: reveal,
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.educationLabel }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: content.education.degree }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.education.institution }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.education.status })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
							className: "about-detail-block",
							initial: reveal,
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.currentlyLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: content.currently.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: String(index + 1).padStart(2, "0") }), item] }, item)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
							className: "about-detail-block",
							initial: reveal,
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.lookingForLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "about-looking",
								children: content.lookingFor
							})]
						})
					]
				})]
			})]
		})
	});
}
var SplitComponent = AboutPage;
//#endregion
export { SplitComponent as component };
