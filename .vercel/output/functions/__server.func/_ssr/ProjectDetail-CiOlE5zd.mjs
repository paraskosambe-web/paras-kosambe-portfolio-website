import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { D as Github, H as ArrowUpRight, U as ArrowRight, W as ArrowLeft } from "../_libs/lucide-react.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useSiteContent } from "./site-Ch96WP0p.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectDetail-CiOlE5zd.js
var import_jsx_runtime = require_jsx_runtime();
function DetailSection({ index, title, children, className = "" }) {
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		className: `project-detail-section ${className}`,
		initial: reduceMotion ? false : {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .18
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: index }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })
		]
	});
}
function ProjectDetail({ project }) {
	const content = useSiteContent().projects;
	const labels = content.sectionLabels;
	const projectIndex = content.items.findIndex((item) => item.slug === project.slug);
	const previous = projectIndex > 0 ? content.items[projectIndex - 1] : void 0;
	const next = projectIndex < content.items.length - 1 ? content.items[projectIndex + 1] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "project-detail",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "project-detail-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "project-back",
					to: "/projects",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), content.backLabel]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "project-detail-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						project.index,
						" / ",
						project.category
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: project.title })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.description || project.overview })]
				}),
				project.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "project-detail-hero",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.imageUrl,
						alt: project.imageAlt || project.title
					})
				}) : null,
				project.githubUrl || project.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "project-detail-actions",
					children: [project.githubUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.githubUrl,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {}), content.githubLabel]
						})
					}) : null, project.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.liveUrl,
							target: /^https?:\/\//.test(project.liveUrl) ? "_blank" : void 0,
							rel: /^https?:\/\//.test(project.liveUrl) ? "noreferrer" : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {}), content.liveLabel]
						})
					}) : null]
				}) : null,
				project.overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
					index: "01",
					title: labels.overview,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.overview })
				}) : null,
				project.problem || project.solution ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "project-detail-pair",
					children: [project.problem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
						index: "02",
						title: labels.problem,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.problem })
					}) : null, project.solution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
						index: "03",
						title: labels.solution,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.solution })
					}) : null]
				}) : null,
				project.features.length || project.technologies.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "project-detail-pair",
					children: [project.features.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
						index: "04",
						title: labels.features,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: project.features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), feature] }, feature)) })
					}) : null, project.technologies.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
						index: "05",
						title: labels.technologies,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "project-tech-list",
							children: project.technologies.map((technology) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: technology }, technology))
						})
					}) : null]
				}) : null,
				project.screenshots.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
					index: "06",
					title: labels.screenshots,
					className: "project-screenshots-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "project-screenshots",
						children: project.screenshots.map((screenshot, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: screenshot,
							alt: `${project.title} screenshot ${index + 1}`,
							loading: "lazy",
							decoding: "async"
						}, `${screenshot}-${index}`))
					})
				}) : null,
				project.development || project.learnings.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "project-detail-pair",
					children: [project.development ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
						index: "07",
						title: labels.development,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.development })
					}) : null, project.learnings.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailSection, {
						index: "08",
						title: labels.learnings,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: project.learnings.map((learning) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: learning }, learning)) })
					}) : null]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "project-pagination",
					"aria-label": "Project pagination",
					children: [previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects/$slug",
						params: { slug: previous.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [labels.previous, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: previous.title })] })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects/$slug",
						params: { slug: next.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [labels.next, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: next.title })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
				})
			]
		})
	});
}
function ProjectNotFound() {
	const content = useSiteContent().projects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "project-not-found",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "404" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: content.notFoundTitle }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.notFoundDescription }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "hero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), content.backLabel]
				})
			})
		]
	});
}
//#endregion
export { ProjectNotFound as n, ProjectDetail as t };
