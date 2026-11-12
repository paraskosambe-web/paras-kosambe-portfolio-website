import { Z as notFound, v as lazyRouteComponent, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as siteConfig, i as portfolioQueryOptions, r as hydrateSiteContent, t as getProjectBySlug } from "./site-Ch96WP0p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-DgYYYU-x.js
var SITE_URL = "https://paras-kosambe.vercel.app";
var SOCIAL_IMAGE_URL = `${SITE_URL}/og-image.png`;
var SOCIAL_IMAGE_ALT = "Paras Kosambe — aspiring data scientist working across data, AI, and software";
function canonicalUrlForPath(path) {
	return new URL(path, `${SITE_URL}/`).toString();
}
function pageHead({ canonicalPath, title, description, openGraphDescription, type = "website", indexable = true, jsonLd }) {
	const canonicalUrl = canonicalPath ? canonicalUrlForPath(canonicalPath) : void 0;
	return {
		...canonicalUrl ? { links: [{
			rel: "canonical",
			href: canonicalUrl
		}] } : {},
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			...canonicalUrl ? [{
				property: "og:url",
				content: canonicalUrl
			}] : [],
			{
				property: "og:site_name",
				content: "Paras Kosambe"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: openGraphDescription ?? description
			},
			{
				property: "og:type",
				content: type
			},
			{
				property: "og:image",
				content: SOCIAL_IMAGE_URL
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: SOCIAL_IMAGE_ALT
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: SOCIAL_IMAGE_URL
			},
			{
				name: "twitter:image:alt",
				content: SOCIAL_IMAGE_ALT
			},
			{
				name: "robots",
				content: indexable ? "index, follow" : "noindex, follow"
			},
			...jsonLd ? [{ "script:ld+json": jsonLd }] : []
		]
	};
}
function websiteStructuredData() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		url: `${SITE_URL}/`,
		name: "Paras Kosambe",
		description: "Portfolio of Paras Kosambe, an aspiring Data Scientist working across analytics, AI/ML, and full-stack development.",
		publisher: { "@id": `${SITE_URL}/about#person` }
	};
}
function profilePageStructuredData() {
	return {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"@id": `${SITE_URL}/about#profile`,
		url: `${SITE_URL}/about`,
		name: "About — Paras Kosambe",
		mainEntity: {
			"@type": "Person",
			"@id": `${SITE_URL}/about#person`,
			name: "Paras Kosambe",
			url: `${SITE_URL}/about`,
			description: "Learn about Paras Kosambe, a final-year B.Sc. Computer Science student at the University of Mumbai focused on data science, data analytics, AI/ML, machine learning, and full-stack development.",
			jobTitle: "Aspiring Data Scientist",
			knowsAbout: [
				"Data science",
				"Data analytics",
				"Machine learning",
				"Artificial intelligence",
				"Full-stack development"
			],
			sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean)
		}
	};
}
function projectStructuredData(project) {
	const url = canonicalUrlForPath(`/projects/${encodeURIComponent(project.slug)}`);
	return {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		"@id": `${url}#project`,
		url,
		name: project.title,
		description: project.description,
		author: { "@id": `${SITE_URL}/about#person` }
	};
}
var $$splitComponentImporter = () => import("./projects._slug-DJ8MPCfl.mjs");
var $$splitNotFoundComponentImporter = () => import("./projects._slug-CaRa_HKB.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: async ({ params, context }) => {
		try {
			hydrateSiteContent(await context.queryClient.ensureQueryData({
				...portfolioQueryOptions,
				revalidateIfStale: true
			}));
		} catch {}
		const project = getProjectBySlug(params.slug);
		if (!project) throw notFound();
		return project;
	},
	head: ({ loaderData }) => {
		const title = loaderData ? `${loaderData.title} — Paras Kosambe` : "Project not found — Paras Kosambe";
		const description = loaderData?.description ?? "The requested project could not be found.";
		return pageHead({
			...loaderData ? { canonicalPath: `/projects/${encodeURIComponent(loaderData.slug)}` } : {},
			title,
			description,
			type: "article",
			indexable: Boolean(loaderData),
			...loaderData ? { jsonLd: projectStructuredData(loaderData) } : {}
		});
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { websiteStructuredData as a, profilePageStructuredData as i, canonicalUrlForPath as n, pageHead as r, Route as t };
