import Link from "next/link";

export const metadata = {
  title: "Resume | Krish Desai",
  description: "Resume for Krish Desai.",
};

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
        <p className="max-w-2xl text-sm text-white/70">
          Download a copy or view it below.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
        >
          Download PDF
        </a>
        <Link
          href="/contact"
          className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5"
        >
          Contact
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="aspect-[8.5/11] w-full">
          <iframe
            title="Krish Desai Resume"
            src="/resume.pdf"
            className="h-full w-full"
          />
        </div>
      </div>

      <p className="text-xs text-white/50">
        If the embedded viewer doesn’t load, use the download button above.
      </p>
    </div>
  );
}
