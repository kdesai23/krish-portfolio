export type Project = {
    slug: string;        // used in the URL: /projects/<slug>
    title: string;       // card/title text
    description: string; // short summary
    tags: string[];      // tech keywords (python, RAG, etc)
    featured?: boolean;  // for homepage featured section

    timeline?:string;       // e.g., "Jan 2025 – Mar 2025"
    role?: string;          // e.g., "Full-stack developer"
    highlights?: string[];  // 3–5 top bullets recruiters scan
    metrics?: {label: string; value: string }[]; // numbers that pop
    stack?: string[];       // cleaner than tags for “Tech Stack”

    // Images (paths inside /public)
    images?: { src: string; alt: string; caption?: string }[];

    links?: {
        github?: string;
        demo?: string;
    };
};

export const projects: Project[] = [
    {
        slug: "scholarship-web-app",
        title: "Scholarship Web App",
        description: "Full-stack scholarship platform where students apply and donors review/manage applications.",
        tags: ["Flask", "PostgreSQL", "SQLAlchemy", "Pytest", "Selenium", "HTML/CSS"],
        featured: true,

        timeline: "2024",
        role: "Full-stack developer",
        metrics: [
            {label: "Auth + roles", value: "Student / Donor accounts"},
            {label: "Testing", value: "Pytest + Selenium"},
            {label: "Backend", value: "Flask + PostgreSQL"},
        ],
        highlights: [
            "Built role-based flows for students (apply) and donors (create/review applications).",
            "Designed relational schema and implemented CRUD workflows with validation.",
            "Added automated tests for critical flows to prevent regressions.",
        ],
        stack: ["Flask", "PostgreSQL", "SQLAlchemy", "WTForms", "Pytest", "Selenium"],
        images: [
            {
                src: "/projects/home screen.png",
                alt: "Scholarship app home screen",
            },
        ],



        links: {
         github: "https://github.com/", // replace later
        },
    },
    {
        slug: "ufc-prediction",
        title: "UFC Fight Prediction Model",
        description: "FML pipeline exploring feature selection and model evaluation to improve fight outcome prediction.",
        tags: ["Python", "Pandas", "Scikit-learn", "Feature Engineering", "Evaluation"],
        featured: true,
        links: {
         github: "https://github.com/", // replace later
        },
    },
    {
        slug: "multimodal-rag",
        title: "Multimodal RAG + Document Retrieval",
        description: "Page-level retrieval with Qdrant + OCR + LLM synthesis; supports multi-tenancy via metadata payloads.",
        tags: ["RAG", "Qdrant", "OCR", "Embeddings", "Mistral/LLM"],
        featured: true,
    },
];