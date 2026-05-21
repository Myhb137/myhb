export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-12">

        {/* LEFT: IMAGE */}
        <div className="md:col-span-5">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-surface/30">

            <img
              src="/src/public/myhb.png"
              alt="Yahia profile"
              className="w-full h-full object-cover"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          </div>

          <div className="mt-4 font-mono text-xs text-muted-foreground">
            Mathematics · Data Science · Optimization · AI Systems
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div className="md:col-span-7 grid md:grid-cols-12 gap-10">

          {/* LABEL */}
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sticky top-24">
              01 — About
            </div>
          </div>

          {/* CONTENT */}
          <div className="md:col-span-8 space-y-8">

            <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
              I treat data as a system. I shape it with mathematics, optimize it
              with models, and ship it as tools that make decisions clearer.
            </p>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                My background is mathematics — linear algebra, optimization, and
                probability. I apply it to real systems: forecasting, AI assistants,
                and data-driven products.
              </p>

              <p>
                I work across Python, machine learning, and web interfaces. From
                data → model → product, I focus on building systems that actually
                solve problems, not just notebooks.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}