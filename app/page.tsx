import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import OtherProducts from "@/components/OtherProducts";
import Team from "@/components/Team";
import SplashGate from "@/components/SplashGate";

export default function Home() {
  return (
    <SplashGate durationMs={1200}>
      <main
        className="flex flex-col items-center gap-32 m-auto pt-0 p-20 top-0 z-0 
        bg-[linear-gradient(to_bottom,_#569255_0%,_#6DB86B_10%,_#569255_30%,_#305230_85%,_#422323_100%)]"
      >
        <Hero />
        <Feature />
        <Ingredients />
        <OtherProducts />
        <Team />
        <Contact />
        <Footer />
      </main>
    </SplashGate>
  );
}
