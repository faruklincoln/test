import CreatorSpotlight from "@/components/CreatorSpotlight";
import EntertainmentGrid from "@/components/EntertainmentGrid";
import ExperienceTabs from "@/components/ExperienceTabs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-alture-gradient opacity-40 blur-3xl" />
      <Header />
      <Hero />
      <ExperienceTabs />
      <EntertainmentGrid />
      <CreatorSpotlight />
      <Footer />
    </main>
  );
}
