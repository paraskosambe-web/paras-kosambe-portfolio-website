import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { F as ChevronUp, H as ArrowUpRight, I as ChevronDown, L as Check } from "../_libs/lucide-react.mjs";
import { a as siteConfig, o as useSiteContent } from "./site-Ch96WP0p.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./PageHeader-DICjnaAB.mjs";
import { r as cn, t as Button } from "./button-Bz4MlLii.mjs";
import { t as supabase } from "./client-BI4IvKLW.mjs";
import { t as Input } from "./input-DcOJTItv.mjs";
import { t as Textarea } from "./textarea-B3GnpHHs.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as stringType, i as objectType, r as enumType } from "../_libs/zod.mjs";
import { n as Controller, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DTyJZqJy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var contactSchema = objectType({
	name: stringType().trim().min(2, "Enter at least 2 characters.").max(80, "Use 80 characters or fewer."),
	email: stringType().trim().email("Enter a valid email address.").max(255, "Use 255 characters or fewer."),
	interest: enumType([
		"Data Science",
		"Data Analytics",
		"AI-ML",
		"Full-Stack Development",
		"Collaboration",
		"Other"
	]),
	message: stringType().trim().min(10, "Enter at least 10 characters.").max(1e3, "Use 1000 characters or fewer."),
	website: stringType().max(0)
});
function ContactPage() {
	const content = useSiteContent().contact;
	const reveal = useReducedMotion() ? false : {
		opacity: 0,
		y: 24
	};
	const titleWords = content.title.trim().split(/\s+/);
	const lastTitleWord = titleWords.pop();
	const { register, handleSubmit, control, reset, watch, formState: { errors, isValid, isSubmitting } } = useForm({
		resolver: u(contactSchema),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			interest: "Data Science",
			message: "",
			website: ""
		}
	});
	const messageLength = watch("message").length;
	const submit = async (values) => {
		try {
			const parsed = contactSchema.parse(values);
			if (!/^\d+$/.test(siteConfig.whatsapp)) throw new Error("Invalid WhatsApp number");
			const message = `Hi Paras,\n\nName: ${parsed.name}\nEmail: ${parsed.email}\nInterested in: ${parsed.interest}\n\nMessage:\n${parsed.message}\n\nI would like to discuss this opportunity/project with you.`;
			const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
			const popup = window.open(url, "_blank", "noopener,noreferrer");
			if (!values.website) {
				const { error } = await supabase.from("contact_submissions").insert({
					name: parsed.name,
					email: parsed.email,
					interest: parsed.interest,
					message: parsed.message
				});
				if (error) {
					toast.error(content.form.errorMessage);
					if (!popup) window.location.assign(url);
					return;
				}
			}
			if (!popup) window.location.assign(url);
			toast.success(content.form.successMessage);
			reset();
		} catch {
			toast.error(content.form.errorMessage);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "contact-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "projects-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				className: "page-header contact-page-header",
				eyebrow: content.eyebrow,
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					titleWords.join(" "),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "contact-title-break" }),
					lastTitleWord
				] }),
				intro: content.intro
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "contact-links",
					initial: reveal,
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .12
					},
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-links-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 / Find me" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Choose a channel." })]
					}), content.links.map((link, index) => {
						const href = link.href;
						const value = link.value;
						const external = href.startsWith("http");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							target: external ? "_blank" : void 0,
							rel: external ? "noreferrer" : void 0,
							"aria-disabled": href === "#",
							onClick: href === "#" ? (event) => event.preventDefault() : void 0,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									String(index + 1).padStart(2, "0"),
									" / ",
									link.label
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
							]
						}, link.label);
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					className: "contact-form",
					onSubmit: handleSubmit(submit),
					noValidate: true,
					initial: reveal,
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .12
					},
					transition: {
						duration: .65,
						delay: .12,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-form-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02 / Send a message" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tell me what you’re working on." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I’ll get back to you as soon as I can." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "honeypot",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "website",
								children: "Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "website",
								tabIndex: -1,
								autoComplete: "off",
								...register("website")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-form-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: `${content.form.nameLabel}*`,
								error: errors.name?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									...register("name"),
									"aria-invalid": Boolean(errors.name),
									maxLength: 80,
									autoComplete: "name"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: `${content.form.emailLabel}*`,
								error: errors.email?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									...register("email"),
									type: "email",
									"aria-invalid": Boolean(errors.email),
									maxLength: 255,
									autoComplete: "email"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: content.form.interestLabel,
							error: errors.interest?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
								control,
								name: "interest",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: field.value,
									onValueChange: field.onChange,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										"aria-invalid": Boolean(errors.interest),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: content.form.interests.map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: interest,
										children: interest
									}, interest)) })]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: `${content.form.messageLabel}*`,
							error: errors.message?.message,
							counter: `${messageLength} / 1000`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								...register("message"),
								"aria-invalid": Boolean(errors.message),
								maxLength: 1e3,
								rows: 8
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "hero",
							type: "submit",
							disabled: !isValid || isSubmitting,
							children: [content.form.submitLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					]
				})]
			})]
		})
	});
}
function FormField({ label, error, counter, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "contact-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: error ?? counter ?? "\xA0" })
		]
	});
}
var SplitComponent = ContactPage;
//#endregion
export { SplitComponent as component };
