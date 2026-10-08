import { siteConfig } from "@/config/site";
import type { SiteContent } from "@/types/site";
import project01 from "@/assets/projects/project-01.png";
import project02 from "@/assets/projects/project-02.png";
import project03 from "@/assets/projects/project-03.png";
import project04 from "@/assets/projects/project-04.png";
import project05 from "@/assets/projects/project-05.png";
import project06 from "@/assets/projects/project-06.png";
import art01 from "@/assets/art/art-01.png";
import art02 from "@/assets/art/art-02.png";
import art03 from "@/assets/art/art-03.png";
import art04 from "@/assets/art/art-04.png";
import art05 from "@/assets/art/art-05.png";
import art06 from "@/assets/art/art-06.png";

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
      sectionName: "About",
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
      sectionName: "Skills",
      index: "02",
      title: "Skills",
      intro: "A working toolkit across data, intelligence and product engineering.",
      categories: [
        { id: "skill-ds", index: "01", meta: "SKILLS", title: "Data Science", description: "Core methods for turning raw information into useful models.", skills: ["Python", "Pandas", "NumPy", "Statistics", "Scikit-learn", "EDA", "Feature Engineering", "Jupyter"], tags: ["Python", "Pandas", "NumPy", "Statistics"], imageAlt: "Data Science category", action: { label: "View skills", href: "/skills" } },
        { id: "skill-da", index: "02", meta: "SKILLS", title: "Data Analytics", description: "Analysis, querying and reporting for clear decisions.", skills: ["SQL", "Excel", "Power BI", "Tableau", "Data Cleaning", "Dashboards", "Reporting"], tags: ["SQL", "Excel", "Power BI", "Tableau"], imageAlt: "Data Analytics category", action: { label: "View skills", href: "/skills" } },
        { id: "skill-ai", index: "03", meta: "SKILLS", title: "AI/ML", description: "Applied machine learning workflows and intelligent systems.", skills: ["Machine Learning", "TensorFlow", "NLP", "Model Evaluation", "Deep Learning", "Prompting"], tags: ["Machine Learning", "TensorFlow", "NLP", "Evaluation"], imageAlt: "AI and machine learning category", action: { label: "View skills", href: "/skills" } },
        { id: "skill-fs", index: "04", meta: "SKILLS", title: "Full-Stack", description: "Modern interfaces and reliable application foundations.", skills: ["React", "TypeScript", "Node.js", "REST APIs", "HTML", "CSS", "PostgreSQL", "Git"], tags: ["React", "TypeScript", "Node.js", "REST APIs"], imageAlt: "Full-stack category", action: { label: "View skills", href: "/skills" } },
        { id: "skill-tools", index: "05", meta: "SKILLS", title: "Tools", description: "Daily tools for building, analysis and collaboration.", skills: ["Git", "GitHub", "VS Code", "Jupyter", "Figma", "Docker", "Postman"], tags: ["Git", "GitHub", "VS Code", "Jupyter"], imageAlt: "Tools category", action: { label: "View skills", href: "/skills" } },
      ],
      action: { label: "View all skills", href: "/skills" },
    },
    projects: {
      sectionName: "Projects",
      index: "03", title: "Selected Projects", intro: "A preview of data-led work and technical experiments.", action: { label: "View all projects", href: "/projects" },
      items: [1, 2, 3].map((number) => ({ id: `project-${number}`, index: `0${number}`, meta: "FEATURED · PLACEHOLDER", title: `Project placeholder ${number}`, description: "Project details will be added here with a clear problem, approach and measurable outcome.", tags: ["Data", "Analysis", "Build"], imageAlt: `Placeholder for project ${number}`, action: { label: "View project", href: "/projects" } })),
    },
    experience: {
      sectionName: "Experience",
      index: "04", title: "Experience", intro: "Learning, contribution and practical work in context.", action: { label: "View all experience", href: "/experience" },
      items: [1, 2, 3].map((number) => ({ id: `experience-${number}`, index: `0${number}`, meta: "EXPERIENCE · PLACEHOLDER", title: `Experience placeholder ${number}`, description: "Verified role, organisation and impact details will be added here.", tags: ["Role pending", "Details pending"], imageAlt: `Placeholder for experience ${number}`, action: { label: "View experience", href: "/experience" } })),
    },
    certifications: {
      sectionName: "Certifications",
      index: "05", title: "Certifications", intro: "Formal learning and verified technical development.", action: { label: "View all certifications", href: "/certifications" },
      items: [1, 2, 3].map((number) => ({ id: `certification-${number}`, index: `0${number}`, meta: "CERTIFICATE · PLACEHOLDER", title: `Certification placeholder ${number}`, description: "Issuer, credential and completion details will be added after verification.", tags: ["Credential pending"], imageAlt: `Placeholder for certification ${number}`, action: { label: "View certification", href: "/certifications" } })),
    },
    achievements: {
      sectionName: "Achievements",
      index: "06", title: "Achievements", intro: "Selected milestones, recognised only when they are verifiable.", action: { label: "View all achievements", href: "/achievements" },
      items: [1, 2, 3].map((number) => ({ id: `achievement-${number}`, index: `0${number}`, meta: "ACHIEVEMENT · PLACEHOLDER", title: `Achievement placeholder ${number}`, description: "Verified achievement details and supporting context will be added here.", tags: ["Details pending"], imageAlt: `Placeholder for achievement ${number}`, action: { label: "View achievement", href: "/achievements" } })),
    },
    resume: {
      sectionName: "Resume",
      index: "07", title: "Resume", updatedLabel: "Last updated", updated: "October 2026", intro: "A concise record of education, capabilities and selected work.", viewAction: { label: "View Resume", href: "/resume" }, downloadAction: { label: "Download", href: "/resume" },
    },
    art: {
      sectionName: "Artworks",
      index: "08", title: "Beyond Code", intro: "Data, systems and algorithms are one side of me. Art is another way I explore ideas and creativity.", action: { label: "Explore my art", href: "/art" },
      items: [1, 2, 3].map((number) => ({ id: `art-${number}`, index: `0${number}`, meta: "ARTWORK · PLACEHOLDER", title: `Artwork placeholder ${number}`, description: "A future space for a piece, its medium and the idea behind it.", tags: ["Artwork pending"], imageAlt: `Placeholder for artwork ${number}`, action: { label: "View artwork", href: "/art" } })),
    },
    contact: { sectionName: "Contact", index: "09", title: "LET'S WORK TOGETHER", intro: "Looking to hire a curious data professional or collaborate on a thoughtful product? I’m open to roles and internships across data science, analytics, AI/ML and full-stack development. Share what you’re building and let’s talk.", action: { label: "Start a conversation", href: "/contact" } },
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
  experience: {
    eyebrow: "Experience / Placeholder records",
    title: "Experience",
    intro: "A structured space for verified roles, responsibilities and practical contributions. All current entries are clearly marked placeholders.",
    dialogResponsibilitiesLabel: "Responsibilities",
    dialogTechnologiesLabel: "Technologies",
    items: [1, 2, 3].map((number) => ({
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
      tags: ["Technology", "Tool", "Method"],
      technologies: ["Technology placeholder", "Tool placeholder", "Method placeholder"],
      responsibilities: ["Responsibility placeholder awaiting verified details.", "Contribution placeholder awaiting verified details.", "Outcome placeholder awaiting verified details."],
      imageAlt: `Placeholder visual for experience record ${number}`,
      action: { label: "View details", href: `#experience-record-${number}` },
    })),
  },
  certifications: {
    eyebrow: "Credentials / Placeholder records",
    title: "Certifications",
    intro: "A filterable archive prepared for verified certificates, issuers and credential details. Current records are placeholders.",
    filters: ["ALL", "DATA", "AI-ML", "DEVELOPMENT", "CLOUD", "OTHER"],
    loadMoreLabel: "Load more",
    lightboxCloseLabel: "Close preview",
    items: projectImages.map((imageUrl, index) => {
      const number = index + 1;
      const categories = ["DATA", "AI-ML", "DEVELOPMENT", "CLOUD", "OTHER", "DATA"] as const;
      const category = categories[index] ?? "OTHER";
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
        action: { label: "View Credential", href: `#certification-record-${number}` },
      };
    }),
  },
  achievements: {
    eyebrow: "Milestones / Placeholder records",
    title: "Achievements",
    intro: "Selected milestones will appear here only with verified context and attribution. Current records are placeholders.",
    filters: ["ALL", "ACADEMIC", "TECHNICAL", "COMMUNITY", "OTHER"],
    items: [1, 2, 3].map((number) => {
      const categories = ["ACADEMIC", "TECHNICAL", "COMMUNITY"] as const;
      const category = categories[number - 1] ?? "OTHER";
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
        imageAlt: `Placeholder visual for achievement ${number}`,
      };
    }),
  },
  about: {
    eyebrow: "Profile / About",
    title: "About",
    intro: "The person behind the data, systems and digital experiences.",
    imageAlt: "Portrait of Paras Kosambe",
    bio: [
      "I am a final-year B.Sc. Computer Science student at the University of Mumbai, developing a practical foundation across data science, analytics, artificial intelligence and software engineering.",
      "My work is driven by curiosity: understanding how information becomes insight, how models become useful tools, and how thoughtful interfaces make complex systems easier to use.",
      "I enjoy moving between analysis and implementation—exploring a problem, structuring the data, testing an approach and shaping the result into a clear digital experience.",
    ],
    educationLabel: "Education",
    education: { degree: "B.Sc. Computer Science", institution: "University of Mumbai", status: "Final year" },
    currentlyLabel: "Currently",
    currently: ["Building practical data science projects", "Strengthening machine learning fundamentals", "Exploring scalable full-stack systems"],
    lookingForLabel: "What I'm looking for",
    lookingFor: "Opportunities to contribute to meaningful data, analytics, AI/ML or full-stack work while learning from experienced teams and solving real problems.",
  },
  skills: {
    eyebrow: "Capabilities / Working toolkit",
    title: "Skills",
    intro: "A focused toolkit across data, intelligence and product engineering—shown without arbitrary proficiency scores.",
    viewSkillsLabel: "View skills",
    hideSkillsLabel: "Show less",
    items: [
      { ...siteContentPlaceholderSkill("skill-page-ds", "01", "Data Science", "Methods for exploring data, testing assumptions and building reproducible models.", ["Python", "Pandas", "NumPy", "Statistics", "Scikit-learn", "EDA", "Feature Engineering", "Jupyter"]) },
      { ...siteContentPlaceholderSkill("skill-page-da", "02", "Data Analytics", "Tools for querying, cleaning and communicating information for clearer decisions.", ["SQL", "Excel", "Power BI", "Tableau", "Data Cleaning", "Dashboards", "Reporting"]) },
      { ...siteContentPlaceholderSkill("skill-page-ai", "03", "AI/ML", "Applied workflows for training, evaluating and integrating intelligent systems.", ["Machine Learning", "TensorFlow", "NLP", "Model Evaluation", "Deep Learning", "Prompting"]) },
      { ...siteContentPlaceholderSkill("skill-page-fs", "04", "Full-Stack", "Modern application foundations from accessible interfaces to reliable APIs.", ["React", "TypeScript", "Node.js", "REST APIs", "HTML", "CSS", "PostgreSQL", "Git"]) },
      { ...siteContentPlaceholderSkill("skill-page-tools", "05", "Tools", "Everyday tools for analysis, building, iteration and team collaboration.", ["Git", "GitHub", "VS Code", "Jupyter", "Figma", "Docker", "Postman"]) },
    ],
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
    fallbackLabel: "Open the PDF",
  },
  art: {
    eyebrow: "Beyond code / Visual work",
    title: "Art",
    intro: "Art is another way I explore ideas, composition and creativity. These locally generated pieces are placeholders for original work.",
    filters: ["ALL", "DIGITAL", "SKETCH", "EXPERIMENTAL"],
    portfolioLabel: "Visit Paras Arts Website",
    portfolioUrl: "https://paras-arts.vercel.app/",
    items: [art01, art02, art03, art04, art05, art06].map((imageUrl, index) => {
      const categories = ["DIGITAL", "SKETCH", "EXPERIMENTAL", "DIGITAL", "SKETCH", "EXPERIMENTAL"] as const;
      const category = categories[index] ?? "DIGITAL";
      const number = index + 1;
      return { id: `artwork-${number}`, index: String(number).padStart(2, "0"), meta: `${category} · PLACEHOLDER`, category, title: `Artwork placeholder ${String(number).padStart(2, "0")}`, description: "A locally generated color study holding space for verified original artwork and its story.", medium: "Medium placeholder", year: "2026", tags: [category, "Artwork pending"], imageUrl, imageAlt: `Color artwork placeholder ${number}` };
    }),
  },
  contact: {
    eyebrow: "Contact / New opportunities",
    title: "LET'S WORK TOGETHER",
    intro: "Have a project, opportunity or idea worth exploring? Start a conversation through any channel or send a structured WhatsApp message.",
    links: [
      { label: "Email", value: "paraskosambe@gmail.com", href: "mailto:paraskosambe@gmail.com" },
      { label: "LinkedIn", value: "Paras Kosambe", href: siteConfig.linkedin },
      { label: "GitHub", value: "paraskosambe-web", href: siteConfig.github },
      { label: "WhatsApp", value: "+91 91379 35311", href: `https://wa.me/${siteConfig.whatsapp}` },
    ],
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      interestLabel: "What are you interested in?",
      messageLabel: "Message",
      submitLabel: "Continue on WhatsApp",
      interests: ["Data Science", "Data Analytics", "AI-ML", "Full-Stack Development", "Collaboration", "Other"],
      successMessage: "Your message is ready in WhatsApp.",
      errorMessage: "Your message could not be saved. Please try again.",
    },
  },
};

function siteContentPlaceholderSkill(id: string, index: string, title: string, description: string, skills: string[]) {
  return { id, index, meta: "SKILLS", title, description, skills, tags: skills, imageAlt: `${title} skill category` };
}
