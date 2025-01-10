import FadeInStagger from "@/components/animations/FadeInStagger";
import TeamMember from "@/components/TeamMember";

export default function Team() {
  return (
    <section className="height-[100vh] pt-20 flex flex-col gap-20 text-center mx-10">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold z-10 bg-[#0a0a0a]">Meet Our Team</h2>
        <FadeInStagger duration={1} delay={0.3}>
            <TeamMember src="/notion-avatar-will.svg" alt="Avatar of Will" name="Will" />
            <TeamMember src="/notion-avatar-yaa.svg" alt="Avatar of Yaa" name="Yaa" />
            <TeamMember src="/notion-avatar-lester.svg" alt="Avatar of Lester" name="Lester" />
        </FadeInStagger>
        <blockquote className="text-base mx-5">
            hands in the dirt, head in the sun, heart with nature. To nurture a garden is to feed not just the body, but the soul.
        </blockquote>
    </section>
  )
}
