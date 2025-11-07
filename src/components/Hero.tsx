import Image from "next/image";

const featuredImages = [
  { src: "/images/Kano.jpg", alt: "Kano nightlife" },
  { src: "/images/Yobe.jpg", alt: "Yobe cultural festival" },
  { src: "/images/International.jpg", alt: "International stage" }
];

export default function Hero() {
  return (
    <section className="section-container grid gap-8 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div className="space-y-8">
        <p className="text-sm uppercase tracking-[0.5em] text-alture-pink">African Entertainment Collective</p>
        <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
          Immersive stories and stages shaped by African creativity.
        </h1>
        <p className="max-w-xl text-base text-white/70 sm:text-lg">
          Alture Studio brings together filmmakers, musicians, and digital artists from across the continent to craft
          unforgettable experiences. From holographic concerts in Lagos to film residencies in Kigali, we bridge
          technology and tradition for a new era of African entertainment.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#050817]">
            Explore Experiences
          </button>
          <button className="gradient-border">
            <span className="relative z-10 block rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white">
              Meet the Collective
            </span>
          </button>
        </div>
        <div className="flex items-center gap-6 pt-4 text-sm text-white/60">
          <div>
            <p className="text-2xl font-semibold text-white">120+</p>
            <p>Artists empowered</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">35</p>
            <p>Hybrid stages</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">15</p>
            <p>Countries represented</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {featuredImages.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
