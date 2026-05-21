export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-0 noise" aria-hidden />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-signal), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="reveal flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-10">
          <span className="h-px w-10 bg-border" />
          Mathematics · Data Science · Machine Learning
        </div>

        <h1 className="reveal font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-tight">
          Turning <em className="text-signal not-italic">messy data</em>
          <br />
          into decisions <br className="hidden md:block" />
          that <span className="italic">move</span> the metric.
        </h1>

        <div className="reveal mt-14 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            I'm <span className="text-foreground font-medium">Hamza</span> — a Mathematics
            student building ML systems, optimization models, and the web apps that ship them.
            Currently designing data products for tourism, travel, and discovery.
          </p>

          <div className="md:col-span-6 md:justify-self-end flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-signal text-primary-foreground px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                See selected work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-full text-sm font-medium hover:border-foreground transition"
              >
                Get in touch
              </a>
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              Open to: Data Scientist · ML Engineer · Analyst roles
            </div>
          </div>
        </div>

        <div className="reveal mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
          {[
            ["04", "Shipped projects"],
            ["3+ yrs", "Python / ML"],
            ["1st", "Mathematics, B.Sc."],
            ["∞", "Curiosity"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl md:text-4xl">{n}</div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
