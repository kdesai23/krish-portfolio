export type FeaturedProject = {
    title: string;
    description: string;
    tags: string[];
    href: string;
};

export const featuredProjects: FeaturedProject[] = [
    {
        title: "Scholarship Web App",
        description: "Full-stack scholarship platform built with Flask that lets students apply and donors manage application.",
        tags: ["Flask", "PostgreSQL", "Pytest", "Selenium", "AWS"],
        href: "/projects/scholarship-web-app",
    },
    {
        title: "UFC Fight Prediction Model",
        description: "ML pipeline with feature engineering + multiple models to predict fight outcomes and compare performance.",
        tags: ["Python", "Scikit-learn", "Matplotlib", "Model Evaluation"],
        href: "/projects/ufc-prediction",  
    },
    {
        title: "Multimodal Rag + Document Retrieval",
        description: "Page-level PDF retrieval with Qdrant + OCR + Mistral LLM summaries; supports tenant isolation via payloads.",
        tags: ["Rag", "Qdrant", "OCR", "Mistral", "Embeddings"],
        href: "/projects/multimodal-rag", 
    },
];