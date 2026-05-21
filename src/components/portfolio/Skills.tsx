const groups = [
  {
    title: "Data Science & ML",
    items: ["Regression & Forecasting", "Classification / Clustering", "Feature Engineering", "Model Evaluation", "XGBoost"],
  },
  {
    title: "Math & Optimization",
    items: ["Linear Algebra", "Probability & Statistics", "Convex Optimization", "Linear Programming", "Operations Research", "Numerical Methods"],
  },
  {
    title: "Tooling",
    items: ["Python · Pandas · NumPy", "Scikit-learn", "FastAPI", "Tableau", "Git"],
  },
  {
    title: "Web & Product",
    items: ["React · Tailwind CSS", "Firebase", "Figma · UI/UX", "Framer Motion"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              02 — Stack
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              The tools I reach for —
              <span className="text-muted-foreground"> picked for the problem, not the resume.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {groups.map((g) => (
            <div key={g.title} className="bg-background p-7 hover:bg-surface transition-colors">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <h3 className="font-mono text-xs uppercase tracking-widest">{g.title}</h3>
              </div>
              <ul className="space-y-2.5 text-sm">
                {g.items.map((i) => (
                  <li key={i} className="text-foreground/85">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
