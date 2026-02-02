export const metadata = {
  title: "Contact | Krish Desai",
  description: "Contact information for Krish Desai.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="max-w-2xl text-sm text-white/70">
          Best way to reach me is email.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-1">
        <a
          href="mailto:iamkrishdesai@gmail.com"
          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <p className="text-xs uppercase tracking-wider text-white/50">Email</p>
          <p className="mt-2 text-sm font-medium">iamkrishdesai@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/krish-desai-890582258/"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <p className="text-xs uppercase tracking-wider text-white/50">LinkedIn</p>
          <p className="mt-2 text-sm font-medium">https://www.linkedin.com/in/krish-desai-890582258/</p>
        </a>

        <a
          href="https://github.com/kdesai23"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <p className="text-xs uppercase tracking-wider text-white/50">GitHub</p>
          <p className="mt-2 text-sm font-medium">https://github.com/kdesai23</p>
        </a>
      </div>
    </div>
  );
}
