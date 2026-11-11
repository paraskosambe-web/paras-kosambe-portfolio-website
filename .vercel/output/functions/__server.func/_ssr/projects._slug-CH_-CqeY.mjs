import { Z as notFound, v as lazyRouteComponent, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as siteConfig, n as hydrateSiteContent, r as portfolioQueryOptions, t as getProjectBySlug } from "./site-CmVA20l3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-CH_-CqeY.js
var SITE_URL = "https://paras-kosambe.vercel.app";
var SOCIAL_IMAGE_URL = `${SITE_URL}/og-image.png`;
var SOCIAL_IMAGE_ALT = "Paras Kosambe — aspiring data scientist working across data, AI, and software";
function pageHead({ canonicalPath, title, description, openGraphDescription, type = "website", indexable = true, jsonLd }) {
	const canonicalUrl = canonicalPath ? new URL(canonicalPath, SITE_URL).toString() : void 0;
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
			...!indexable ? [{
				name: "robots",
				content: "noindex, follow"
			}] : [],
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
			description: "Learn about Paras Kosambe, a final-year Computer Science student focused on data and software.",
			jobTitle: "Aspiring Data Scientist",
			sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean)
		}
	};
}
var $$splitComponentImporter = () => import("./projects._slug-RuLkSPH6.mjs");
var $$splitNotFoundComponentImporter = () => import("./projects._slug-DnSDIBFx.mjs");
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
			indexable: Boolean(loaderData)
		});
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { websiteStructuredData as i, pageHead as n, profilePageStructuredData as r, Route as t };
