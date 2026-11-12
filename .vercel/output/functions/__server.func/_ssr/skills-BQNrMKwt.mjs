import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { o as useSiteContent } from "./site-Ch96WP0p.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
import { t as PortfolioCard } from "./PortfolioCard-tZeOIi4k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-BQNrMKwt.js
var import_jsx_runtime = require_jsx_runtime();
function SkillsPage() {
	const content = useSiteContent().skills;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "projects-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "projects-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: content.eyebrow,
				title: content.title,
				intro: content.intro
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layout: true,
				className: "collection-grid certification-grid",
				children: content.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
					item,
					expandableTags: {
						expandLabel: content.viewSkillsLabel,
						collapseLabel: content.hideSkillsLabel
					},
					delay: index * .06
				}, item.id))
			})]
		})
	});
}
var SplitComponent = SkillsPage;
//#endregion
export { SplitComponent as component };
