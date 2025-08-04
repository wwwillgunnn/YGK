import FadeInStagger from "@/components/animations/FadeInStagger";
import TeamMember from "@/components/TeamMember";

export default function Team() {
  return (
    <section className="min-height-[100vh] py-20 flex flex-col gap-20 text-center mx-10">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">Meet Our Team</h1>
        <FadeInStagger duration={1} delay={0.3}>
            <TeamMember src="/notion-avatar-will.svg" alt="Avatar of Will" name="Will" />
            <TeamMember src="/notion-avatar-yaa.svg" alt="Avatar of Yaa" name="Yaa" />
            <TeamMember src="/notion-avatar-lester.svg" alt="Avatar of Lester" name="Lester" />
        </FadeInStagger>
        <blockquote className="text-sm mx-5">
            <i>hands in the dirt, head in the sun, heart with nature. To nurture a garden is to feed not just the body, but the soul.</i>
        </blockquote>
    </section>
  )
}
