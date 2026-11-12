//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-B4ajsCvT.js
var manifest = { "ad46d53dc830ae89783928acba7e603a0221c3202500aa7debb953448507a660": {
	functionName: "fetchPortfolioData_createServerFn_handler",
	importer: () => import("./_ssr/content.functions-ByDpmjdq.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
