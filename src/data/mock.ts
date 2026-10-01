import { siteConfig } from "@/config/site";
import type { SiteContent } from "@/types/site";
import project01 from "@/assets/projects/project-01.png";
import project02 from "@/assets/projects/project-02.png";
import project03 from "@/assets/projects/project-03.png";
import project04 from "@/assets/projects/project-04.png";
import project05 from "@/assets/projects/project-05.png";
import project06 from "@/assets/projects/project-06.png";

const placeholderProjectDetails = {
  overview: "A structured placeholder for a future case study, designed to document context, process and measurable results.",
  problem: "The verified project problem and its real-world constraints will be documented here when final details are available.",
  solution: "The final solution narrative will explain the approach, important decisions and how the work addresses the stated problem.",
  features: ["Defined project scope", "Documented implementation process", "Clear outcome reporting", "Reproducible technical workflow"],
  technologies: ["Python", "TypeScript", "SQL", "Git"],
  development: "Development details will cover research, architecture, iteration, testing and deployment without overstating unverified outcomes.",
  learnings: ["Translate an open problem into testable steps", "Document decisions alongside implementation", "Evaluate results against the original goal"],
};

const projectImages = [project01, project02, project03, project04, project05, project06];
const projectCategories = ["Data Science", "Data Analytics", "AI/ML", "Full-Stack", "Data Science", "Data Analytics"] as const;
const projectTechnologies = [
  ["Python", "Pandas", "Scikit-learn", "Jupyter"],
  ["SQL", "Power BI", "Excel", "Python"],
  ["Python", "TensorFlow", "NLP", "FastAPI"],
  ["React", "TypeScript", "Node.js", "PostgreSQL"],
  ["Python", "NumPy", "Statistics", "Matplotlib"],
  ["SQL", "Tableau", "Pandas", "Excel"],
];

const placeholderProjects = projectImages.map((imageUrl, index) => {
  const number = index + 1;
  const slug = `project-${String(number).padStart(2, "0")}`;
  const technologies = projectTechnologies[index] ?? placeholderProjectDetails.technologies;
  return {
    id: slug,
    slug,
    index: String(number).padStart(2, "0"),
    meta: projectCategories[index],
    category: projectCategories[index],
    title: `Project ${String(number).padStart(2, "0")}`,
    description: "A clearly labeled placeholder case study awaiting verified project context, implementation details and outcomes.",
    tags: technologies,
    imageUrl,
    imageAlt: `Locally generated grayscale visual for Project ${String(number).padStart(2, "0")}`,
    action: { label: "View project", href: `/projects/${slug}` },
    githubUrl: siteConfig.github,
    liveUrl: `/projects/${slug}`,
    ...placeholderProjectDetails,
    technologies,
    screenshots: [imageUrl, imageUrl, imageUrl],
  };
});

