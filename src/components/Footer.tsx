export default function Footer() {
  return (
    <footer id="contact" className="section-container flex flex-col gap-6 border-t border-white/10 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Alture Studio. Crafted in Lagos, broadcasting to the world.</p>
      <div className="flex gap-6">
        <a href="mailto:hello@alture.studio" className="hover:text-white">
          hello@alture.studio
        </a>
        <a href="https://instagram.com" className="hover:text-white">
          Instagram
        </a>
        <a href="https://youtube.com" className="hover:text-white">
          YouTube
        </a>
      </div>
    </footer>
  );
}
