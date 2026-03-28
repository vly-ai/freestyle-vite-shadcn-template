import { Button } from "@/components/ui/button";

const featureCards = [
  {
    title: "Frontend only",
    description: "Start with a plain Vite app and add routing, data, and backend choices only when they are real requirements.",
  },
  {
    title: "shadcn ready",
    description: "A small shadcn base is already wired in, so you can add more components without rebuilding the setup.",
  },
  {
    title: "Hosted preview friendly",
    description: "The Vite config is prepared for hosted preview domains under style.dev and decaspeed.dev.",
  },
];

const nextSteps = [
  "Replace this placeholder with your actual product landing page or app shell.",
  "Add more shadcn components as the interface takes shape.",
  "Introduce routing or API clients only when the product actually needs them.",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.92),_transparent_42%),linear-gradient(180deg,_#f8f0e6_0%,_#f4efe8_38%,_#eef1eb_100%)] text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-border/70 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Freestyle Template
            </p>
            <h1 className="text-2xl font-semibold tracking-[-0.03em]">
              Vite + React + shadcn
            </h1>
          </div>
          <div className="rounded-full border border-border/80 bg-white/70 px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            Placeholder landing page
          </div>
        </header>

        <main className="grid flex-1 gap-8 py-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.9fr)] lg:items-start">
          <section className="space-y-8 rounded-[2rem] border border-border/70 bg-white/80 p-8 shadow-[0_30px_120px_rgba(84,62,36,0.08)] backdrop-blur">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                Ship the first screen first
              </p>
              <div className="space-y-4">
                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  A simple frontend starter for teams that do not want framework decisions made too early.
                </h2>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  This template keeps the stack narrow: Vite, React, Tailwind, and shadcn. No router, no backend client,
                  no auth assumptions. Use it for landing pages, internal tools, or as the thinnest possible base for a
                  new product.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
                  Open Vite Docs
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">
                  Open shadcn Docs
                </a>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-border/70 bg-background/80 p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold tracking-[-0.01em]">{card.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-border/70 bg-[#1f3128] p-6 text-[#f6f2ea] shadow-[0_30px_120px_rgba(31,49,40,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b6cabf]">
                Included stack
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#e6ddcf]">
                <li>React 19 + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui foundations</li>
                <li>Hosted preview allowlists for Vite</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-white/75 p-6 shadow-[0_20px_80px_rgba(84,62,36,0.08)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Suggested next steps
              </p>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {nextSteps.map((step, index) => (
                  <li key={step}>
                    <span className="font-semibold text-foreground">{index + 1}.</span> {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
