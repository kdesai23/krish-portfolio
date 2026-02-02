export type Project = {
    slug: string;        // used in the URL: /projects/<slug>
    title: string;       // card/title text
    description: string; // short summary
    tags: string[];      // tech keywords (python, RAG, etc)
    featured?: boolean;  // for homepage featured section

    timeline?: string;       // e.g., "Jan 2025 – Mar 2025"
    role?: string;          // e.g., "Full-stack developer"
    highlights?: string[];  // 3–5 top bullets recruiters scan
    metrics?: { label: string; value: string }[]; // numbers that pop
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
            { label: "Auth + roles", value: "Student / Donor accounts" },
            { label: "Testing", value: "Pytest + Selenium" },
            { label: "Backend", value: "Flask + PostgreSQL" },
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
    },
    {
        slug: "ufc-prediction",
        title: "UFC Fight Prediction Model",
        description:
            "Built an end-to-end ML pipeline to predict fight outcomes and evaluate which features and models generalize best.",
        tags: ["Python", "Pandas", "Scikit-learn", "Feature Engineering", "Evaluation"],
        featured: true,

        timeline: "2025",
        role: "Data Scientist / ML Engineer (Project)",
        metrics: [
            { label: "Goal", value: "Predict fight winner" },
            { label: "Approach", value: "Feature selection + model comparison" },
            { label: "Focus", value: "Generalization & evaluation" },
        ],
        highlights: [
            "Built a repeatable training pipeline (data cleaning → feature engineering → train/validate → evaluation).",
            "Compared multiple models and tuned hyperparameters to improve predictive performance.",
            "Tested feature selection strategies to identify the most informative signals and reduce noise/overfitting.",
            "Tracked results with consistent metrics and validation to avoid misleading conclusions.",
        ],
        stack: ["Python", "Pandas", "Scikit-learn", "Feature Engineering", "Cross-validation"],


        links: {
            github: "https://github.com/kyliehoar/ultimate_iron_mike",
        },
    },

    {
        slug: "multimodal-rag",
        title: "Multimodal RAG + Document Retrieval",
        description:
            "Built a document-QA pipeline for PDFs using OCR + embeddings + vector search, with tenant-aware filtering for isolation.",
        tags: ["RAG", "Qdrant", "OCR", "Embeddings", "LLMs"],
        featured: true,

        timeline: "2025",
        role: "ML / Software Engineer (Project)",
        metrics: [
            { label: "Input", value: "PDFs → page chunks" },
            { label: "Retrieval", value: "Vector search (Qdrant)" },
            { label: "Safety", value: "Tenant-aware filtering" },
        ],
        highlights: [
            "Parsed PDFs into page-level text and generated embeddings for semantic retrieval.",
            "Integrated OCR for scanned pages and routed extracted text into the same indexing pipeline.",
            "Queried Qdrant for top-k pages and added tenant-aware filtering to prevent cross-tenant leakage.",
            "Used an LLM to synthesize answers grounded in retrieved pages (RAG pattern).",
        ],
    },
    {
        slug: "schneider-xgboost-automation",
        title: "Schneider Electric — Test Automation + XGBoost Estimation",
        description:
            "Automated test-report workflows and built an XGBoost model to estimate project duration from historical testing data.",
        tags: ["Python", "XGBoost", "Pandas", "Data Cleaning", "VBA", "Automation"],
        featured: true,

        timeline: "Summer 2024",
        role: "Software Test Engineering Intern",
        metrics: [
            { label: "Dataset size", value: "100+ test reports" },
            { label: "Prediction accuracy", value: "~86%" },
            { label: "Automation impact", value: "Reduced manual effort" },
        ],
        highlights: [
            "Standardized and consolidated test results into an analysis-ready dataset (cleaning, formatting, and consistency checks).",
            "Trained and evaluated an XGBoost model to estimate project duration; iterated on feature engineering to improve performance.",
            "Built Excel VBA macros to automate repetitive reporting and visualization tasks for faster internal analysis.",
        ],

    },

];