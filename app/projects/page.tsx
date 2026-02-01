import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata = {
    title: "Projects | Krish Desai",
    description: "Software and machine learning projects by Krish Desai."
};

export default function ProjectPage() {
    return (
        <div className = "space-y-8">
            <header className ="space-y-2">
                <h1 className = "text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h1>
                <p className = "max-w-2xl text-sm text-white/70">
                    A selection of software engineering and ML projects. Click any project for details.               
                </p>
            </header>

            <div className="grid gap-4 grid-cols-1">
                {projects.map((p) => (
                    <ProjectCard
                        key = {p.slug}
                        title={p.title}
                        description={p.description}
                        tags ={p.tags}
                        href ={`/projects/${p.slug}`}
                        />
                ))}
            </div>

        </div>
    
    )
}