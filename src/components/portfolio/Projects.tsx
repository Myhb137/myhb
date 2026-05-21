const projects = [
  {
    n: "01",
    name: "Tourism ML Forecasting",
    tag: "Machine Learning · Forecasting",
    year: "2025",
    problem:
      "Tourism operator decisions were based on intuition, leading to inefficient marketing spend and unstable revenue planning.",
    built:
      "End-to-end ML pipeline forecasting revenue, bookings, and marketing efficiency using engineered temporal and campaign features. Applied gradient boosting models and SHAP for interpretability.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP"],
    impact:
      "Reduced prediction error (MAPE -12%) and identified inefficient ad channels responsible for ~30% of spend.",
  },

  {
    n: "02",
    name: "Wejha — AI Discovery Assistant",
    tag: "AI System · Full-Stack",
    year: "2026",
    problem:
      "Users struggle to plan outings due to fragmented information across maps, reviews, and blogs.",
    built:
      "AI-powered assistant that recommends places and generates itineraries using structured data and LLM-based conversational interface.",
    tech: ["React", "TypeScript", "Tailwind", "gemini"],
    impact:
      "Built full product loop: data layer, AI reasoning system, and conversational UX.",
  },

  {
    n: "03",
    name: "Bouraq — Travel Agency Dashboard",
    tag: "Full-Stack · Admin System",
    year: "2026",
    problem:
      "Travel agencies lacked a structured system to manage and publish offers efficiently.",
    built:
      "Admin dashboard for managing travel offers with a focus on usability and operational efficiency.",
    tech: ["React", "Dashboard Design", "UI/UX"],
    impact:
      "Improved offer management workflow and reduced manual operations complexity.",
  },

  {
    n: "04",
    name: "Trips Fi Bladi",
    tag: "UI/UX Design System",
    year: "2024",
    problem:
      "Need for a modern, local-first tourism identity avoiding generic travel platform design patterns.",
    built:
      "Complete UI/UX system including user flows, wireframes, and high-fidelity prototypes in Figma.",
    tech: ["Figma", "UX Research", "Design Systems"],
    impact:
      "Delivered production-ready design system used for MVP development.",
  },

  {
    n: "05",
    name: "Gradient Descent Engine",
    tag: "Optimization · Mathematics",
    year: "2025",
    problem:
      "Understanding optimization behavior in machine learning from first principles.",
    built:
      "Implemented gradient descent from scratch to study convergence, learning rates, and cost minimization behavior.",
    tech: ["Python", "NumPy", "Mathematical Optimization"],
    impact:
      "Strengthened understanding of optimization theory and ML training dynamics.",
  },

  {
    n: "06",
    name: "Analytics Dashboards",
    tag: "Data Analysis · Tableau",
    year: "2025",
    problem:
      "Business teams relied on slow, fragmented spreadsheet reporting.",
    built:
      "Automated data pipelines using Pandas and SQL with KPI computation and dashboard visualization.",
    tech: ["Python", "Pandas", "SQL", "Plotly", "Streamlit"],
    impact:
      "Reduced reporting time from hours to minutes through automation.",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Projects built at the intersection of
              <span className="text-muted-foreground">
                {" "}math, data, and systems.
              </span>
            </h2>
          </div>
        </div>

        {/* PROJECT LIST */}
        <div className="divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <article
              key={p.n}
              className="group grid md:grid-cols-12 gap-6 py-12 hover:bg-surface/40 transition-colors px-2 -mx-2"
            >

              {/* LEFT */}
              <div className="md:col-span-2">
                <div className="font-mono text-xs text-muted-foreground">
                  {p.n}
                </div>
                <div className="font-mono text-xs text-muted-foreground mt-1">
                  {p.year}
                </div>
              </div>

              {/* CENTER */}
              <div className="md:col-span-4">
                <div className="font-mono text-xs uppercase tracking-widest text-signal mb-3">
                  {p.tag}
                </div>

                <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
                  {p.name}
                </h3>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="md:col-span-6 space-y-5 text-sm md:text-[15px] leading-relaxed">

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    Problem
                  </div>
                  <p className="text-foreground/85">{p.problem}</p>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    What I built
                  </div>
                  <p className="text-foreground/85">{p.built}</p>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    Outcome
                  </div>
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