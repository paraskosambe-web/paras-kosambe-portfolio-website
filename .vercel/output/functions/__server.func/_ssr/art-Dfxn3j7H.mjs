import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { H as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { o as useSiteContent } from "./site-Ch96WP0p.mjs";
import { s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
import { t as PortfolioCard } from "./PortfolioCard-tZeOIi4k.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
import { a as DialogTitle, n as DialogContent, t as Dialog } from "./dialog-Pbaw5HFo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/art-Dfxn3j7H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArtPage() {
	const content = useSiteContent().art;
	const [filter, setFilter] = (0, import_react.useState)("ALL");
	const [preview, setPreview] = (0, import_react.useState)(null);
	const items = content.items.filter((item) => filter === "ALL" || item.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "projects-page art-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "projects-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					eyebrow: content.eyebrow,
					title: content.title,
					intro: content.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "art-controls",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "project-filters",
						"aria-label": "Artwork categories",
						children: content.filters.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							"aria-pressed": filter === category,
							onClick: () => setFilter(category),
							children: category
						}, category))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "collection-grid art-grid",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
							item,
							delay: index * .06,
							details: [item.medium, item.year],
							onImageClick: () => setPreview(item)
						}, item.id))
					})
				}),
				content.portfolioUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "art-portfolio-link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.portfolioDescription }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: content.portfolioUrl,
							target: "_blank",
							rel: "noreferrer",
							children: [content.portfolioLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
					open: preview !== null,
					onOpenChange: (open) => {
						if (!open) setPreview(null);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
						className: "art-lightbox",
						children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: preview.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: preview.imageUrl,
								alt: preview.imageAlt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								preview.medium,
								" · ",
								preview.year
							] })
						] }) : null
					})
				})
			]
		})
	});
}
var SplitComponent = ArtPage;
//#endregion
export { SplitComponent as component };
