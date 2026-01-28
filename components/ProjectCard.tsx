import Link from "next/link";

type Props = {
    title: string;
    description: string;
    tags: string[];
    href: string;
};

export default function ProjectCard({ title, description, tags, href}: Props) {
    return (
        <Link
            href = {href}
            className = "group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
            <div className = "flex items-start justify-between gap-4">
                <h3 className ="text-base font-semibold tracking-tight">{title}</h3>
                <span className = "text-sm text-white/50 transition group-hover:text-white/70">
                    ↗
                </span>
            </div>

            <p className ="mt-2 text-sm leading-relaxed text-white/70">{description}</p>

            <div className ="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-white/70"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </Link>
    );
}