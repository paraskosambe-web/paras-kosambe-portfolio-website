import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime, a as Overlay2, c as Title2, d as DialogContent, f as DialogDescription, h as DialogTitle, i as Description2, l as Dialog, m as DialogPortal, n as Cancel, o as Portal2, p as DialogOverlay, r as Content2, s as Root2, t as Action, u as DialogClose } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { E as GripVertical, G as ArrowDown, L as Check, N as ExternalLink, T as ImagePlus, V as ArrowUp, b as LoaderCircle, f as Plus, i as Trash2, k as FileUp, p as Pencil, t as X, u as Search, w as Image } from "../_libs/lucide-react.mjs";
import { C as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as buttonVariants, r as cn, t as Button } from "./button-Bz4MlLii.mjs";
import { t as supabase } from "./client-BI4IvKLW.mjs";
import { n as collections, r as slugify, t as Route } from "./admin._section-B-7L3Zfq.mjs";
import { t as Input } from "./input-DcOJTItv.mjs";
import { t as Label } from "./label-BE0jqoiG.mjs";
import { t as Textarea } from "./textarea-B3GnpHHs.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as stringType, i as objectType, n as booleanType, t as arrayType } from "../_libs/zod.mjs";
import { n as Controller, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin._section-BAD2MZwu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var AlertDialog = Root2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
var mediaUrl = (bucket, path) => `/api/public/media/${bucket}/${path}`;
/** Uploads a file and returns its site-relative public URL plus storage path. */
async function uploadFile(bucket, file, folder = "uploads") {
	const ext = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "bin";
	const path = `${folder}/${crypto.randomUUID()}.${ext}`;
	const { error } = await supabase.storage.from(bucket).upload(path, file, {
		contentType: file.type,
		upsert: false
	});
	if (error) throw error;
	return {
		path,
		url: mediaUrl(bucket, path)
	};
}
async function removeFile(bucket, url) {
	const prefix = `/api/public/media/${bucket}/`;
	if (!url.startsWith(prefix)) return;
	await supabase.storage.from(bucket).remove([url.slice(prefix.length)]);
}
function TagInput({ id, value, onChange }) {
	const [draft, setDraft] = (0, import_react.useState)("");
	const add = () => {
		const v = draft.trim().slice(0, 200);
		if (v && !value.includes(v)) onChange([...value, v]);
		setDraft("");
	};
	const onKey = (e) => {
		if (e.key === "Enter" || e.key === ",") {
			e.preventDefault();
			add();
		} else if (e.key === "Backspace" && !draft && value.length) onChange(value.slice(0, -1));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "admin-tags",
		children: [
			value.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: value.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Remove ${t}`,
				onClick: () => onChange(value.filter((_, j) => j !== i)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			})] }, `${t}-${i}`)) }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id,
				value: draft,
				placeholder: "Type a tag, then press Enter",
				"aria-describedby": `${id}-tag-help`,
				onChange: (e) => setDraft(e.target.value),
				onKeyDown: onKey,
				onBlur: add
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: `${id}-tag-help`,
				className: "admin-hint",
				children: "Press Enter or comma to add. Backspace removes the last tag."
			})
		]
	});
}
function useUpload(onDone) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const pick = async (files) => {
		const file = files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error("Choose an image file");
			return;
		}
		if (file.size > 10485760) {
			toast.error("Image must be under 10 MB");
			return;
		}
		setBusy(true);
		try {
			onDone((await uploadFile("portfolio-images", file)).url);
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Upload failed");
		} finally {
			setBusy(false);
		}
	};
	return {
		busy,
		pick
	};
}
function ImageField({ id, value, onChange, label = "Upload image" }) {
	const ref = (0, import_react.useRef)(null);
	const { busy, pick } = useUpload(onChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "admin-image-field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "admin-image-preview",
			"aria-live": "polite",
			children: value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: value,
				alt: `${label} preview`
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No image uploaded" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref,
					id,
					type: "file",
					accept: "image/*",
					"aria-label": label,
					hidden: true,
					onChange: (e) => {
						pick(e.target.files);
						e.target.value = "";
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					disabled: busy,
					"aria-busy": busy,
					onClick: () => ref.current?.click(),
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "animate-spin",
						"aria-hidden": "true"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { "aria-hidden": "true" }), busy ? "Uploading…" : value ? "Replace image" : label]
				}),
				value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					"aria-label": `Remove ${label.toLowerCase()}`,
					onClick: () => onChange(""),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }), " Remove"]
				}) : null
			]
		})]
	});
}
function ImagesField({ id, value, onChange }) {
	const ref = (0, import_react.useRef)(null);
	const { busy, pick } = useUpload((url) => onChange([...value, url]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "admin-images-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-thumbs",
				children: value.map((url, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-thumb",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: url,
						alt: `Screenshot ${i + 1} preview`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Remove screenshot ${i + 1}`,
						onClick: () => onChange(value.filter((_, j) => j !== i)),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" })
					})]
				}, `${url}-${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref,
				id,
				type: "file",
				accept: "image/*",
				"aria-label": "Upload screenshot image",
				hidden: true,
				onChange: (e) => {
					pick(e.target.files);
					e.target.value = "";
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				disabled: busy,
				"aria-busy": busy,
				onClick: () => ref.current?.click(),
				children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					className: "animate-spin",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { "aria-hidden": "true" }), busy ? "Uploading…" : "Add screenshot"]
			})
		]
	});
}
/** Refreshes admin lists and the public site content after a change. */
function useRefreshContent() {
	const queryClient = useQueryClient();
	const router = useRouter();
	return async () => {
		await queryClient.invalidateQueries({ queryKey: ["admin"] });
		await queryClient.invalidateQueries({ queryKey: ["portfolio-content"] });
		router.invalidate();
	};
}
var table = (def) => supabase.from(def.table);
var urlOrPath = stringType().trim().max(500).refine((v) => v === "" || v.startsWith("/") || v.startsWith("#") || /^https?:\/\/\S+$/.test(v), "Enter a full URL (https://…) or a site path");
function fieldSchema(f) {
	if (f.type === "tags" || f.type === "images") return arrayType(stringType().max(500)).max(50);
	if (f.type === "url" || f.type === "image") return urlOrPath;
	const base = stringType().trim().max(f.type === "textarea" ? 5e3 : 200);
	if (f.name === "slug") return base.min(1, "Slug is required").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Lowercase letters, numbers and hyphens only");
	return f.required ? base.min(1, `${f.label} is required`) : base;
}
function emptyValues(def) {
	const values = { featured: false };
	for (const field of def.fields) values[field.name] = field.type === "tags" || field.type === "images" ? [] : field.type === "select" ? field.options?.[0] ?? "" : "";
	return values;
}
function CollectionManager({ def }) {
	const refresh = useRefreshContent();
	const [search, setSearch] = (0, import_react.useState)("");
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [deleting, setDeleting] = (0, import_react.useState)(null);
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [localOrder, setLocalOrder] = (0, import_react.useState)(null);
	const query = useQuery({
		queryKey: ["admin", def.table],
		queryFn: async () => {
			const { data, error } = await table(def).select("*").order("sort_order", { ascending: true });
			if (error) throw error;
			return data;
		}
	});
	const rows = (0, import_react.useMemo)(() => localOrder ?? query.data ?? [], [localOrder, query.data]);
	const filtered = (0, import_react.useMemo)(() => {
		const term = search.trim().toLowerCase();
		if (!term) return rows;
		return rows.filter((row) => def.searchFields.some((key) => String(row[key] ?? "").toLowerCase().includes(term)));
	}, [
		rows,
		search,
		def.searchFields
	]);
	async function toggleFeatured(row, featured) {
		if (busyId) return;
		if (featured && !row.featured && rows.filter((item) => Boolean(item.featured)).length >= 3) {
			toast.error(`Only 3 ${def.label.toLowerCase()} can appear on the home page. Turn one off before featuring another.`);
			return;
		}
		setBusyId(row.id);
		try {
			const { error } = await table(def).update({ featured }).eq("id", row.id);
			if (error) toast.error(`Could not update visibility: ${error.message}`);
			else {
				toast.success(featured ? "Shown on the home page" : "Hidden from the home page");
				await refresh();
			}
		} catch (error) {
			toast.error(`Could not update visibility: ${error instanceof Error ? error.message : "Check your connection and try again."}`);
		} finally {
			setBusyId(null);
		}
	}
	async function confirmDelete() {
		if (!deleting) return;
		const row = deleting;
		setBusyId(row.id);
		try {
			const { error } = await table(def).delete().eq("id", row.id);
			if (error) toast.error(`Could not delete ${def.singular.toLowerCase()}: ${error.message}`);
			else {
				toast.success(`${def.singular} deleted`);
				await refresh();
				setDeleting(null);
			}
		} catch (error) {
			toast.error(`Could not delete ${def.singular.toLowerCase()}: ${error instanceof Error ? error.message : "Check your connection and try again."}`);
		} finally {
			setBusyId(null);
		}
	}
	async function saveOrder(list) {
		setLocalOrder(list);
		try {
			const failed = (await Promise.all(list.map((row, index) => table(def).update({ sort_order: index + 1 }).eq("id", row.id)))).find((result) => result.error);
			if (failed?.error) toast.error(`Could not save order: ${failed.error.message}`);
			else toast.success("Display order saved");
			await refresh();
		} catch (error) {
			toast.error(`Could not save order: ${error instanceof Error ? error.message : "Check your connection and try again."}`);
		} finally {
			setLocalOrder(null);
		}
	}
	function moveRow(row, direction) {
		const index = rows.findIndex((item) => item.id === row.id);
		const destination = index + direction;
		if (index < 0 || destination < 0 || destination >= rows.length) return;
		const next = [...rows];
		const currentRow = next[index];
		const destinationRow = next[destination];
		if (!currentRow || !destinationRow) return;
		[next[index], next[destination]] = [destinationRow, currentRow];
		saveOrder(next);
	}
	function onDrop(event, target) {
		event.preventDefault();
		if (!dragId || dragId === target.id) return;
		const next = [...rows];
		const from = next.findIndex((row) => row.id === dragId);
		const to = next.findIndex((row) => row.id === target.id);
		if (from < 0 || to < 0) return;
		const [moved] = next.splice(from, 1);
		if (!moved) return;
		next.splice(to, 0, moved);
		setDragId(null);
		saveOrder(next);
	}
	const canReorder = !search.trim() && !localOrder;
	const title = (row) => String(row["title"] ?? row["name"] ?? "Untitled record");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "collection-manager",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "cm-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "cm-eyebrow",
						children: ["Portfolio content / ", def.label]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: def.label }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Keep your public portfolio current. Changes publish after saving." })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "cm-add",
					onClick: () => setEditing("new"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { "aria-hidden": "true" }),
						" Add ",
						def.singular.toLowerCase()
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cm-toolbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "cm-search",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": "true" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"aria-label": `Search ${def.label}`,
							placeholder: `Search ${def.label.toLowerCase()}…`,
							value: search,
							onChange: (event) => setSearch(event.target.value)
						}),
						search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Clear search",
							onClick: () => setSearch(""),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cm-results",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: filtered.length }),
						" ",
						filtered.length === 1 ? "record" : "records",
						search ? " found" : " total"
					]
				})]
			}),
			query.data && !query.error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cm-featured-note",
				role: "note",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "cm-featured-count",
					children: [rows.filter((row) => Boolean(row.featured)).length, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "/3" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Home page visibility" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Up to 3 ",
					def.label.toLowerCase(),
					" can be featured. Drag or move records to set their display order."
				] })] })]
			}),
			query.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cm-state",
				role: "status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cm-skeleton" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cm-skeleton" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cm-skeleton" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Loading ",
						def.label.toLowerCase(),
						"…"
					] })
				]
			}) : query.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cm-state cm-state-error",
				role: "alert",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Records could not be loaded" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: query.error instanceof Error ? query.error.message : "Check your connection and try again." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => void query.refetch(),
						children: "Try again"
					})
				]
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cm-state cm-empty",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cm-empty-mark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": "true" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: search ? "No matching records" : `No ${def.label.toLowerCase()} yet` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: search ? "Try a different title, category, or keyword." : `Add your first ${def.singular.toLowerCase()} to start building this section.` }),
					search ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setSearch(""),
						children: "Clear search"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setEditing("new"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { "aria-hidden": "true" }),
							" Add ",
							def.singular.toLowerCase()
						]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cm-list",
				"aria-label": `${def.label} records`,
				children: filtered.map((row, index) => {
					const image = String(row["image_url"] ?? "");
					const meta = def.columns.filter((column) => column.name !== "title").map((column) => String(row[column.name] ?? "")).filter(Boolean);
					const summary = String(row["description"] ?? row["overview"] ?? "");
					const tags = row["tags"] ?? row["technologies"] ?? row["skills"];
					const tagList = Array.isArray(tags) ? tags.filter((tag) => typeof tag === "string") : [];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `cm-card ${dragId === row.id ? "is-dragging" : ""}`,
						draggable: canReorder,
						onDragStart: () => setDragId(row.id),
						onDragEnd: () => setDragId(null),
						onDragOver: (event) => canReorder && event.preventDefault(),
						onDrop: (event) => onDrop(event, row),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cm-cover",
							children: image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image,
								alt: "",
								loading: "lazy"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cm-no-image",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No cover image" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cm-card-content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "cm-card-title-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "cm-card-heading",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "cm-record-index",
											children: String(index + 1).padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title(row) })]
									}), meta.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "cm-meta",
										children: meta.join(" · ")
									})]
								}),
								summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "cm-summary",
									children: summary
								}),
								tagList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "cm-tag-preview",
									children: [tagList.slice(0, 4).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tag }, tag)), tagList.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["+", tagList.length - 4] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "cm-card-bottom",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "cm-visibility",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												id: `visible-${row.id}`,
												checked: row.featured,
												disabled: busyId === row.id,
												"aria-label": `${row.featured ? "Hide" : "Show"} ${title(row)} ${row.featured ? "from" : "on"} the home page`,
												onCheckedChange: (checked) => void toggleFeatured(row, checked)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: `visible-${row.id}`,
												children: "Home page"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `cm-status ${row.featured ? "is-visible" : ""}`,
												children: row.featured ? "Featured · home page" : "Not featured"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "cm-card-actions",
										children: [
											canReorder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "cm-order-actions",
												"aria-label": `Reorder ${title(row)}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": `Move ${title(row)} up`,
														disabled: index === 0 || Boolean(busyId),
														onClick: () => moveRow(row, -1),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-label": `Move ${title(row)} down`,
														disabled: index === filtered.length - 1 || Boolean(busyId),
														onClick: () => moveRow(row, 1),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {
														className: "cm-drag-handle",
														"aria-hidden": "true"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												size: "sm",
												"aria-label": `Edit ${title(row)}`,
												onClick: () => setEditing(row),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { "aria-hidden": "true" }), " Edit"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												size: "sm",
												className: "cm-delete-button",
												"aria-label": `Delete ${title(row)}`,
												onClick: () => setDeleting(row),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { "aria-hidden": "true" }), " Delete"]
											})
										]
									})]
								})
							]
						})]
					}, row.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: editing !== null,
				onOpenChange: (open) => {
					if (!open) setEditing(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					className: `cm-drawer ${editing === "new" ? "is-creating" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
						className: "cm-drawer-header",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "cm-eyebrow",
								children: [
									def.label,
									" / ",
									editing === "new" ? "New record" : "Edit record"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: editing === "new" ? `Add ${def.singular.toLowerCase()}` : `Edit ${def.singular.toLowerCase()}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Complete the fields below. Your changes appear on the public portfolio after saving." })
						]
					}), editing !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordForm, {
						def,
						row: editing === "new" ? null : editing,
						featuredCount: rows.filter((row) => Boolean(row.featured)).length,
						nextOrder: (rows.at(-1)?.sort_order ?? 0) + 1,
						onDone: async () => {
							setEditing(null);
							await refresh();
						}
					}, editing === "new" ? "new" : editing.id)]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: deleting !== null,
				onOpenChange: (open) => {
					if (!open && !busyId) setDeleting(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					className: "cm-confirm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogTitle, { children: [
						"Delete this ",
						def.singular.toLowerCase(),
						"?"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogDescription, { children: [
						"“",
						deleting ? title(deleting) : "",
						"” will be removed from the portfolio. This cannot be undone."
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
						disabled: Boolean(busyId),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogAction, {
						disabled: Boolean(busyId),
						onClick: (event) => {
							event.preventDefault();
							confirmDelete();
						},
						children: [busyId === deleting?.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "animate-spin",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { "aria-hidden": "true" }), busyId === deleting?.id ? "Deleting…" : "Delete record"]
					})] })]
				})
			})
		]
	});
}
function RecordForm({ def, row, nextOrder, featuredCount, onDone }) {
	const schema = (0, import_react.useMemo)(() => objectType({
		featured: booleanType(),
		...Object.fromEntries(def.fields.map((field) => [field.name, fieldSchema(field)]))
	}), [def]);
	const defaults = (0, import_react.useMemo)(() => {
		const values = emptyValues(def);
		if (row) {
			for (const key of Object.keys(values)) if (row[key] !== void 0 && row[key] !== null) values[key] = row[key];
		}
		return values;
	}, [def, row]);
	const form = useForm({
		resolver: u(schema),
		defaultValues: defaults,
		mode: "onChange"
	});
	const [slugTouched, setSlugTouched] = (0, import_react.useState)(Boolean(row));
	const hasSlug = def.fields.some((field) => field.name === "slug");
	const errors = form.formState.errors;
	const submit = form.handleSubmit(async (values) => {
		if (values["featured"] && !row?.featured && featuredCount >= 3) {
			toast.error(`Only 3 ${def.label.toLowerCase()} can appear on the home page. Turn one off before featuring this record.`);
			return;
		}
		try {
			const { error } = await (row ? table(def).update(values).eq("id", row.id) : table(def).insert({
				...values,
				sort_order: nextOrder
			}));
			if (error) {
				toast.error(error.code === "23505" ? "That slug is already used by another project" : `Could not save: ${error.message}`);
				return;
			}
			toast.success(row ? `${def.singular} saved` : `${def.singular} added`);
			await onDone();
		} catch (error) {
			toast.error(`Could not save: ${error instanceof Error ? error.message : "Check your connection and try again."}`);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: `cm-form ${row === null ? "is-creating" : ""}`,
		noValidate: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cm-form-scroll",
			children: [def.fields.map((field) => {
				const id = `f-${field.name}`;
				const error = errors[field.name]?.message;
				let control;
				if (field.type === "textarea") control = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id,
					rows: 4,
					"aria-invalid": Boolean(error),
					"aria-describedby": error ? `${id}-error` : field.hint ? `${id}-hint` : void 0,
					...form.register(field.name)
				});
				else if (field.type === "select") control = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id,
					className: "cm-select",
					"aria-invalid": Boolean(error),
					...form.register(field.name),
					children: field.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: option,
						children: option
					}, option))
				});
				else if (field.type === "tags") control = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
					control: form.control,
					name: field.name,
					render: ({ field: controlField }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagInput, {
						id,
						value: controlField.value,
						onChange: controlField.onChange
					})
				});
				else if (field.type === "image") control = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
					control: form.control,
					name: field.name,
					render: ({ field: controlField }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
						id,
						value: controlField.value,
						onChange: controlField.onChange,
						label: field.label
					})
				});
				else if (field.type === "images") control = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
					control: form.control,
					name: field.name,
					render: ({ field: controlField }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagesField, {
						id,
						value: controlField.value,
						onChange: controlField.onChange
					})
				});
				else {
					const registration = form.register(field.name);
					control = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id,
						type: field.type === "url" ? "url" : "text",
						"aria-invalid": Boolean(error),
						"aria-describedby": error ? `${id}-error` : field.hint ? `${id}-hint` : void 0,
						...registration,
						onChange: (event) => {
							registration.onChange(event);
							if (field.name === "slug") setSlugTouched(true);
							if (field.name === "title" && hasSlug && !slugTouched) form.setValue("slug", slugify(event.target.value), { shouldValidate: true });
						}
					});
				}
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `cm-field ${field.type === "textarea" ? "is-wide" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: id,
							children: [field.label, field.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: " *"
							}) : null]
						}),
						control,
						field.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "cm-hint",
							id: `${id}-hint`,
							children: field.hint
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "cm-field-error",
							id: `${id}-error`,
							role: "alert",
							children: error
						})
					]
				}, field.name);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cm-featured-field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
					control: form.control,
					name: "featured",
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						id: "f-featured",
						checked: field.value,
						disabled: !row?.featured && featuredCount >= 3,
						onCheckedChange: field.onChange
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "f-featured",
					children: "Show on home page"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [featuredCount, "/3 featured. Turn one off before adding another to the home page preview."] })] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cm-form-footer",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				disabled: form.formState.isSubmitting,
				className: "cm-submit",
				children: [form.formState.isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					className: "animate-spin",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": "true" }), form.formState.isSubmitting ? "Saving…" : row ? "Save changes" : `Add ${def.singular.toLowerCase()}`]
			})
		})]
	});
}
function ResumeManager() {
	const refresh = useRefreshContent();
	const ref = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [deleting, setDeleting] = (0, import_react.useState)(null);
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["admin", "resumes"],
		queryFn: async () => {
			const { data: rows, error } = await supabase.from("resumes").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return rows;
		}
	});
	const done = async () => {
		await refetch();
		await refresh();
	};
	const label = () => (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric"
	});
	async function activate(id) {
		const { error: e1 } = await supabase.from("resumes").update({ is_active: false }).eq("is_active", true);
		const { error: e2 } = e1 ? { error: e1 } : await supabase.from("resumes").update({
			is_active: true,
			updated_label: label()
		}).eq("id", id);
		if (e2) toast.error(e2.message);
		else {
			toast.success("Active resume updated");
			await done();
		}
	}
	async function upload(files) {
		const file = files?.[0];
		if (!file) return;
		if (file.type !== "application/pdf") {
			toast.error("Choose a PDF file");
			return;
		}
		if (file.size > 20971520) {
			toast.error("PDF must be under 20 MB");
			return;
		}
		setBusy(true);
		try {
			const { path, url } = await uploadFile("resumes", file, "resumes");
			const { data: row, error } = await supabase.from("resumes").insert({
				title: file.name.replace(/\.pdf$/i, "").slice(0, 120),
				file_url: url,
				file_path: path,
				updated_label: label(),
				is_active: false
			}).select("id").single();
			if (error) throw error;
			await activate(row.id);
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Upload failed");
		} finally {
			setBusy(false);
		}
	}
	async function remove() {
		if (!deleting) return;
		const r = deleting;
		setDeleting(null);
		const { error } = await supabase.from("resumes").delete().eq("id", r.id);
		if (error) {
			toast.error(error.message);
			return;
		}
		await removeFile("resumes", r.file_url);
		toast.success("Resume deleted");
		await done();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "admin-head",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "admin-eyebrow",
					children: "Manage"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Resume" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref,
					type: "file",
					accept: "application/pdf",
					hidden: true,
					onChange: (e) => {
						upload(e.target.files);
						e.target.value = "";
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					disabled: busy,
					onClick: () => ref.current?.click(),
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, {}), "Upload PDF"]
				})
			]
		}),
		isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Loading…"
		}) : !data?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "No resumes yet."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: data?.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-wrap items-center justify-between gap-3 border p-4 ${r.is_active ? "border-muted-foreground" : "border-border"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: r.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs uppercase text-muted-foreground",
					children: [r.is_active ? "Active · " : "", r.updated_label]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: r.file_url,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}), "View"]
							})
						}),
						!r.is_active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => activate(r.id),
							children: "Set active"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => setDeleting(r),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Delete"]
						})
					]
				})]
			}, r.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: !!deleting,
			onOpenChange: (o) => !o && setDeleting(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogTitle, { children: [
				"Delete “",
				deleting?.title,
				"”?"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "The PDF file will be removed permanently." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
				onClick: remove,
				children: "Delete"
			})] })] })
		})
	] });
}
var Head = ({ title, eyebrow = "Manage" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "admin-head",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "admin-eyebrow",
		children: eyebrow
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title })] })
});
function useSite() {
	return useQuery({
		queryKey: ["admin", "site_content"],
		queryFn: async () => {
			const { data, error } = await supabase.from("site_content").select("*").eq("key", "main").maybeSingle();
			if (error) throw error;
			return data;
		}
	});
}
var urlCheck = (v) => v === "" || /^https?:\/\/\S+$/.test(v) || v.startsWith("/");
function SiteForm({ title, fields }) {
	const { data, isLoading, error } = useSite();
	const refresh = useRefreshContent();
	const [values, setValues] = (0, import_react.useState)({});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!data) return;
		const v = {};
		for (const f of fields) v[f.name] = data[f.name] ?? (f.kind === "list" ? [] : "");
		setValues(v);
	}, [data, fields]);
	const set = (k, v) => setValues((s) => ({
		...s,
		[k]: v
	}));
	async function save() {
		const errs = {};
		const out = {};
		for (const f of fields) {
			const v = values[f.name];
			if (f.kind === "list") {
				out[f.name] = v.map((x) => x.trim()).filter(Boolean).slice(0, 30);
				continue;
			}
			const s = String(v ?? "").trim();
			if (s.length > (f.kind === "textarea" ? 5e3 : 500)) errs[f.name] = "Too long";
			if (f.name === "contact_email" && s && !stringType().email().safeParse(s).success) errs[f.name] = "Enter a valid email";
			if (f.name === "whatsapp_number" && s && !/^\d{8,15}$/.test(s)) errs[f.name] = "Digits only with country code, no +";
			if ((f.name === "art_portfolio_url" || f.kind === "image") && !urlCheck(s)) errs[f.name] = "Enter a full URL (https://…)";
			out[f.name] = s;
		}
		setErrors(errs);
		if (Object.keys(errs).length || !data) return;
		setSaving(true);
		const { error: e } = await supabase.from("site_content").update(out).eq("id", data.id);
		setSaving(false);
		if (e) {
			toast.error(e.message);
			return;
		}
		toast.success("Saved — live on the site");
		await refresh();
	}
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: "Loading…"
	})] });
	if (error || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "admin-error",
		children: "Content could not be loaded."
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid max-w-3xl gap-5",
		onSubmit: (e) => {
			e.preventDefault();
			save();
		},
		noValidate: true,
		children: [fields.map((f) => {
			const id = `site-${String(f.name)}`;
			const v = values[f.name];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-field",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: id,
						children: f.label
					}),
					f.kind === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id,
						rows: 4,
						value: String(v ?? ""),
						"aria-invalid": !!errors[f.name],
						onChange: (e) => set(f.name, e.target.value)
					}) : f.kind === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagInput, {
						id,
						value: v ?? [],
						onChange: (x) => set(f.name, x)
					}) : f.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
						id,
						value: String(v ?? ""),
						onChange: (x) => set(f.name, x),
						label: "Upload photo"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id,
						value: String(v ?? ""),
						"aria-invalid": !!errors[f.name],
						onChange: (e) => set(f.name, e.target.value)
					}),
					f.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: f.hint
					}) : null,
					errors[f.name] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "admin-error",
						children: errors[f.name]
					}) : null
				]
			}, String(f.name));
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "submit",
			disabled: saving,
			children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, "Save changes"]
		}) })]
	})] });
}
var aboutFields = [
	{
		name: "about_image_url",
		label: "Portrait photo",
		kind: "image"
	},
	{
		name: "about_image_alt",
		label: "Portrait description",
		kind: "text"
	},
	{
		name: "about_intro",
		label: "Intro",
		kind: "textarea"
	},
	{
		name: "about_bio",
		label: "Biography paragraphs",
		kind: "list",
		hint: "Each entry is one paragraph."
	},
	{
		name: "education_degree",
		label: "Degree",
		kind: "text"
	},
	{
		name: "education_institution",
		label: "Institution",
		kind: "text"
	},
	{
		name: "education_status",
		label: "Status",
		kind: "text"
	},
	{
		name: "currently",
		label: "Currently",
		kind: "list"
	},
	{
		name: "looking_for",
		label: "What I'm looking for",
		kind: "textarea"
	}
];
var settingsFields = [
	{
		name: "hero_eyebrow",
		label: "Hero eyebrow",
		kind: "text"
	},
	{
		name: "hero_first_name",
		label: "Title — first line",
		kind: "text"
	},
	{
		name: "hero_last_name",
		label: "Title — second line",
		kind: "text"
	},
	{
		name: "hero_role",
		label: "Subtitle (role)",
		kind: "text"
	},
	{
		name: "hero_disciplines",
		label: "Disciplines",
		kind: "text"
	},
	{
		name: "hero_description",
		label: "Description",
		kind: "textarea"
	},
	{
		name: "contact_email",
		label: "Contact email",
		kind: "text"
	},
	{
		name: "whatsapp_number",
		label: "WhatsApp number",
		kind: "text",
		hint: "Digits with country code, e.g. 919137935311"
	},
	{
		name: "art_portfolio_url",
		label: "Instagram / art portfolio link",
		kind: "text"
	}
];
var AboutEditor = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteForm, {
	title: "About",
	fields: aboutFields
});
var SettingsEditor = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteForm, {
	title: "Settings",
	fields: settingsFields
});
function SocialLinksEditor() {
	const refresh = useRefreshContent();
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["admin", "social_links"],
		queryFn: async () => {
			const { data: rows, error } = await supabase.from("social_links").select("*").order("sort_order");
			if (error) throw error;
			return rows;
		}
	});
	const [rows, setRows] = (0, import_react.useState)([]);
	const [deleting, setDeleting] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (data) setRows(data);
	}, [data]);
	const upd = (id, k, v) => setRows((r) => r.map((x) => x.id === id ? {
		...x,
		[k]: v
	} : x));
	async function saveAll() {
		for (const r of rows) {
			if (!r.platform.trim() || !r.label.trim()) {
				toast.error("Platform and label are required");
				return;
			}
			if (!urlCheck(r.url.trim()) && !r.url.startsWith("mailto:")) {
				toast.error(`Invalid URL for ${r.label}`);
				return;
			}
		}
		setSaving(true);
		const results = await Promise.all(rows.map((r, i) => supabase.from("social_links").update({
			platform: r.platform.trim().slice(0, 50),
			label: r.label.trim().slice(0, 80),
			url: r.url.trim().slice(0, 500),
			sort_order: i
		}).eq("id", r.id)));
		setSaving(false);
		const err = results.find((x) => x.error)?.error;
		if (err) {
			toast.error(err.message);
			return;
		}
		toast.success("Social links saved");
		await refresh();
	}
	async function add() {
		const { error } = await supabase.from("social_links").insert({
			platform: "other",
			label: "New link",
			url: "",
			sort_order: rows.length
		});
		if (error) toast.error(error.message);
		else {
			await refetch();
			await refresh();
		}
	}
	async function remove() {
		if (!deleting) return;
		const { error } = await supabase.from("social_links").delete().eq("id", deleting.id);
		setDeleting(null);
		if (error) toast.error(error.message);
		else {
			toast.success("Link deleted");
			await refetch();
			await refresh();
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { title: "Social Links" }),
		isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Loading…"
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid max-w-4xl gap-3",
			children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 border border-border p-3 sm:grid-cols-[140px_1fr_2fr_auto] sm:items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Platform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: r.platform,
							onChange: (e) => upd(r.id, "platform", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Label" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: r.label,
							onChange: (e) => upd(r.id, "label", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "admin-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: r.url,
							placeholder: "https://…",
							onChange: (e) => upd(r.id, "url", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						"aria-label": `Delete ${r.label}`,
						onClick: () => setDeleting(r),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
					})
				]
			}, r.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				onClick: add,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add link"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				onClick: saveAll,
				disabled: saving,
				children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, "Save links"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: !!deleting,
			onOpenChange: (o) => !o && setDeleting(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogTitle, { children: [
				"Delete “",
				deleting?.label,
				"”?"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "This removes the link from the public site." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
				onClick: remove,
				children: "Delete"
			})] })] })
		})
	] });
}
function MessagesManager() {
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["admin", "contact_submissions"],
		queryFn: async () => {
			const { data: rows, error: e } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
			if (e) throw e;
			return rows;
		}
	});
	const [q, setQ] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(null);
	const list = (data ?? []).filter((m) => `${m.name} ${m.email} ${m.interest} ${m.message}`.toLowerCase().includes(q.trim().toLowerCase()));
	async function toggleRead(m) {
		const { error: e } = await supabase.from("contact_submissions").update({ is_read: !m.is_read }).eq("id", m.id);
		if (e) toast.error(e.message);
		else refetch();
	}
	async function remove() {
		if (!deleting) return;
		const { error: e } = await supabase.from("contact_submissions").delete().eq("id", deleting.id);
		setDeleting(null);
		if (e) toast.error(e.message);
		else {
			toast.success("Message deleted");
			refetch();
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
			title: "Messages",
			eyebrow: "Inbox"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			className: "mb-5 max-w-md",
			placeholder: "Search messages",
			value: q,
			onChange: (e) => setQ(e.target.value)
		}),
		isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Loading…"
		}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "admin-error",
			children: "Messages could not be loaded."
		}) : !list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "No messages yet."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: list.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `border p-4 ${m.is_read ? "border-border opacity-70" : "border-muted-foreground"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: m.name }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-muted-foreground underline",
								href: `mailto:${m.email}`,
								children: m.email
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs uppercase text-muted-foreground",
							children: [
								m.interest,
								" · ",
								new Date(m.created_at).toLocaleString()
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 whitespace-pre-wrap text-sm",
						children: m.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							onClick: () => toggleRead(m),
							children: m.is_read ? "Mark unread" : "Mark read"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							onClick: () => setDeleting(m),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Delete"]
						})]
					})
				]
			}, m.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: !!deleting,
			onOpenChange: (o) => !o && setDeleting(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Delete this message?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "This cannot be undone." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
				onClick: remove,
				children: "Delete"
			})] })] })
		})
	] });
}
function Section() {
	const { section } = Route.useParams();
	if (section === "resume") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeManager, {});
	if (section === "about") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutEditor, {});
	if (section === "social-links") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinksEditor, {});
	if (section === "settings") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsEditor, {});
	if (section === "messages") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesManager, {});
	const def = collections.find((c) => c.key === section);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionManager, { def }, def.key);
}
//#endregion
export { Section as component };
