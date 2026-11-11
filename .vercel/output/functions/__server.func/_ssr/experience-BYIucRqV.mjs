import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { M as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { a as useSiteContent } from "./site-CmVA20l3.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
import { t as PortfolioCard } from "./PortfolioCard-tZeOIi4k.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
import { t as ExperienceDetailDialog } from "./ExperienceDetailDialog-BmGscH75.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-BYIucRqV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ExperiencePage() {
	const content = useSiteContent().experience;
	const [filter, setFilter] = (0, import_react.useState)("ALL");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const filters = ["ALL", ...new Set(content.items.map((item) => item.type.trim()).filter(Boolean))];
	const filteredItems = content.items.filter((item) => filter === "ALL" || item.type.trim() === filter);
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
				filters.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "collection-controls certification-filters experience-filters",
					"aria-label": "Filter experience by type",
					children: filters.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						"aria-pressed": filter === category,
						onClick: () => setFilter(category),
						children: category === "ALL" ? "All" : category
					}, category))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "collection-grid experience-grid",
					children: filteredItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
						item,
						visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "experience-card-visual",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						}),
						delay: index * .08,
						details: [
							item.role,
							item.dateRange,
							item.location
						],
						secondaryActions: [...item.linkUrl ? [{
							label: "Certificate",
							href: item.linkUrl
						}] : [], ...item.githubUrl ? [{
							label: "GitHub",
							href: item.githubUrl
						}] : []],
						onActivate: () => setSelected(item),
						onActionClick: () => setSelected(item)
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceDetailDialog, {
					selected,
					onOpenChange: (open) => {
						if (!open) setSelected(null);
					},
					responsibilitiesLabel: content.dialogResponsibilitiesLabel,
					technologiesLabel: content.dialogTechnologiesLabel
				})
			]
		})
	});
}
var SplitComponent = ExperiencePage;
//#endregion
export { SplitComponent as component };
