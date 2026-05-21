export function Contact() {
  return (
    <section id="contact" className="relative py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              05 — Contact
            </div>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tight">
              Have a problem
              <br />
              worth <em className="text-signal not-italic">modeling</em>?
            </h2>
            <p className="mt-8 text-muted-foreground max-w-xl text-lg">
              I'm open to Data Scientist, ML Engineer, and Analyst roles —
              full-time, internships, or focused freelance engagements.
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <a
              href="mailto:mohamedyahiabenaissa@gmail.com"
              className="block group rounded-xl border border-border p-5 hover:border-signal transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="mt-1 text-lg">mohamedyahiabenaissa@gmail.com</div>
            </a>
            <a
              href="https://github.com/myhb137"
              target="_blank"
              rel="noreferrer"
              className="block group rounded-xl border border-border p-5 hover:border-signal transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">GitHub</div>
              <div className="mt-1 text-lg">@myhb137</div>
            </a>
            <a
              href="https://www.linkedin.com/in/myhb137/"
              target="_blank"
              rel="noreferrer"
              className="block group rounded-xl border border-border p-5 hover:border-signal transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">LinkedIn</div>
              <div className="mt-1 text-lg">Mohamed Yahia Benaissa</div>
            </a>
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-signal" />
            mhb/lab · © {new Date().getFullYear()}
          </div>
          <div>Built with React · Tailwind · too much coffee</div>
        </footer>
      </div>
    </section>
  );
}
