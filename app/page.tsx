import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pb-20 gap-[160px] font-[family-name:var(--font-geist-sans)] z-0 top-0">
      <Hero />
      <Feature />
      <Ingredients />
      <Team />
      <Contact />
    </main>
  );
}
