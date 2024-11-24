// TODO: have members fade in one at a time from bottom to top

import Image from "next/image";

export default function Team() {
  return (
    <section className="height-[100vh] pt-20 flex flex-col gap-20 text-center">
        <h2 className="lg:text-6xl z-10 bg-[#0a0a0a]">Meet Our Team</h2>
        <div className="flex flex-row gap-20">
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
        </div>
        <blockquote>
            hands in the dirt, head in the sun, heart with nature. To nurture a garden is to feed not just the body, but the soul.
            <br />– Alfred Austin
        </blockquote>
    </section>
  )
}
