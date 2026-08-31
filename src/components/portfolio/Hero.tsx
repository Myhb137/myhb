export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-0 noise" aria-hidden />

      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-signal), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">

        {/* TOP LABEL */}
        <div className="reveal flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-10">
          <span className="h-px w-10 bg-border" />
          Mathematics · Data Science · Optimization · AI Systems
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="reveal font-display text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-tight">
          Building systems from
          <br />
          <em className="text-signal not-italic">mathematics</em>
          <br />
          to production AI tools.
        </h1>

        {/* DESCRIPTION + CTA */}
        <div className="reveal mt-14 grid md:grid-cols-12 gap-8 items-end">

          <p className="md:col-span-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            I'm{" "}
            <span className="text-foreground font-medium">
              Mohamed Yahia
            </span>
            , a Mathematics student focused on data-driven systems,
            machine learning, and optimization. I build ML models, AI
            assistants, and analytics tools that turn data into decisions.
          </p>

          <div className="md:col-span-6 md:justify-self-end flex flex-col items-start md:items-end gap-4">

            <div className="flex gap-3 flex-wrap">

              {/* PROJECTS */}
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-signal text-primary-foreground px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                View projects
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Myhb137"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-full text-sm font-medium hover:border-foreground transition"
              >
                GitHub
                <span>↗</span>
              </a>

              {/* CONTACT */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-full text-sm font-medium hover:border-foreground transition"
              >
                Contact
              </a>

            </div>

            <div className="font-mono text-xs text-muted-foreground">
              Open to internships · Data Science · ML Engineer · Analyst roles
            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="reveal mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">

          {[
            ["20K+", "Data points"],
            ["99.25%", "R² achieved"],
            ["XGBoost", "Primary ML stack"],
            ["Mathematics", "Foundation"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl md:text-4xl">
                {n}
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                {l}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
