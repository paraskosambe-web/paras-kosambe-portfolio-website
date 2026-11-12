import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content.functions-ByDpmjdq.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchPortfolioData_createServerFn_handler = createServerRpc({
	id: "ad46d53dc830ae89783928acba7e603a0221c3202500aa7debb953448507a660",
	name: "fetchPortfolioData",
	filename: "src/services/content.functions.ts"
}, (opts) => fetchPortfolioData.__executeServer(opts));
var fetchPortfolioData = createServerFn({ method: "GET" }).handler(fetchPortfolioData_createServerFn_handler, async () => {
	const { fetchPublicPortfolioData } = await import("./public-portfolio.server-Dd1FOsz7.mjs").then((n) => n.n);
	return fetchPublicPortfolioData();
});
//#endregion
export { fetchPortfolioData_createServerFn_handler };
