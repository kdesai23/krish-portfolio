import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="space-y-10">
      <Link href="/projects" className="text-sm text-white/70 hover:text-white">
        ← Back to Projects
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="max-w-2xl text-sm text-white/70">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Quick facts */}
      {(project.role || project.timeline || project.stack?.length) && (
        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/50">Role</p>
            <p className="mt-1 text-sm text-white/80">{project.role ?? "—"}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-white/50">Timeline</p>
            <p className="mt-1 text-sm text-white/80">{project.timeline ?? "—"}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-white/50">Stack</p>
            <p className="mt-1 text-sm text-white/80">
              {project.stack?.length ? project.stack.join(" • ") : "—"}
            </p>
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics?.length ? (
        <section className="grid gap-3 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs uppercase tracking-wider text-white/50">{m.label}</p>
              <p className="mt-2 text-lg font-semibold tracking-tight">{m.value}</p>
            </div>
          ))}
        </section>
      ) : null}

      {/* Highlights */}
      {project.highlights?.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight">What I did</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/70">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Screenshots */}
      {project.images?.length ? (
        <section className="space-y-4">

          <div className="grid gap-4 md:grid-cols-2">
            {project.images.map((img) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    width={1400}
                    height={900} 
                    className="object-contain" />
                </div>
                {img.caption ? (
                  <figcaption className="px-4 py-3 text-sm text-white/60">
                    {img.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Links */}
      {project.links?.github || project.links?.demo ? (
        <section className="flex flex-wrap gap-3">
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5"
            >
              GitHub
            </a>
          ) : null}

          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
            >
              Live Demo
            </a>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
