export function Marquee() {
  const items = [
    "Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "SQL",
    "TensorFlow", "XGBoost", "Optimization", "React", "TypeScript", "Tailwind",
    "FastAPI", "Streamlit", "Power BI", "Figma",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-border bg-surface/40 overflow-hidden">
      <div className="marquee flex gap-12 py-5 whitespace-nowrap font-mono text-sm text-muted-foreground">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-foreground/80">{it}</span>
            <span className="text-signal">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
