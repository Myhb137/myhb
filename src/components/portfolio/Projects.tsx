const projects = [
  {
    n: "01",
    name: "Tourism ML Forecasting",
    tag: "Machine Learning · Forecasting",
    year: "2025",
    problem:
      "A tourism operator was making revenue, booking, and ad-spend decisions on gut feel — burning marketing budget on channels with diminishing returns.",
    built:
      "End-to-end ML pipeline forecasting monthly revenue, bookings, and marketing efficiency. Feature engineering on seasonality, macro signals, and campaign data; gradient-boosted ensemble; SHAP explainers wired into a stakeholder dashboard.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP", "Streamlit"],
    impact:
      "12% lower MAPE vs. previous baseline · identified two underperforming ad channels accounting for ~30% of spend",
  },
  {
    n: "02",
    name: "Wejha — AI Discovery Assistant",
    tag: "AI Web App · Full-Stack",
    year: "2025",
    problem:
      "Travelers waste hours stitching together blog posts, maps, and reviews to plan a single afternoon out.",
    built:
      "An AI assistant web app that recommends places conversationally — combining a curated places dataset, retrieval, and an LLM to answer 'where should I go tonight in Rabat?' with reasoning and itineraries.",
    tech: ["React", "TypeScript", "Tailwind", "OpenAI", "Supabase", "Vector Search"],
    impact:
      "Designed and shipped the full product loop — data model, retrieval layer, conversational UI, and onboarding.",
  },
  {
    n: "03",
    name: "Trips Fi Bladi & Bouraq",
    tag: "UI/UX Design",
    year: "2024",
    problem:
      "Two travel products needed identities that felt local and modern — without falling into either tourist-cliché or generic SaaS.",
    built:
      "Brand systems, app flows, and high-fidelity UI for both products. Wireframes → prototypes → component libraries in Figma. Worked alongside engineers to keep design and implementation in sync.",
    tech: ["Figma", "Design Systems", "Prototyping", "User Research"],
    impact:
      "Delivered handoff-ready design systems used by the dev teams to ship MVPs.",
  },
  {
    n: "04",
    name: "Analytics Dashboards in Python",
    tag: "Data Analysis · BI",
    year: "2024",
    problem:
      "Operations teams were drowning in spreadsheets — no single view of KPIs, no way to slice by region or period.",
    built:
      "Reproducible analytics pipelines in Pandas with automated cleaning, joins, and KPI computation. Output published to interactive dashboards for non-technical stakeholders.",
    tech: ["Python", "Pandas", "NumPy", "Plotly", "Streamlit", "SQL"],
    impact:
      "Cut weekly reporting time from ~6 hours to under 15 minutes.",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              03 — Selected Work
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Four projects.
              <span className="text-muted-foreground"> One throughline: numbers that change a decision.</span>
            </h2>
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <article key={p.n} className="group grid md:grid-cols-12 gap-6 py-12 hover:bg-surface/40 transition-colors px-2 -mx-2">
              <div className="md:col-span-2">
                <div className="font-mono text-xs text-muted-foreground">{p.n}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{p.year}</div>
              </div>

              <div className="md:col-span-4">
                <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">{p.tag}</div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">{p.name}</h3>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-6 space-y-5 text-sm md:text-[15px] leading-relaxed">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Problem</div>
                  <p className="text-foreground/85">{p.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">What I built</div>
                  <p className="text-foreground/85">{p.built}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Outcome</div>
                  <p className="text-signal">{p.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
