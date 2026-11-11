import { M as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-DICjnaAB.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, intro, className = "page-header" }) {
	const reduceMotion = useReducedMotion();
	const isLongTitle = typeof title === "string" && [
		"achievements",
		"certifications",
		"experience"
	].includes(title.toLowerCase());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: reduceMotion ? false : {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-header-mask",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					className: isLongTitle ? "page-header-title page-header-title-long" : "page-header-title",
					initial: reduceMotion ? false : { y: "105%" },
					animate: { y: 0 },
					transition: {
						duration: .8,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: title
				})
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: reduceMotion ? false : {
					opacity: 0,
					y: 16
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .2 },
				children: intro
			}) : null
		]
	});
}
//#endregion
export { PageHeader as t };
