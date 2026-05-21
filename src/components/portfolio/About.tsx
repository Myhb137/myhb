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
  I work with data to understand problems, build models, and turn them into
  simple, usable tools.
</p>

<div className="space-y-6 text-muted-foreground leading-relaxed">
  <p>
    I’m studying mathematics, with focus on linear algebra, optimization, and
    probability. I use it to work on forecasting, AI tools, and data-driven
    projects.
  </p>

  <p>
    I work with Python, machine learning, and web development. I like moving
    from data to model to product in a way that stays practical and clear.
  </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}