import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Github } from "@/components/portfolio/Github";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,

  // 👇 this is what makes loading actually visible
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {};
  },

  pendingComponent: () => (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
    </div>
  ),

  head: () => ({
    meta: [
      { title: "MYHB" },
      {
        name: "description",
        content:
          "mohamed yahia benaissa (myhb137) — Mathematics student building ML systems, forecasting models, and AI-powered web apps.",
      },
      { property: "og:title", content: "MYHB — Data Science Portfolio" },
      {
        property: "og:description",
        content:
          "Forecasting, ML, optimization, and AI web apps by a Mathematics student.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "./artificial-intelligence.png",
      },
      {
        rel: "apple-touch-icon",
        href: "./artificial-intelligence.png",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Github />
      <Contact />
    </main>
  );
}