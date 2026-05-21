export function Nav() {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Stack" },
    { href: "#github", label: "GitHub" },
  
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="https://github.com/Myhb137" target="blank" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="inline-block w-2 h-2 rounded-full bg-signal animate-pulse" />
          <span className="font-semibold">mohamed yahia benaissa</span>
          <span className="text-muted-foreground">/MYHB137</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-border hover:border-signal hover:text-signal transition-colors"
        >
          contact
        </a>
      </div>
    </header>
  );
}
