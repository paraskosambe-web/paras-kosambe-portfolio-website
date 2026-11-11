import { M as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { B as Award, O as FolderKanban, R as Briefcase, _ as Mail, a as Star, r as Trophy, s as Sparkles, w as Image } from "../_libs/lucide-react.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as supabase } from "./client-BI4IvKLW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-CE6JJ75D.js
var import_jsx_runtime = require_jsx_runtime();
async function count(table, filter) {
	let q = supabase.from(table).select("id", {
		count: "exact",
		head: true
	});
	if (filter) q = q.eq(filter[0], filter[1]);
	const { count: c, error } = await q;
	if (error) throw error;
	return c ?? 0;
}
var cards = [
	{
		label: "Projects",
		section: "projects",
		icon: FolderKanban,
		q: () => count("projects")
	},
	{
		label: "Featured projects",
		section: "projects",
		icon: Star,
		q: () => count("projects", ["featured", true])
	},
	{
		label: "Skills",
		section: "skills",
		icon: Sparkles,
		q: () => count("skills")
	},
	{
		label: "Experience",
		section: "experience",
		icon: Briefcase,
		q: () => count("experiences")
	},
	{
		label: "Certifications",
		section: "certifications",
		icon: Award,
		q: () => count("certifications")
	},
	{
		label: "Achievements",
		section: "achievements",
		icon: Trophy,
		q: () => count("achievements")
	},
	{
		label: "Artworks",
		section: "art",
		icon: Image,
		q: () => count("artworks")
	},
	{
		label: "Unread messages",
		section: "messages",
		icon: Mail,
		q: () => count("contact_submissions", ["is_read", false])
	}
];
function AdminDashboard() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["admin", "dashboard"],
		queryFn: () => Promise.all(cards.map((c) => c.q()))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-head",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "admin-eyebrow",
					children: "Overview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Dashboard" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "admin-dash-sub",
					children: "Snapshot of everything published on your portfolio. Select a card to manage it."
				})
			] })
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "admin-error",
			children: "Counts could not be loaded."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-dash-grid",
			children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 14
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: i * .05,
					duration: .4
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/$section",
					params: { section: c.section },
					className: "admin-dash-card",
					"aria-busy": isLoading,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-dash-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {}) })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: data ? data[i] : "–" })]
				})
			}, c.label))
		})
	] });
}
var SplitComponent = AdminDashboard;
//#endregion
export { SplitComponent as component };
