export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sticky top-24">
            01 — About
          </div>
        </div>
        <div className="md:col-span-8 space-y-8">
          <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
            I treat data as a material. I shape it with mathematics, sharpen it
            with models, and ship it as products people actually use.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              My background is pure mathematics — proofs, linear algebra,
              optimization. My practice is applied: forecasting tourism revenue,
              building AI assistants for travelers, and turning Pandas notebooks
              into dashboards executives read on Monday morning.
            </p>
            <p>
              I'm equally at home in a Jupyter notebook and a React codebase.
              That short loop — from hypothesis to model to UI — is where I do
              my best work, and where most products break.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
