import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { H as ArrowUpRight, I as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PortfolioCard-tZeOIi4k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getCardImageUrl(imageUrl) {
	if (!imageUrl.startsWith("/api/public/media/portfolio-images/")) return imageUrl;
	return `${imageUrl}${imageUrl.includes("?") ? "&" : "?"}width=900&quality=74`;
}
function PortfolioCard({ item, visual, compact = false, details = [], secondaryActions = [], expandableTags, replayOnView = false, delay = 0, onActivate, onActionClick, onImageClick, imageLoading = "lazy", imageFetchPriority = "auto" }) {
	const reduceMotion = useReducedMotion();
	const [tagsExpanded, setTagsExpanded] = (0, import_react.useState)(false);
	const [unoptimizedImageUrl, setUnoptimizedImageUrl] = (0, import_react.useState)(null);
	const [failedImageUrl, setFailedImageUrl] = (0, import_react.useState)(null);
	const visibleTags = tagsExpanded ? item.tags : item.tags.slice(0, 3);
	const extraTags = tagsExpanded ? 0 : Math.max(item.tags.length - visibleTags.length, 0);
	const imageUrl = item.imageUrl || void 0;
	const cardImageUrl = imageUrl ? unoptimizedImageUrl === imageUrl ? imageUrl : getCardImageUrl(imageUrl) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		className: `portfolio-card${compact ? " portfolio-card-compact" : ""}`,
		initial: reduceMotion ? false : {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: !replayOnView,
			amount: .18
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		onClick: onActivate,
		onKeyDown: onActivate ? (event) => {
			if (event.key === "Enter" || event.key === " ") onActivate();
		} : void 0,
		role: onActivate ? "button" : void 0,
		tabIndex: onActivate ? 0 : void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `portfolio-card-media${onImageClick ? " is-interactive" : ""}`,
			onClick: onImageClick ? (event) => {
				event.stopPropagation();
				onImageClick();
			} : void 0,
			children: imageUrl && failedImageUrl !== imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cardImageUrl,
				alt: item.imageAlt,
				loading: imageLoading,
				fetchPriority: imageFetchPriority,
				decoding: "async",
				sizes: "(max-width: 639px) 100vw, (max-width: 900px) 50vw, 33vw",
				onError: () => {
					if (cardImageUrl !== imageUrl && unoptimizedImageUrl !== imageUrl) setUnoptimizedImageUrl(imageUrl);
					else setFailedImageUrl(imageUrl);
				}
			}) : visual ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.index })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "portfolio-card-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "portfolio-card-meta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.index }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.meta })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.description }),
				details.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "portfolio-card-details",
					children: details.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detail }, detail))
				}) : null,
				secondaryActions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "portfolio-card-secondary-actions",
					"aria-label": `${item.title} links`,
					children: secondaryActions.filter((link) => link.href).map((link) => {
						const external = /^https?:\/\//.test(link.href);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							target: external ? "_blank" : void 0,
							rel: external ? "noreferrer" : void 0,
							onClick: (event) => event.stopPropagation(),
							children: link.label
						}, link.label);
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "portfolio-card-tags",
					"aria-label": "Tags",
					children: [visibleTags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tag }, tag)), extraTags > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["+", extraTags] }) : null]
				}),
				expandableTags && item.tags.length > 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "portfolio-card-expand-tags",
					type: "button",
					"aria-expanded": tagsExpanded,
					onClick: () => setTagsExpanded((expanded) => !expanded),
					children: [tagsExpanded ? expandableTags.collapseLabel : expandableTags.expandLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						className: tagsExpanded ? "is-expanded" : "",
						"aria-hidden": "true"
					})]
				}) : null,
				item.action ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "portfolio-card-action",
					href: item.action.href,
					onClick: (event) => {
						event.stopPropagation();
						if (onActionClick) {
							event.preventDefault();
							onActionClick();
						}
					},
					children: [item.action.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })]
				}) : null
			]
		})]
	});
}
//#endregion
export { PortfolioCard as t };
