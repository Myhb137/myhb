export function Github() {
  // Subtle deterministic contribution grid
  const cells = Array.from({ length: 7 * 26 }, (_, i) => {
    const v = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    const lvl = Math.floor(Math.abs(v) * 5); // 0..4
    return lvl;
  });
  const levels = [
    "bg-surface",
    "bg-signal/20",
    "bg-signal/40",
    "bg-signal/70",
    "bg-signal",
  ];

  return (
    <section id="github" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              04 — GitHub
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Code in the open.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl">
              Notebooks, experiments, and shipped projects — everything lives on GitHub. Pull requests welcome.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/myhb137"
          target="_blank"
          rel="noreferrer"
          className="block group rounded-2xl border border-border bg-surface/50 p-8 md:p-10 hover:border-signal transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-foreground" aria-hidden>
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.7 2.6 4.1 1.9.1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-sm text-muted-foreground">github.com/</div>
                <div className="font-display text-3xl md:text-4xl tracking-tight">myhb137</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-signal">
              Visit profile
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>

          <div className="mt-10 overflow-hidden">
            <div className="grid grid-rows-7 grid-flow-col gap-[3px] w-max">
              {cells.map((lvl, i) => (
                <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${levels[lvl]}`} />
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
              <span>less</span>
              {levels.map((l, i) => <div key={i} className={`w-2.5 h-2.5 rounded-[2px] ${l}`} />)}
              <span>more</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
