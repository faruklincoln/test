const tabs = [
  {
    name: "Immersive Concerts",
    description:
      "Hybrid shows that blend augmented reality with live performance, spotlighting Afrobeats, Amapiano, and highlife stars.",
    stats: "12-city tour in 2024"
  },
  {
    name: "Cinematic Residencies",
    description:
      "Story labs across Dakar, Kigali, and Nairobi pairing directors with technologists to develop Afro-futurist narratives.",
    stats: "45 films in development"
  },
  {
    name: "Interactive Galleries",
    description:
      "Projection-mapped installations celebrating African myths with motion capture, poetry, and digital sculpture.",
    stats: "9 traveling exhibits"
  }
];

export default function ExperienceTabs() {
  return (
    <section id="experiences" className="section-container space-y-10 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-alture-pink">Experiences</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Curated for rhythm, story, and spectacle.</h2>
        </div>
        <p className="max-w-xl text-sm text-white/65">
          Each Alture experience is co-produced with local communities to champion African entertainment in all its forms,
          from rooftop DJ battles in Accra to pop-up cinemas in Enugu.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tabs.map((tab) => (
          <article key={tab.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <h3 className="text-xl font-semibold text-white">{tab.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{tab.description}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.4em] text-alture-pink">{tab.stats}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
