import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { u as Search } from "../_libs/lucide-react.mjs";
import { o as useSiteContent } from "./site-Ch96WP0p.mjs";
import { s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
import { t as PortfolioCard } from "./PortfolioCard-tZeOIi4k.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
import { t as Input } from "./input-DcOJTItv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects.index-vGqy0pHo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCard, {
		item: project,
		secondaryActions: [{
			label: "GitHub",
			href: project.githubUrl
		}, {
			label: "Live Demo",
			href: project.liveUrl
		}]
	});
}
function ProjectsIndex() {
	const content = useSiteContent().projects;
	const reduceMotion = useReducedMotion();
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(9);
	const filteredProjects = (0, import_react.useMemo)(() => {
		const normalizedQuery = query.trim().toLowerCase();
		return content.items.filter((project) => {
			const matchesFilter = filter === "All" || project.category === filter;
			const searchable = [
				project.title,
				project.category,
				...project.technologies
			].join(" ").toLowerCase();
			return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
		});
	}, [
		content.items,
		filter,
		query
	]);
	const setCategory = (category) => {
		setFilter(category);
		setVisibleCount(9);
	};
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "project-controls",
					initial: reduceMotion ? false : {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .28 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "project-filters",
						"aria-label": "Project categories",
						children: content.filters.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							"aria-pressed": filter === category,
							onClick: () => setCategory(category),
							children: category
						}, category))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "project-search",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: content.searchLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": "true" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: content.searchPlaceholder
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "collection-grid project-grid",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: filteredProjects.slice(0, visibleCount).map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.id))
					})
				}),
				filteredProjects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "projects-empty",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: content.emptyTitle }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.emptyDescription })]
				}) : null,
				filteredProjects.length > visibleCount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "projects-load-more",
					variant: "hero",
					onClick: () => setVisibleCount((count) => count + 9),
					children: content.loadMoreLabel
				}) : null
			]
		})
	});
}
var SplitComponent = ProjectsIndex;
//#endregion
export { SplitComponent as component };
