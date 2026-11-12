import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { o as useSiteContent } from "./site-Ch96WP0p.mjs";
import { s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
import { t as PortfolioCard } from "./PortfolioCard-tZeOIi4k.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/achievements-CoNI2xbt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AchievementsPage() {
	const content = useSiteContent().achievements;
	const [filter, setFilter] = (0, import_react.useState)("ALL");
	const items = content.items.filter((item) => filter === "ALL" || item.category === filter);
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
					"aria-label": "Achievement categories",
					children: content.filters.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						"aria-pressed": filter === category,
						onClick: () => setFilter(category),
						children: category
					}, category))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "collection-grid",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
							item,
							delay: index * .08,
							details: [
								item.organization,
								item.date,
								item.category
							]
						}, item.id))
					})
				})
			]
		})
	});
}
var SplitComponent = AchievementsPage;
//#endregion
export { SplitComponent as component };
