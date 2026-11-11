import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { M as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { H as ArrowUpRight, M as EyeOff, b as LoaderCircle, j as Eye, y as LockKeyhole } from "../_libs/lucide-react.mjs";
import { S as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Button } from "./button-Bz4MlLii.mjs";
import { t as supabase } from "./client-BI4IvKLW.mjs";
import { t as Input } from "./input-DcOJTItv.mjs";
import { t as Label } from "./label-BE0jqoiG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as stringType, i as objectType } from "../_libs/zod.mjs";
import { r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin_.login-DbHL1r6H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	email: stringType().trim().email("Enter a valid email").max(255),
	password: stringType().min(6, "Password is too short").max(128)
});
function AdminLogin() {
	const navigate = useNavigate();
	const reducedMotion = useReducedMotion();
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [loginError, setLoginError] = (0, import_react.useState)("");
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			email: "",
			password: ""
		}
	});
	const onSubmit = form.handleSubmit(async (values) => {
		setLoginError("");
		try {
			const { error } = await supabase.auth.signInWithPassword(values);
			if (error) throw new Error("Unable to sign in. Check your admin email and password.");
			const { data, error: userError } = await supabase.auth.getUser();
			if (userError || !data.user) throw new Error("Unable to verify your account. Please try again.");
			const { data: isAdmin, error: roleError } = await supabase.rpc("has_role", {
				_user_id: data.user.id,
				_role: "admin"
			});
			if (roleError || !isAdmin) {
				await supabase.auth.signOut();
				throw new Error("This account does not have admin access.");
			}
			await navigate({
				to: "/admin",
				replace: true
			});
		} catch (error) {
			const message = error instanceof Error ? error.message : "Sign in failed. Please try again.";
			setLoginError(message);
			toast.error(message);
		}
	});
	const err = form.formState.errors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "owner-login",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
			className: "owner-login-panel",
			"aria-label": "Admin login",
			initial: reducedMotion ? false : {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .6 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "owner-login-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "owner-monogram",
						children: ["PK", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["PARAS KOSAMBE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PORTFOLIO / ADMIN" })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "owner-login-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "owner-login-form",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "owner-login-eyebrow",
								children: "PRIVATE WORKSPACE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Welcome back", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "owner-login-intro",
								children: "Sign in to your portfolio."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "owner-login-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Admin ID / Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										placeholder: "Your admin email",
										autoComplete: "username",
										maxLength: 255,
										"aria-invalid": !!err.email,
										"aria-describedby": err.email ? "email-error" : void 0,
										...form.register("email")
									}),
									err.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "email-error",
										className: "owner-login-error",
										children: err.email.message
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "owner-login-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "password",
										children: "Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "owner-password",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "password",
											type: showPassword ? "text" : "password",
											placeholder: "Enter your password",
											autoComplete: "current-password",
											maxLength: 128,
											"aria-invalid": !!err.password,
											"aria-describedby": err.password ? "password-error" : void 0,
											...form.register("password")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											type: "button",
											"aria-label": showPassword ? "Hide password" : "Show password",
											"aria-pressed": showPassword,
											title: showPassword ? "Hide password" : "Show password",
											onClick: () => setShowPassword((v) => !v),
											children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {})
										})]
									}),
									err.password ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "password-error",
										className: "owner-login-error",
										children: err.password.message
									}) : null
								]
							}),
							loginError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "owner-login-error",
								children: loginError
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "owner-login-submit",
								type: "submit",
								disabled: form.formState.isSubmitting,
								children: form.formState.isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Signing in", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Enter workspace", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "owner-login-security",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { size: 13 }), "Authorized admin access only"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "owner-login-art",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "owner-art-label",
								children: "01 / OWNER ACCESS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "owner-art-monogram",
								initial: reducedMotion ? false : {
									opacity: 0,
									y: 15
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: .2
								},
								children: ["PK", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "owner-art-caption",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PARAS KOSAMBE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Data. Intelligence. Possibility." })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "owner-login-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PARAS PORTFOLIO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PRIVATE / SECURE" })]
				})
			]
		})
	});
}
//#endregion
export { AdminLogin as component };
