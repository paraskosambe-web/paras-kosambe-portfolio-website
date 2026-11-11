import { M as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { K as ArrowDownToLine, g as Maximize2 } from "../_libs/lucide-react.mjs";
import { a as useSiteContent } from "./site-CmVA20l3.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-pLhRyqUn.js
var import_jsx_runtime = require_jsx_runtime();
function ResumePage() {
	const content = useSiteContent().resume;
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "resume-page-meta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.updatedLabel }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: content.updated }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: content.pdfUrl,
								download: true,
								children: [content.downloadLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: content.pdfUrl,
								target: "_blank",
								rel: "noreferrer",
								children: [content.fullscreenLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {})]
							})
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "resume-frame",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("object", {
						data: content.pdfUrl,
						type: "application/pdf",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							content.fallbackText,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: content.pdfUrl,
								children: content.fallbackLabel
							}),
							"."
						] })
					})
				})
			]
		})
	});
}
var SplitComponent = ResumePage;
//#endregion
export { SplitComponent as component };
