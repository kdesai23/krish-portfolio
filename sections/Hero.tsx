import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className ="py-10">
            <div className = "grid items-center gap-10 md:grid-cols-[1.4fr_0.6fr]">
                {/* Left: text*/}
                <div className="space-y-8">
                    <div className = "space-y-3">
                        <p className = "text-sm text-white/60">Hi, I'm </p>
                        <h1 className = "text-4xl font-semibold tracking-tight sm:text-6xl">
                            Krish Desai
                        </h1>

                        <p className = "max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                        <span> CS &amp; Data Science @ Worcester Polytechnic Institute (WPI)</span>
                        <span className="mx-2 text-white/30">·</span>
                        <span>Former Software Engineering Intern @ Schneider Electric</span>
                        <span className="mx-2 text-white/30">·</span>
                        <span>ML pipelines · RAG systems · Full-stack products</span>
                        </p>
                    </div>

                    <div className = "flex flex-wrap gap-3">
                        <Link
                            href = "/projects"
                            className = "rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                        >
                            View Projects
                        </Link>
                        <Link
                            href = "/contact"
                            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5"
                        >
                            Contact
                        </Link>
                    </div>
                    <ul className = "grid gap-2 text-sm text-white/70 sm:grid-cols-2">
                        <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <span className = "text-white"> Schneider Electric</span> · Software Engineering Intern
                        </li>
                        <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            XGBoost pipeline · 100+ test reports · 86% accuracy
                        </li>
                        <li className = "rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            Qdrant · Multitenancy · OCR + LLMs
                        </li>
                        <li className ="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            Flask · PostgreSQL · AWS · Auth & Testing
                        </li>
                    </ul>
                </div>

                {/* Right: headshot */}
                <div className ="flex justify-center md:justify-end">
                    <div className ="relative h-44 w-44 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-72 sm:w-72">
                        <Image
                            src = "/headshot.jpg"
                            alt = "Krish Desai Headshot"
                            fill
                            className = "object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
