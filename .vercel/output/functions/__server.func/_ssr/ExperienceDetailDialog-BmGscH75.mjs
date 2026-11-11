import { M as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { D as Github, N as ExternalLink } from "../_libs/lucide-react.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-Pbaw5HFo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ExperienceDetailDialog-BmGscH75.js
var import_jsx_runtime = require_jsx_runtime();
function ExperienceDetailDialog({ selected, onOpenChange, responsibilitiesLabel, technologiesLabel }) {
	const facts = selected ? [
		{
			label: "Role",
			value: selected.role
		},
		{
			label: "Organization",
			value: selected.organization
		},
		{
			label: "Dates",
			value: selected.dateRange
		},
		{
			label: "Location",
			value: selected.location
		}
	].filter((fact) => fact.value.trim()) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: selected !== null,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "record-dialog experience-detail-dialog",
			overlayClassName: "experience-detail-overlay",
			children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "experience-detail-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "experience-detail-type",
						children: selected.type || "Experience"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: selected.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: selected.role || selected.organization })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "experience-detail-scroll",
				children: [
					facts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "experience-detail-facts",
						children: facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: fact.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: fact.value })] }, fact.label))
					}) : null,
					selected.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "experience-detail-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "experience-detail-description",
							children: selected.description
						})]
					}) : null,
					selected.linkUrl || selected.githubUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "experience-detail-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Links" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "experience-detail-links",
							children: [selected.linkUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: selected.linkUrl,
								target: "_blank",
								rel: "noreferrer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "experience-link-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { "aria-hidden": "true" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Certificate" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Open certificate" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										className: "experience-link-arrow",
										"aria-hidden": "true"
									})
								]
							}) : null, selected.githubUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: selected.githubUrl,
								target: "_blank",
								rel: "noreferrer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "experience-link-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { "aria-hidden": "true" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "GitHub" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Open repository" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										className: "experience-link-arrow",
										"aria-hidden": "true"
									})
								]
							}) : null]
						})]
					}) : null,
					selected.responsibilities.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "experience-detail-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: responsibilitiesLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "experience-detail-responsibilities",
							children: selected.responsibilities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
						})]
					}) : null,
					selected.technologies.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "experience-detail-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: technologiesLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "experience-detail-technologies",
							children: selected.technologies.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }, item))
						})]
					}) : null
				]
			})] }) : null
		})
	});
}
//#endregion
export { ExperienceDetailDialog as t };
