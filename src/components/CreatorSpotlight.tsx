import Image from "next/image";

const creators = [
  {
    name: "Zainab Okoye",
    role: "Immersive storyteller",
    quote:
      "Alture gave me the sandbox to merge folklore from Enugu with volumetric capture. Our audience stepped inside the myth.",
    image: "/images/Gombe.jpg"
  },
  {
    name: "Kwame Mensah",
    role: "Music director",
    quote:
      "We turned jam sessions in Accra into holographic performances streamed to rooftops in Johannesburg and Nairobi.",
    image: "/images/Sokoto.jpg"
  },
  {
    name: "Fatou Diarra",
    role: "XR choreographer",
    quote:
      "From Bamako dance rituals to AR stages in Paris, the collective keeps African movement at the center of innovation.",
    image: "/images/Nasarawa.jpg"
  }
];

export default function CreatorSpotlight() {
  return (
    <section id="creators" className="section-container space-y-12 py-16">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-alture-pink">Creators</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">Stories powered by people who remix the future.</h2>
        <p className="text-sm text-white/65">
          The Alture collective spans producers, animators, poets, and experience designers shaping entertainment rooted in
          African cities.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {creators.map((creator) => (
          <article key={creator.name} className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/20">
                <Image src={creator.image} alt={creator.name} fill className="object-cover" sizes="64px" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{creator.name}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-alture-pink">{creator.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">“{creator.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
