import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-B4ajsCvT.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-Ch96WP0p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/** Defaults; overwritten at runtime from managed site settings (see services/site.ts). */
var siteConfig = {
	github: "https://github.com/paraskosambe-web",
	linkedin: "https://www.linkedin.com/in/paras-kosambe",
	whatsapp: "919137935311",
	email: "paraskosambe@gmail.com",
	instagram: ""
};
var project_01_default = "/assets/project-01-Dentjxki.png";
var project_02_default = "/assets/project-02-Gyie9B2F.png";
var project_03_default = "/assets/project-03-CfJ8w-wn.png";
var project_04_default = "/assets/project-04-YEP4wdb-.png";
var project_05_default = "/assets/project-05-iIN-Qw8f.png";
var project_06_default = "/assets/project-06-BbXNC3zy.png";
var art_01_default = "/assets/art-01-CTIjCGQH.png";
var art_02_default = "/assets/art-02-DSaEC3Sx.png";
var art_03_default = "/assets/art-03-CYAJSZ7A.png";
var art_04_default = "/assets/art-04-BEJVVWbf.png";
var art_05_default = "/assets/art-05-MuREFxFb.png";
var art_06_default = "/assets/art-06-kdB5-vYL.png";
var placeholderProjectDetails = {
	overview: "A structured placeholder for a future case study, designed to document context, process and measurable results.",
	problem: "The verified project problem and its real-world constraints will be documented here when final details are available.",
	solution: "The final solution narrative will explain the approach, important decisions and how the work addresses the stated problem.",
	features: [
		"Defined project scope",
		"Documented implementation process",
		"Clear outcome reporting",
		"Reproducible technical workflow"
	],
	technologies: [
		"Python",
		"TypeScript",
		"SQL",
		"Git"
	],
	development: "Development details will cover research, architecture, iteration, testing and deployment without overstating unverified outcomes.",
	learnings: [
		"Translate an open problem into testable steps",
		"Document decisions alongside implementation",
		"Evaluate results against the original goal"
	]
};
var projectImages = [
	project_01_default,
	project_02_default,
	project_03_default,
	project_04_default,
	project_05_default,
	project_06_default
];
var projectCategories = [
	"Data Science",
	"Data Analytics",
	"AI/ML",
	"Full-Stack",
	"Data Science",
	"Data Analytics"
];
var projectTechnologies = [
	[
		"Python",
		"Pandas",
		"Scikit-learn",
		"Jupyter"
	],
	[
		"SQL",
		"Power BI",
		"Excel",
		"Python"
	],
	[
		"Python",
		"TensorFlow",
		"NLP",
		"FastAPI"
	],
	[
		"React",
		"TypeScript",
		"Node.js",
		"PostgreSQL"
	],
	[
		"Python",
		"NumPy",
		"Statistics",
		"Matplotlib"
	],
	[
		"SQL",
		"Tableau",
		"Pandas",
		"Excel"
	]
];
var placeholderProjects = projectImages.map((imageUrl, index) => {
	const number = index + 1;
	const slug = `project-${String(number).padStart(2, "0")}`;
	const technologies = projectTechnologies[index] ?? placeholderProjectDetails.technologies;
	const category = projectCategories[index] ?? "Data Science";
	return {
		id: slug,
		slug,
		index: String(number).padStart(2, "0"),
		meta: category,
		category,
		title: `Project ${String(number).padStart(2, "0")}`,
		description: "A clearly labeled placeholder case study awaiting verified project context, implementation details and outcomes.",
		tags: technologies,
		imageUrl,
		imageAlt: `Locally generated grayscale visual for Project ${String(number).padStart(2, "0")}`,
		action: {
			label: "View project",
			href: `/projects/${slug}`
		},
		githubUrl: siteConfig.github,
		liveUrl: `/projects/${slug}`,
		...placeholderProjectDetails,
		technologies,
		screenshots: [
			imageUrl,
			imageUrl,
			imageUrl
		]
	};
});
var siteContent = {
	hero: {
		eyebrow: "ASPIRING DATA SCIENTIST",
		firstName: "PARAS",
		lastName: "KOSAMBE",
		primaryRole: "Data Science",
		disciplines: "Data Analytics · AI/ML · Full-Stack Development",
		description: "I build data-driven systems, intelligent applications, and scalable digital experiences.",
		primaryAction: {
			label: "View My Work",
			href: "/projects"
		},
		secondaryAction: {
			label: "View Resume",
			href: "/resume"
		},
		socials: [{
			label: "GitHub",
			href: siteConfig.github
		}, {
			label: "LinkedIn",
			href: siteConfig.linkedin
		}],
		coordinates: [
			"X 18.04",
			"Y 72.87",
			"N 19°04′",
			"E 72°52′"
		],
		scrollLabel: "SCROLL"
	},
	home: {
		about: {
			sectionName: "About",
			index: "01",
			title: "About",
			imageAlt: "Portrait of Paras Kosambe",
			intro: [
				"Final-year B.Sc. Computer Science student at the University of Mumbai.",
				"Interested in Data Science, Data Analytics, AI/ML,",
				"and Full-Stack Development."
			],
			currentlyLabel: "Currently",
			currently: [
				"Building practical data science projects",
				"Strengthening machine learning fundamentals",
				"Exploring scalable full-stack systems"
			],
			action: {
				label: "More about me",
				href: "/about"
			}
		},
		skills: {
			sectionName: "Skills",
			index: "02",
			title: "Skills",
			intro: "A working toolkit across data, intelligence and product engineering.",
			categories: [
				{
					id: "skill-ds",
					index: "01",
					meta: "SKILLS",
					title: "Data Science",
					description: "Core methods for turning raw information into useful models.",
					skills: [
						"Python",
						"Pandas",
						"NumPy",
						"Statistics",
						"Scikit-learn",
						"EDA",
						"Feature Engineering",
						"Jupyter"
					],
					tags: [
						"Python",
						"Pandas",
						"NumPy",
						"Statistics"
					],
					imageAlt: "Data Science category",
					action: {
						label: "View skills",
						href: "/skills"
					}
				},
				{
					id: "skill-da",
					index: "02",
					meta: "SKILLS",
					title: "Data Analytics",
					description: "Analysis, querying and reporting for clear decisions.",
					skills: [
						"SQL",
						"Excel",
						"Power BI",
						"Tableau",
						"Data Cleaning",
						"Dashboards",
						"Reporting"
					],
					tags: [
						"SQL",
						"Excel",
						"Power BI",
						"Tableau"
					],
					imageAlt: "Data Analytics category",
					action: {
						label: "View skills",
						href: "/skills"
					}
				},
				{
					id: "skill-ai",
					index: "03",
					meta: "SKILLS",
					title: "AI/ML",
					description: "Applied machine learning workflows and intelligent systems.",
					skills: [
						"Machine Learning",
						"TensorFlow",
						"NLP",
						"Model Evaluation",
						"Deep Learning",
						"Prompting"
					],
					tags: [
						"Machine Learning",
						"TensorFlow",
						"NLP",
						"Evaluation"
					],
					imageAlt: "AI and machine learning category",
					action: {
						label: "View skills",
						href: "/skills"
					}
				},
				{
					id: "skill-fs",
					index: "04",
					meta: "SKILLS",
					title: "Full-Stack",
					description: "Modern interfaces and reliable application foundations.",
					skills: [
						"React",
						"TypeScript",
						"Node.js",
						"REST APIs",
						"HTML",
						"CSS",
						"PostgreSQL",
						"Git"
					],
					tags: [
						"React",
						"TypeScript",
						"Node.js",
						"REST APIs"
					],
					imageAlt: "Full-stack category",
					action: {
						label: "View skills",
						href: "/skills"
					}
				},
				{
					id: "skill-tools",
					index: "05",
					meta: "SKILLS",
					title: "Tools",
					description: "Daily tools for building, analysis and collaboration.",
					skills: [
						"Git",
						"GitHub",
						"VS Code",
						"Jupyter",
						"Figma",
						"Docker",
						"Postman"
					],
					tags: [
						"Git",
						"GitHub",
						"VS Code",
						"Jupyter"
					],
					imageAlt: "Tools category",
					action: {
						label: "View skills",
						href: "/skills"
					}
				}
			],
			action: {
				label: "View all skills",
				href: "/skills"
			}
		},
		projects: {
			sectionName: "Projects",
			index: "03",
			title: "Selected Projects",
			intro: "A preview of data-led work and technical experiments.",
			action: {
				label: "View all projects",
				href: "/projects"
			},
			items: [
				1,
				2,
				3
			].map((number) => ({
				id: `project-${number}`,
				index: `0${number}`,
				meta: "FEATURED · PLACEHOLDER",
				title: `Project placeholder ${number}`,
				description: "Project details will be added here with a clear problem, approach and measurable outcome.",
				tags: [
					"Data",
					"Analysis",
					"Build"
				],
				imageAlt: `Placeholder for project ${number}`,
				action: {
					label: "View project",
					href: "/projects"
				}
			}))
		},
		experience: {
			sectionName: "Experience",
			index: "04",
			title: "Experience",
			intro: "Learning, contribution and practical work in context.",
			action: {
				label: "View all experience",
				href: "/experience"
			},
			items: [
				1,
				2,
				3
			].map((number) => ({
				id: `experience-${number}`,
				index: `0${number}`,
				meta: "EXPERIENCE · PLACEHOLDER",
				title: `Experience placeholder ${number}`,
				description: "Verified role, organisation and impact details will be added here.",
				tags: ["Role pending", "Details pending"],
				imageAlt: `Placeholder for experience ${number}`,
				organization: "Organization details pending",
				role: "Role details pending",
				type: "Experience",
				dateRange: "",
				location: "",
				responsibilities: [],
				technologies: ["Details pending"],
				action: {
					label: "View details",
					href: "/experience"
				}
			}))
		},
		certifications: {
			sectionName: "Certifications",
			index: "05",
			title: "Certifications",
			intro: "Formal learning and verified technical development.",
			action: {
				label: "View all certifications",
				href: "/certifications"
			},
			items: [
				1,
				2,
				3
			].map((number) => ({
				id: `certification-${number}`,
				index: `0${number}`,
				meta: "CERTIFICATE · PLACEHOLDER",
				title: `Certification placeholder ${number}`,
				description: "Issuer, credential and completion details will be added after verification.",
				tags: ["Credential pending"],
				imageAlt: `Placeholder for certification ${number}`,
				action: {
					label: "View certification",
					href: "/certifications"
				}
			}))
		},
		achievements: {
			sectionName: "Achievements",
			index: "06",
			title: "Achievements",
			intro: "Selected milestones, recognised only when they are verifiable.",
			action: {
				label: "View all achievements",
				href: "/achievements"
			},
			items: [
				1,
				2,
				3
			].map((number) => ({
				id: `achievement-${number}`,
				index: `0${number}`,
				meta: "ACHIEVEMENT · PLACEHOLDER",
				title: `Achievement placeholder ${number}`,
				description: "Verified achievement details and supporting context will be added here.",
				tags: ["Details pending"],
				imageAlt: `Placeholder for achievement ${number}`,
				action: {
					label: "View achievement",
					href: "/achievements"
				}
			}))
		},
		resume: {
			sectionName: "Resume",
			index: "07",
			title: "Resume",
			updatedLabel: "Last updated",
			updated: "October 2026",
			intro: "My background combines practical project work in data science, AI/ML, analytics, and full-stack development with a focus on turning real-world problems into useful solutions.",
			viewAction: {
				label: "View Resume",
				href: "/resume"
			},
			downloadAction: {
				label: "Download",
				href: "/resume"
			}
		},
		art: {
			sectionName: "Artworks",
			index: "08",
			title: "Beyond Code",
			intro: "Data, systems and algorithms are one side of me. Art is another way I explore ideas and creativity.",
			action: {
				label: "Explore my art",
				href: "/art"
			},
			items: [
				1,
				2,
				3
			].map((number) => ({
				id: `art-${number}`,
				index: `0${number}`,
				meta: "ARTWORK · PLACEHOLDER",
				title: `Artwork placeholder ${number}`,
				description: "A future space for a piece, its medium and the idea behind it.",
				tags: ["Artwork pending"],
				imageAlt: `Placeholder for artwork ${number}`,
				action: {
					label: "View artwork",
					href: "/art"
				}
			}))
		},
		contact: {
			sectionName: "Contact",
			index: "09",
			title: "LET'S WORK TOGETHER",
			intro: "Looking to hire a curious data professional or collaborate on a thoughtful product? I’m open to roles and internships across data science, analytics, AI/ML and full-stack development. Share what you’re building and let’s talk.",
			action: {
				label: "Start a conversation",
				href: "/contact"
			}
		}
	},
	projects: {
		eyebrow: "Selected work / 2026",
		title: "Projects",
		intro: "Practical projects where data, machine learning, AI, and software engineering come together to solve meaningful problems.",
		searchLabel: "Search projects",
		searchPlaceholder: "Search by title, category or technology",
		filters: [
			"All",
			"Data Science",
			"Data Analytics",
			"AI/ML",
			"Full-Stack"
		],
		loadMoreLabel: "Load more",
		emptyTitle: "No projects found",
		emptyDescription: "Try another category or search term.",
		notFoundTitle: "Project not found",
		notFoundDescription: "This project does not exist or may have moved.",
		backLabel: "Back to projects",
		githubLabel: "GitHub",
		liveLabel: "Live Demo",
		sectionLabels: {
			overview: "Overview",
			problem: "Problem",
			solution: "Solution",
			features: "Features",
			technologies: "Technologies",
			development: "Development details",
			screenshots: "Screenshots",
			learnings: "Key learnings",
			previous: "Previous project",
			next: "Next project"
		},
		items: placeholderProjects
	},
	experience: {
		eyebrow: "Experience / Placeholder records",
		title: "Experience",
		intro: "A record of practical experience across data science, AI, and full-stack development, reflecting hands-on work, continuous learning, and independent project development.",
		dialogResponsibilitiesLabel: "Responsibilities",
		dialogTechnologiesLabel: "Technologies",
		items: [
			1,
			2,
			3
		].map((number) => ({
			id: `experience-record-${number}`,
			index: String(number).padStart(2, "0"),
			meta: "PLACEHOLDER",
			title: "Placeholder",
			organization: "Organization placeholder",
			role: "Role placeholder",
			type: "Type placeholder",
			dateRange: "Date range placeholder",
			location: "Location placeholder",
			description: "A clearly labeled placeholder awaiting verified organization, role, contribution and outcome details.",
			tags: [
				"Technology",
				"Tool",
				"Method"
			],
			technologies: [
				"Technology placeholder",
				"Tool placeholder",
				"Method placeholder"
			],
			responsibilities: [
				"Responsibility placeholder awaiting verified details.",
				"Contribution placeholder awaiting verified details.",
				"Outcome placeholder awaiting verified details."
			],
			imageAlt: `Placeholder visual for experience record ${number}`,
			action: {
				label: "View details",
				href: `#experience-record-${number}`
			}
		}))
	},
	certifications: {
		eyebrow: "Credentials / Placeholder records",
		title: "Certifications",
		intro: "A collection of industry-recognized certifications and professional learning milestones across data science, AI, machine learning, analytics, and software development.",
		filters: [
			"ALL",
			"DATA",
			"AI-ML",
			"DEVELOPMENT",
			"CLOUD",
			"OTHER"
		],
		loadMoreLabel: "Load more",
		lightboxCloseLabel: "Close preview",
		items: projectImages.map((imageUrl, index) => {
			const number = index + 1;
			const category = [
				"DATA",
				"AI-ML",
				"DEVELOPMENT",
				"CLOUD",
				"OTHER",
				"DATA"
			][index] ?? "OTHER";
			return {
				id: `certification-record-${number}`,
				index: String(number).padStart(2, "0"),
				meta: category,
				category,
				title: "Placeholder",
				issuer: "Issuer placeholder",
				date: "Date placeholder",
				credentialId: "Credential ID placeholder",
				description: "A clearly labeled placeholder awaiting verified certificate and issuer information.",
				tags: [category, "Credential pending"],
				imageUrl,
				imageAlt: `Generated grayscale placeholder for certification ${number}`,
				action: {
					label: "View Credential",
					href: `#certification-record-${number}`
				}
			};
		})
	},
	achievements: {
		eyebrow: "Milestones / Placeholder records",
		title: "Achievements",
		intro: "Selected milestones will appear here only with verified context and attribution. Current records are placeholders.",
		filters: [
			"ALL",
			"ACADEMIC",
			"TECHNICAL",
			"COMMUNITY",
			"OTHER"
		],
		items: [
			1,
			2,
			3
		].map((number) => {
			const category = [
				"ACADEMIC",
				"TECHNICAL",
				"COMMUNITY"
			][number - 1] ?? "OTHER";
			return {
				id: `achievement-record-${number}`,
				index: String(number).padStart(2, "0"),
				meta: category,
				category,
				title: "Placeholder",
				organization: "Organization placeholder",
				date: "Date placeholder",
				description: "A clearly labeled placeholder awaiting a verified milestone, supporting context and outcome.",
				tags: [category, "Details pending"],
				imageAlt: `Placeholder visual for achievement ${number}`
			};
		})
	},
	about: {
		eyebrow: "Profile / About",
		title: "About",
		intro: "Exploring data, building models, and solving real-world problems.",
		imageAlt: "Portrait of Paras Kosambe",
		bio: [
			"I am a final-year B.Sc. Computer Science student at the University of Mumbai, developing a practical foundation across data science, analytics, artificial intelligence and software engineering.",
			"My work is driven by curiosity: understanding how information becomes insight, how models become useful tools, and how thoughtful interfaces make complex systems easier to use.",
			"I enjoy moving between analysis and implementation—exploring a problem, structuring the data, testing an approach and shaping the result into a clear digital experience."
		],
		educationLabel: "Education",
		education: {
			degree: "B.Sc. Computer Science",
			institution: "University of Mumbai",
			status: "Final year"
		},
		currentlyLabel: "Currently",
		currently: [
			"Building practical data science projects",
			"Strengthening machine learning fundamentals",
			"Exploring scalable full-stack systems"
		],
		lookingForLabel: "What I'm looking for",
		lookingFor: "Opportunities to contribute to meaningful data, analytics, AI/ML or full-stack work while learning from experienced teams and solving real problems."
	},
	skills: {
		eyebrow: "Capabilities / Working toolkit",
		title: "Skills",
		intro: "A practical toolkit spanning data science, machine learning, AI, analytics, and full-stack development.",
		viewSkillsLabel: "View skills",
		hideSkillsLabel: "Show less",
		items: [
			{ ...siteContentPlaceholderSkill("skill-page-ds", "01", "Data Science", "Methods for exploring data, testing assumptions and building reproducible models.", [
				"Python",
				"Pandas",
				"NumPy",
				"Statistics",
				"Scikit-learn",
				"EDA",
				"Feature Engineering",
				"Jupyter"
			]) },
			{ ...siteContentPlaceholderSkill("skill-page-da", "02", "Data Analytics", "Tools for querying, cleaning and communicating information for clearer decisions.", [
				"SQL",
				"Excel",
				"Power BI",
				"Tableau",
				"Data Cleaning",
				"Dashboards",
				"Reporting"
			]) },
			{ ...siteContentPlaceholderSkill("skill-page-ai", "03", "AI/ML", "Applied workflows for training, evaluating and integrating intelligent systems.", [
				"Machine Learning",
				"TensorFlow",
				"NLP",
				"Model Evaluation",
				"Deep Learning",
				"Prompting"
			]) },
			{ ...siteContentPlaceholderSkill("skill-page-fs", "04", "Full-Stack", "Modern application foundations from accessible interfaces to reliable APIs.", [
				"React",
				"TypeScript",
				"Node.js",
				"REST APIs",
				"HTML",
				"CSS",
				"PostgreSQL",
				"Git"
			]) },
			{ ...siteContentPlaceholderSkill("skill-page-tools", "05", "Tools", "Everyday tools for analysis, building, iteration and team collaboration.", [
				"Git",
				"GitHub",
				"VS Code",
				"Jupyter",
				"Figma",
				"Docker",
				"Postman"
			]) }
		]
	},
	resume: {
		eyebrow: "Profile / Resume",
		title: "Resume",
		intro: "A concise record of education, capabilities and selected work. The current document is a clearly marked placeholder until the verified resume is uploaded.",
		updatedLabel: "Last updated",
		updated: "October 2026",
		pdfUrl: "/resume.pdf",
		downloadLabel: "Download Resume",
		fullscreenLabel: "View fullscreen",
		fallbackText: "Your browser cannot display the resume here.",
		fallbackLabel: "Open the PDF"
	},
	art: {
		eyebrow: "Beyond code / Visual work",
		title: "Art",
		intro: "Art is another way I explore ideas, composition and creativity. These locally generated pieces are placeholders for original work.",
		filters: [
			"ALL",
			"DIGITAL",
			"SKETCH",
			"EXPERIMENTAL"
		],
		portfolioLabel: "Visit Paras Arts Website",
		portfolioDescription: "Explore the full collection of my artwork and creative projects.",
		portfolioUrl: "https://paras-arts.vercel.app/",
		items: [
			art_01_default,
			art_02_default,
			art_03_default,
			art_04_default,
			art_05_default,
			art_06_default
		].map((imageUrl, index) => {
			const category = [
				"DIGITAL",
				"SKETCH",
				"EXPERIMENTAL",
				"DIGITAL",
				"SKETCH",
				"EXPERIMENTAL"
			][index] ?? "DIGITAL";
			const number = index + 1;
			return {
				id: `artwork-${number}`,
				index: String(number).padStart(2, "0"),
				meta: `${category} · PLACEHOLDER`,
				category,
				title: `Artwork placeholder ${String(number).padStart(2, "0")}`,
				description: "A locally generated color study holding space for verified original artwork and its story.",
				medium: "Medium placeholder",
				year: "2026",
				tags: [category, "Artwork pending"],
				imageUrl,
				imageAlt: `Color artwork placeholder ${number}`
			};
		})
	},
	contact: {
		eyebrow: "Contact / New opportunities",
		title: "LET'S WORK TOGETHER",
		intro: "Have a project, opportunity or idea worth exploring? Start a conversation through any channel or send a structured WhatsApp message.",
		links: [
			{
				label: "Email",
				value: "paraskosambe@gmail.com",
				href: "mailto:paraskosambe@gmail.com"
			},
			{
				label: "LinkedIn",
				value: "Paras Kosambe",
				href: siteConfig.linkedin
			},
			{
				label: "GitHub",
				value: "paraskosambe-web",
				href: siteConfig.github
			},
			{
				label: "WhatsApp",
				value: "+91 91379 35311",
				href: `https://wa.me/${siteConfig.whatsapp}`
			}
		],
		form: {
			nameLabel: "Name",
			emailLabel: "Email",
			interestLabel: "What are you interested in?",
			messageLabel: "Message",
			submitLabel: "Continue on WhatsApp",
			interests: [
				"Data Science",
				"Data Analytics",
				"AI-ML",
				"Full-Stack Development",
				"Collaboration",
				"Other"
			],
			successMessage: "Your message is ready in WhatsApp.",
			errorMessage: "Your message could not be saved. Please try again."
		}
	}
};
function siteContentPlaceholderSkill(id, index, title, description, skills) {
	return {
		id,
		index,
		meta: "SKILLS",
		title,
		description,
		skills,
		tags: skills,
		imageAlt: `${title} skill category`
	};
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Public portfolio content, read server-side so database credentials stay out of the browser. */
var fetchPortfolioData = createServerFn({ method: "GET" }).handler(createSsrRpc("ad46d53dc830ae89783928acba7e603a0221c3202500aa7debb953448507a660"));
var portfolioQueryOptions = queryOptions({
	queryKey: ["portfolio-content"],
	queryFn: () => fetchPortfolioData(),
	staleTime: 0
});
var current = siteContent;
var lastData;
var contentListeners = /* @__PURE__ */ new Set();
function subscribeToContent(listener) {
	contentListeners.add(listener);
	return () => {
		contentListeners.delete(listener);
	};
}
function notifyContentChanged() {
	contentListeners.forEach((listener) => listener());
}
/** Reactively read the typed portfolio content model in UI components. */
function useSiteContent() {
	return (0, import_react.useSyncExternalStore)(subscribeToContent, () => current, () => current);
}
var pad = (n) => String(n).padStart(2, "0");
var top3 = (rows) => rows.filter((r) => r.featured).slice(0, 3);
function portfolioImageUrl(source) {
	const value = source?.trim();
	if (!value) return void 0;
	const mediaPrefix = "/api/public/media/portfolio-images/";
	if (value.startsWith(mediaPrefix)) return value;
	const storagePath = value.match(/(?:^|\/)storage\/v1\/object\/(?:public|sign|authenticated)\/portfolio-images\/([^?#]+)/i)?.[1];
	const bucketPath = value.match(/(?:^|\/)portfolio-images\/([^?#]+)/i)?.[1];
	if (!storagePath && !bucketPath && /^(https?:|data:|blob:)/i.test(value)) return value;
	return `${mediaPrefix}${(storagePath || bucketPath || value).replace(/^\/+/, "").split("/").map(encodeURIComponent).join("/")}`;
}
function formatWhatsapp(n) {
	return n.length > 10 ? `+${n.slice(0, n.length - 10)} ${n.slice(-10, -5)} ${n.slice(-5)}` : n;
}
/** Build the public content model from managed rows, keeping UI labels from the static copy. */
function hydrateSiteContent(data) {
	if (data === lastData) return;
	lastData = data;
	if (!data) {
		current = siteContent;
		notifyContentChanged();
		return;
	}
	const m = siteContent;
	const s = data.site;
	const link = (p) => data.socials.find((x) => x.platform === p)?.url ?? "";
	siteConfig.github = link("github") || siteConfig.github;
	siteConfig.linkedin = link("linkedin") || siteConfig.linkedin;
	siteConfig.instagram = link("instagram");
	siteConfig.email = s?.contact_email || "paraskosambe@gmail.com";
	if (s?.whatsapp_number && /^\d+$/.test(s.whatsapp_number)) siteConfig.whatsapp = s.whatsapp_number;
	const projects = data.projects.map((p, i) => ({
		id: p.id,
		slug: p.slug,
		index: pad(i + 1),
		meta: p.category,
		category: p.category,
		title: p.title,
		description: p.description,
		tags: p.technologies,
		imageUrl: portfolioImageUrl(p.image_url) ?? "",
		imageAlt: p.image_alt || p.title,
		action: {
			label: "View project",
			href: `/projects/${p.slug}`
		},
		githubUrl: p.github_url,
		liveUrl: p.live_url,
		overview: p.overview,
		problem: p.problem,
		solution: p.solution,
		features: p.features,
		technologies: p.technologies,
		development: p.development,
		screenshots: p.screenshots.map(portfolioImageUrl).filter((url) => Boolean(url)),
		learnings: p.learnings
	}));
	const certifications = data.certifications.map((c, i) => ({
		id: c.id,
		index: pad(i + 1),
		meta: c.category,
		category: c.category,
		title: c.title,
		issuer: c.issuer,
		date: c.date_label,
		credentialId: c.credential_id,
		description: c.description,
		tags: c.tags,
		imageUrl: portfolioImageUrl(c.image_url) ?? "",
		imageAlt: c.image_alt || c.title,
		action: {
			label: "View Credential",
			href: c.credential_url || `#certification-${c.id}`
		}
	}));
	const experiences = data.experiences.map((e, i) => {
		const imageUrl = portfolioImageUrl(e.image_url);
		return {
			id: e.id,
			index: pad(i + 1),
			meta: e.type || "EXPERIENCE",
			title: e.title,
			organization: e.organization,
			role: e.role,
			type: e.type,
			dateRange: e.date_range,
			location: e.location,
			description: e.description,
			tags: e.technologies,
			linkUrl: e.link_url,
			githubUrl: e.github_url,
			technologies: e.technologies,
			responsibilities: e.responsibilities,
			imageAlt: e.image_alt || e.title,
			...imageUrl ? { imageUrl } : {},
			action: {
				label: "View details",
				href: e.link_url || `#experience-${e.id}`
			}
		};
	});
	const achievements = data.achievements.map((a, i) => ({
		id: a.id,
		index: pad(i + 1),
		meta: a.category,
		category: a.category,
		title: a.title,
		organization: a.organization,
		date: a.date_label,
		description: a.description,
		tags: a.tags,
		imageAlt: a.image_alt || a.title,
		...a.image_url ? { imageUrl: a.image_url } : {},
		...a.link_url ? {
			action: {
				label: a.link_label || "View link",
				href: a.link_url
			},
			link: {
				label: a.link_label || "View link",
				href: a.link_url
			}
		} : {}
	}));
	const artworks = data.artworks.map((a, i) => ({
		id: a.id,
		index: pad(i + 1),
		meta: a.category,
		category: a.category,
		title: a.title,
		description: a.description,
		medium: a.medium,
		year: a.year,
		tags: a.tags,
		imageUrl: a.image_url,
		imageAlt: a.image_alt || a.title
	}));
	const skills = data.skills.map((k, i) => {
		const imageUrl = portfolioImageUrl(k.image_url);
		return {
			id: k.id,
			index: pad(i + 1),
			meta: "SKILLS",
			title: k.title,
			description: k.description,
			skills: k.skills,
			tags: k.skills,
			imageAlt: k.image_alt || k.title,
			...imageUrl ? { imageUrl } : {}
		};
	});
	const about = {
		...m.about,
		...s?.about_image_url ? { imageUrl: s.about_image_url } : {},
		imageAlt: s?.about_image_alt || m.about.imageAlt,
		bio: s?.about_bio.length ? s.about_bio : m.about.bio,
		education: s ? {
			degree: s.education_degree,
			institution: s.education_institution,
			status: s.education_status
		} : m.about.education,
		currently: s?.currently ?? m.about.currently,
		lookingFor: s?.looking_for ?? m.about.lookingFor
	};
	const resumeUpdated = data.resume?.updated_label || m.resume.updated;
	const portfolioUrl = m.art.portfolioUrl || s?.art_portfolio_url || siteConfig.instagram;
	const { portfolioUrl: _ignored, ...artBase } = m.art;
	const home = {
		...m.home,
		about: {
			...m.home.about,
			...about.imageUrl ? { imageUrl: about.imageUrl } : {},
			imageAlt: about.imageAlt,
			intro: s?.about_intro ? [s.about_intro] : m.home.about.intro,
			currently: about.currently
		},
		skills: {
			...m.home.skills,
			categories: skills.filter((_, i) => data.skills[i]?.featured).slice(0, 3).map((k) => ({
				...k,
				tags: k.skills.slice(0, 4),
				action: {
					label: "View skills",
					href: "/skills"
				}
			}))
		},
		projects: {
			...m.home.projects,
			items: top3(data.projects).map((r) => projects.find((p) => p.id === r.id))
		},
		experience: {
			...m.home.experience,
			items: top3(data.experiences).map((r) => experiences.find((p) => p.id === r.id))
		},
		certifications: {
			...m.home.certifications,
			items: top3(data.certifications).map((r) => certifications.find((p) => p.id === r.id))
		},
		achievements: {
			...m.home.achievements,
			items: top3(data.achievements).map((r) => achievements.find((p) => p.id === r.id))
		},
		art: {
			...m.home.art,
			items: top3(data.artworks).map((r) => artworks.find((p) => p.id === r.id))
		},
		resume: {
			...m.home.resume,
			updated: resumeUpdated
		}
	};
	current = {
		hero: s ? {
			...m.hero,
			eyebrow: s.hero_eyebrow,
			firstName: s.hero_first_name,
			lastName: s.hero_last_name,
			primaryRole: s.hero_role,
			disciplines: s.hero_disciplines,
			description: s.hero_description,
			socials: [{
				label: "GitHub",
				href: siteConfig.github
			}, {
				label: "LinkedIn",
				href: siteConfig.linkedin
			}]
		} : m.hero,
		home,
		projects: {
			...m.projects,
			items: projects
		},
		experience: {
			...m.experience,
			items: experiences
		},
		certifications: {
			...m.certifications,
			items: certifications
		},
		achievements: {
			...m.achievements,
			items: achievements
		},
		about,
		skills: {
			...m.skills,
			items: skills
		},
		resume: {
			...m.resume,
			updated: resumeUpdated,
			pdfUrl: data.resume?.file_url ?? m.resume.pdfUrl
		},
		art: {
			...artBase,
			items: artworks,
			...portfolioUrl ? { portfolioUrl } : {}
		},
		contact: {
			...m.contact,
			links: [
				{
					label: "Email",
					value: siteConfig.email || "Email pending",
					href: siteConfig.email ? `mailto:${siteConfig.email}` : "#"
				},
				{
					label: "LinkedIn",
					value: "Paras Kosambe",
					href: siteConfig.linkedin
				},
				{
					label: "GitHub",
					value: siteConfig.github.replace(/^https?:\/\/(www\.)?github\.com\//, ""),
					href: siteConfig.github
				},
				{
					label: "WhatsApp",
					value: formatWhatsapp(siteConfig.whatsapp),
					href: `https://wa.me/${siteConfig.whatsapp}`
				}
			]
		}
	};
	notifyContentChanged();
}
function getProjects() {
	return current.projects.items;
}
function getProjectBySlug(slug) {
	return current.projects.items.find((p) => p.slug === slug);
}
//#endregion
export { siteConfig as a, portfolioQueryOptions as i, getProjects as n, useSiteContent as o, hydrateSiteContent as r, getProjectBySlug as t };
