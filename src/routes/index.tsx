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
        { title: "MYHB | Data Science Portfolio" },

    {
    name: "description",
    content:
      "Mathematics student building machine learning projects, AI systems, and data-driven web apps.",
     },

  { name: "author", content: "MYHB" },

  // social sharing
  { property: "og:title", content: "MYHB Portfolio" },
  {
    property: "og:description",
    content: "AI, ML, optimization, and data science projects.",
  },
  { property: "og:type", content: "website" },
],,
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/src/assets/artificial-intelligence.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/src/assets/artificial-intelligence.png",
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