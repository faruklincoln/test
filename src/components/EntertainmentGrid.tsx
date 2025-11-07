import Image from "next/image";

type EntertainmentItem = {
  title: string;
  description: string;
  image: string;
};

const entertainment: EntertainmentItem[] = [
  {
    title: "Nollywood Nights",
    description: "Red carpet pop-up theatre celebrating Nigerian film icons with live scoring orchestras.",
    image: "/images/Kaduna.jpg"
  },
  {
    title: "Sahara Soundclash",
    description: "Desert rave in Agadez mixing Tuareg guitar legends with Afro-house DJs under starlit skies.",
    image: "/images/Niger.jpg"
  },
  {
    title: "Accra Street Cypher",
    description: "Block party showcasing Ghanaian hip-hop collectives, graffiti artists, and fashion visionaries.",
    image: "/images/Bauchi.jpg"
  },
  {
    title: "Lagos Neon Carnival",
    description: "Immersive parade with augmented reality floats spotlighting Afrofuturist designers and dancers.",
    image: "/images/Adamawa.jpg"
  }
];

export default function EntertainmentGrid() {
  return (
    <section id="studios" className="section-container space-y-10 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-alture-pink">Entertainment</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Random African experiences from the Alture archive.</h2>
        </div>
        <p className="max-w-xl text-sm text-white/65">
          Discover playlists of inspiration from across the continent—each production is a love letter to cities, sounds,
          and storytellers that define African entertainment culture today.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {entertainment.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="relative aspect-[4/3]">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
