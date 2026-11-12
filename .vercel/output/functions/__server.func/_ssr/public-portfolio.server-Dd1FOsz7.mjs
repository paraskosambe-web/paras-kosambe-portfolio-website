import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public-portfolio.server-Dd1FOsz7.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var public_portfolio_server_exports = /* @__PURE__ */ __exportAll({ fetchPublicPortfolioData: () => fetchPublicPortfolioData });
/** Read only the public portfolio tables using the publishable key and RLS. */
async function fetchPublicPortfolioData() {
	const url = process.env["SUPABASE_URL"];
	const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!url || !key) return null;
	const db = createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(init?.headers);
			if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
			headers.set("apikey", key);
			return fetch(input, {
				...init,
				headers
			});
		} }
	});
	const order = { ascending: true };
	const [projects, certifications, experiences, skills, achievements, artworks, resumes, site, socials] = await Promise.all([
		db.from("projects").select("*").order("sort_order", order),
		db.from("certifications").select("*").order("sort_order", order),
		db.from("experiences").select("*").order("sort_order", order),
		db.from("skills").select("*").order("sort_order", order),
		db.from("achievements").select("*").order("sort_order", order),
		db.from("artworks").select("*").order("sort_order", order),
		db.from("resumes").select("*").eq("is_active", true).limit(1),
		db.from("site_content").select("*").eq("key", "main").maybeSingle(),
		db.from("social_links").select("*").order("sort_order", order)
	]);
	const failed = [
		projects,
		certifications,
		experiences,
		skills,
		achievements,
		artworks,
		resumes,
		site,
		socials
	].find((result) => result.error);
	if (failed?.error) {
		console.error("[portfolio] public content read failed", failed.error.message);
		return null;
	}
	return {
		projects: projects.data ?? [],
		certifications: certifications.data ?? [],
		experiences: experiences.data ?? [],
		skills: skills.data ?? [],
		achievements: achievements.data ?? [],
		artworks: artworks.data ?? [],
		resume: resumes.data?.[0] ?? null,
		site: site.data ?? null,
		socials: socials.data ?? []
	};
}
//#endregion
export { public_portfolio_server_exports as n, fetchPublicPortfolioData as t };
