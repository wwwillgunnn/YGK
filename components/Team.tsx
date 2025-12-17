import FadeInStagger from "@/components/animations/FadeInStagger";
import TeamMember from "@/components/TeamMember";

export default function Team() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 text-center">
      <header className="space-y-4 mb-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
          Meet Our Team
        </h2>
        <p className="mx-auto max-w-2xl text-base text-white/80 md:text-lg">
          A small team growing fresh produce and turning it into bold, handmade
          flavour.
        </p>
      </header>

      <FadeInStagger
        duration={1}
        delay={0.15}
        className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <TeamMember
          src="/notion-avatar-will.svg"
          alt="Avatar of Will"
          name="Will"
        />
        <TeamMember
          src="/notion-avatar-yaa.svg"
          alt="Avatar of Yaa"
          name="Yaa"
        />
        <TeamMember
          src="/notion-avatar-lester.svg"
          alt="Avatar of Lester"
          name="Lester"
        />
      </FadeInStagger>

      {/* <blockquote className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-sm text-white/80 shadow-sm backdrop-blur md:px-10 md:py-8 md:text-base">
        <p className="italic leading-relaxed">
          hands in the dirt, head in the sun, heart with nature. To nurture a
          garden is to feed not just the body, but the soul.
        </p>
      </blockquote> */}
    </section>
  );
}
