import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function FeaturedProjects() {

    const featured = projects.filter((p) => p.featured);

    return (
        <section className ="py-10">
            <div className = "flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight">Featured Projects</h2>
                    <p className="mt-1 text-sm text-white/60">
                        A few things I've recently built.
                    </p>
                </div>

                <Link
                    href="/projects"
                    className="text-sm text-white/70 transition hover:text-white"
                >
                    View all →
                </Link>
            </div>

            <div className ="mt-6 grid gap-4 md:grid-cols-3">
                {featured.map((p) => (
                    <ProjectCard 
                        key= {p.slug}
                        title ={p.title}
                        description ={p.description}
                        tags={p.tags}
                        href = {`/projects/${p.slug}`}
                    />
                ))}
            </div>
        </section>
    );
}