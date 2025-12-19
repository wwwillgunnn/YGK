import Image from "next/image";

type TeamMemberProps = {
  src: string;
  alt: string;
  name: string;
};

export default function TeamMember({ src, alt }: TeamMemberProps) {
  return (
    <figure className="group flex flex-col items-center gap-4">
      <Image
        src={src}
        alt={alt}
        width={320}
        height={360}
        className="h-auto w-[260px] object-cover sm:w-[280px] md:w-[300px] transition ease-in-out group-hover:-translate-y-1"
      />

      <figcaption className="text-center">
        {/* <p className="text-lg font-semibold tracking-tight md:text-xl">
          {name}
        </p> */}
      </figcaption>
    </figure>
  );
}
