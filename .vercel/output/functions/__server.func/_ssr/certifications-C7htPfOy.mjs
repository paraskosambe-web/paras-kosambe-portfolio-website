import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { M as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { a as useSiteContent } from "./site-CmVA20l3.mjs";
import { s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
import { t as PortfolioCard } from "./PortfolioCard-tZeOIi4k.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
import { a as DialogTitle, n as DialogContent, t as Dialog } from "./dialog-Pbaw5HFo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certifications-C7htPfOy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CertificationsPage() {
	const content = useSiteContent().certifications;
	const [filter, setFilter] = (0, import_react.useState)("ALL");
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(9);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const filtered = content.items.filter((item) => filter === "ALL" || item.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "projects-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "projects-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					eyebrow: content.eyebrow,
					title: content.title,
					intro: content.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "collection-controls certification-filters",
					"aria-label": "Certificate categories",
					children: content.filters.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						"aria-pressed": filter === category,
						onClick: () => {
							setFilter(category);
							setVisibleCount(9);
						},
						children: category
					}, category))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "collection-grid certification-grid",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: filtered.slice(0, visibleCount).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
							item,
							delay: index * .06,
							details: [
								item.issuer,
								item.date,
								item.credentialId
							],
							onImageClick: () => setPreview(item),
							imageLoading: index < 3 ? "eager" : "lazy",
							imageFetchPriority: index === 0 ? "high" : "auto"
						}, item.id))
					})
				}),
				filtered.length > visibleCount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "projects-load-more",
					variant: "hero",
					onClick: () => setVisibleCount((count) => count + 9),
					children: content.loadMoreLabel
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
					open: preview !== null,
					onOpenChange: (open) => {
						if (!open) setPreview(null);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
						className: "certificate-lightbox",
						children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: preview.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: preview.imageUrl,
								alt: preview.imageAlt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								preview.issuer,
								" · ",
								preview.credentialId
							] })
						] }) : null
					})
				})
			]
		})
	});
}
var SplitComponent = CertificationsPage;
//#endregion
export { SplitComponent as component };
