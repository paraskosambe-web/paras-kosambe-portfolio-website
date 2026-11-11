import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { M as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { A as FileText, B as Award, C as LayoutGrid, N as ExternalLink, O as FolderKanban, R as Briefcase, S as Link2, _ as Mail, c as Settings, h as Menu, n as User, r as Trophy, s as Sparkles, t as X, v as LogOut, w as Image } from "../_libs/lucide-react.mjs";
import { S as useNavigate, _ as Outlet, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { t as supabase } from "./client-BI4IvKLW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-B-dzylA9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var adminNav = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: LayoutGrid
	},
	{
		to: "/admin/projects",
		label: "Projects",
		icon: FolderKanban
	},
	{
		to: "/admin/certifications",
		label: "Certifications",
		icon: Award
	},
	{
		to: "/admin/experience",
		label: "Experience",
		icon: Briefcase
	},
	{
		to: "/admin/skills",
		label: "Skills",
		icon: Sparkles
	},
	{
		to: "/admin/achievements",
		label: "Achievements",
		icon: Trophy
	},
	{
		to: "/admin/resume",
		label: "Resume",
		icon: FileText
	},
	{
		to: "/admin/art",
		label: "Art",
		icon: Image
	},
	{
		to: "/admin/about",
		label: "About",
		icon: User
	},
	{
		to: "/admin/social-links",
		label: "Social Links",
		icon: Link2
	},
	{
		to: "/admin/messages",
		label: "Messages",
		icon: Mail
	},
	{
		to: "/admin/settings",
		label: "Settings",
		icon: Settings
	}
];
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "admin-brand-block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "admin-brand-mark",
			children: "PK"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-brand-text",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "PARAS KOSAMBE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Portfolio Console" })]
		})]
	});
}
function AdminShell() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const [open, setOpen] = (0, import_react.useState)(false);
	async function signOut() {
		await queryClient.cancelQueries();
		queryClient.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/admin/login",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "admin-app",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "admin-topbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "admin-menu-btn",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `admin-sidebar ${open ? "is-open" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-sidebar-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "admin-console-tag",
							children: "Admin Console"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: adminNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to === "/admin" ? "/admin" : "/admin/$section",
						params: item.to === "/admin" ? {} : { section: item.to.slice(7) },
						activeOptions: { exact: true },
						activeProps: { className: "is-active" },
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
					}, item.to)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-sidebar-foot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/",
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}), " View site"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: signOut,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), " Sign out"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "admin-main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		]
	});
}
var SplitComponent = AdminShell;
//#endregion
export { SplitComponent as component };