export const siteContent: SiteContent = {
  hero: {
    eyebrow: "ASPIRING DATA SCIENTIST",
    firstName: "PARAS",
    lastName: "KOSAMBE",
    primaryRole: "Data Science",
    disciplines: "Data Analytics · AI/ML · Full-Stack Development",
    description:
      "I build data-driven systems, intelligent applications, and scalable digital experiences.",
    primaryAction: { label: "View My Work", href: "/projects" },
    secondaryAction: { label: "View Resume", href: "/resume" },
    socials: [
      { label: "GitHub", href: siteConfig.github },
      { label: "LinkedIn", href: siteConfig.linkedin },
    ],
    coordinates: ["X 18.04", "Y 72.87", "N 19°04′", "E 72°52′"],
    scrollLabel: "SCROLL",
  },
  home: {
    about: {
      index: "01",
      title: "About",
      imageAlt: "Portrait of Paras Kosambe",
      intro: [
        "Final-year B.Sc. Computer Science student at the University of Mumbai.",
        "Interested in Data Science, Data Analytics, AI/ML,",
        "and Full-Stack Development.",
      ],
      currentlyLabel: "Currently",
      currently: [
        "Building practical data science projects",
        "Strengthening machine learning fundamentals",
        "Exploring scalable full-stack systems",
      ],
      action: { label: "More about me", href: "/about" },
    },
    skills: {
      index: "02",
      title: "Skills",
      intro: "A working toolkit across data, intelligence and product engineering.",
      categories: [
        { id: "skill-ds", index: "01", meta: "08 SKILLS", title: "Data Science", count: 8, description: "Core methods for turning raw information into useful models.", skills: ["Python", "Pandas", "NumPy", "Statistics", "Scikit-learn", "EDA", "Feature Engineering", "Jupyter"], tags: ["Python", "Pandas", "NumPy", "Statistics"], imageAlt: "Data Science category", action: { label: "View skills", href: "/skills" } },
        { id: "skill-da", index: "02", meta: "07 SKILLS", title: "Data Analytics", count: 7, description: "Analysis, querying and reporting for clear decisions.", skills: ["SQL", "Excel", "Power BI", "Tableau", "Data Cleaning", "Dashboards", "Reporting"], tags: ["SQL", "Excel", "Power BI", "Tableau"], imageAlt: "Data Analytics category", action: { label: "View skills", href: "/skills" } },
        { id: "skill-ai", index: "03", meta: "06 SKILLS", title: "AI/ML", count: 6, description: "Applied machine learning workflows and intelligent systems.", skills: ["Machine Learning", "TensorFlow", "NLP", "Model Evaluation", "Deep Learning", "Prompting"], tags: ["Machine Learning", "TensorFlow", "NLP", "Evaluation"], imageAlt: "AI and machine learning category", action: { label: "View skills", href: "/skills" } },
        { id: "skill-fs", index: "04", meta: "08 SKILLS", title: "Full-Stack", count: 8, description: "Modern interfaces and reliable application foundations.", skills: ["React", "TypeScript", "Node.js", "REST APIs", "HTML", "CSS", "PostgreSQL", "Git"], tags: ["React", "TypeScript", "Node.js", "REST APIs"], imageAlt: "Full-stack category", action: { label: "View skills", href: "/skills" } },
        { id: "skill-tools", index: "05", meta: "07 SKILLS", title: "Tools", count: 7, description: "Daily tools for building, analysis and collaboration.", skills: ["Git", "GitHub", "VS Code", "Jupyter", "Figma", "Docker", "Postman"], tags: ["Git", "GitHub", "VS Code", "Jupyter"], imageAlt: "Tools category", action: { label: "View skills", href: "/skills" } },
      ],
      action: { label: "View all skills", href: "/skills" },
    },
    projects: {
      index: "03", title: "Selected Projects", intro: "A preview of data-led work and technical experiments.", action: { label: "View all projects", href: "/projects" },
      items: [1, 2, 3].map((number) => ({ id: `project-${number}`, index: `0${number}`, meta: "FEATURED · PLACEHOLDER", title: `Project placeholder ${number}`, description: "Project details will be added here with a clear problem, approach and measurable outcome.", tags: ["Data", "Analysis", "Build"], imageAlt: `Placeholder for project ${number}`, action: { label: "View project", href: "/projects" } })),
    },
    experience: {
      index: "04", title: "Experience", intro: "Learning, contribution and practical work in context.", action: { label: "View all experience", href: "/experience" },
      items: [1, 2, 3].map((number) => ({ id: `experience-${number}`, index: `0${number}`, meta: "EXPERIENCE · PLACEHOLDER", title: `Experience placeholder ${number}`, description: "Verified role, organisation and impact details will be added here.", tags: ["Role pending", "Details pending"], imageAlt: `Placeholder for experience ${number}`, action: { label: "View experience", href: "/experience" } })),
    },
    certifications: {
      index: "05", title: "Certifications", intro: "Formal learning and verified technical development.", action: { label: "View all certifications", href: "/certifications" },
      items: [1, 2, 3].map((number) => ({ id: `certification-${number}`, index: `0${number}`, meta: "CERTIFICATE · PLACEHOLDER", title: `Certification placeholder ${number}`, description: "Issuer, credential and completion details will be added after verification.", tags: ["Credential pending"], imageAlt: `Placeholder for certification ${number}`, action: { label: "View certification", href: "/certifications" } })),
    },
    achievements: {
      index: "06", title: "Achievements", intro: "Selected milestones, recognised only when they are verifiable.", action: { label: "View all achievements", href: "/achievements" },
      items: [1, 2, 3].map((number) => ({ id: `achievement-${number}`, index: `0${number}`, meta: "ACHIEVEMENT · PLACEHOLDER", title: `Achievement placeholder ${number}`, description: "Verified achievement details and supporting context will be added here.", tags: ["Details pending"], imageAlt: `Placeholder for achievement ${number}`, action: { label: "View achievement", href: "/achievements" } })),
    },
    resume: {
      index: "07", title: "Resume", updatedLabel: "Last updated", updated: "October 2026", intro: "A concise record of education, capabilities and selected work.", viewAction: { label: "View Resume", href: "/resume" }, downloadAction: { label: "Download", href: "/resume" },
    },
    art: {
      index: "08", title: "Beyond Code", intro: "Data, systems and algorithms are one side of me. Art is another way I explore ideas and creativity.", action: { label: "Explore my art", href: "/art" },
      items: [1, 2, 3].map((number) => ({ id: `art-${number}`, index: `0${number}`, meta: "ARTWORK · PLACEHOLDER", title: `Artwork placeholder ${number}`, description: "A future space for a piece, its medium and the idea behind it.", tags: ["Artwork pending"], imageAlt: `Placeholder for artwork ${number}`, action: { label: "View artwork", href: "/art" } })),
    },
    contact: { index: "09", title: "LET'S WORK TOGETHER", intro: "Have a project, opportunity or idea worth exploring?", action: { label: "Start a conversation", href: "/contact" } },
  },
  projects: {
    eyebrow: "Selected work / 2026",
    title: "Projects",
    intro: "Data-led explorations, analytical systems and full-stack builds. Placeholder case studies are clearly marked until verified work is added.",
    searchLabel: "Search projects",
    searchPlaceholder: "Search by title, category or technology",
    filters: ["All", "Data Science", "Data Analytics", "AI/ML", "Full-Stack"],
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
      next: "Next project",
    },
    items: placeholderProjects,
  },
};