import Image from "next/image";
import FadeInStagger from "@/components/animations/FadeInStagger";

export default function Team() {
  return (
    <section className="height-[100vh] pt-20 flex flex-col gap-20 text-center">
        <h2 className="text-6xl font-bold z-10 bg-[#0a0a0a]">Meet Our Team</h2>
        <FadeInStagger duration={1} delay={0.3}>
            <figure>
                <Image src="/notion-avatar-will.svg" alt="Will" width={350} height={400} />
                <figcaption>
                    <p className="lg:text-xl">Will</p>
                </figcaption>
            </figure>

            <figure>
                <Image src="/notion-avatar-yaa.svg" alt="Will" width={350} height={400} />
                <figcaption>
                    <p className="lg:text-xl">Yaa</p>
                </figcaption>
            </figure>

            <figure>
                <Image src="/notion-avatar-lester.svg" alt="Will" width={350} height={400} />
                <figcaption>
                    <p className="lg:text-xl">Lester</p>
                </figcaption>
            </figure>
        </FadeInStagger>
        <blockquote className="text-base mx-5">
            hands in the dirt, head in the sun, heart with nature. To nurture a garden is to feed not just the body, but the soul.
        </blockquote>
    </section>
  )
}
