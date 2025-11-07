const navigation = [
  { name: "Studios", href: "#studios" },
  { name: "Experiences", href: "#experiences" },
  { name: "Creators", href: "#creators" },
  { name: "Contact", href: "#contact" }
];

export default function Header() {
  return (
    <header className="section-container flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-alture-pink via-alture-purple to-alture-indigo" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-alture-pink">Alture</p>
          <p className="text-lg font-semibold">Studio</p>
        </div>
      </div>
      <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="transition hover:text-white">
            {item.name}
          </a>
        ))}
      </nav>
      <div className="hidden md:block">
        <button className="gradient-border">
          <span className="relative z-10 block rounded-full bg-transparent px-5 py-2 text-sm font-medium uppercase tracking-widest text-white">
            Join Collective
          </span>
        </button>
      </div>
    </header>
  );
}
