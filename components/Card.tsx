import Link from "next/link";
import Image from "next/image";

type CardProps = {
  name: string;
  link: string;
  images: [string, string, string, string];
};

export default function Card({ name, link, images }: CardProps) {
  const cardSize = "w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 2xl:w-96";

  return (
    <div className="p-4 lg:p-6">
      <Link href={link}>
        <div className="relative cursor-pointer group">
          {/* Main card */}
          <div
            className={`${cardSize} aspect-[3/4] border border-white/5 rounded-md relative z-10 overflow-hidden`}
          >
            <Image
              src={images[0]}
              alt={`${name} image 1`}
              fill
              className="object-cover"
            />
          </div>

          {/* Layer 2 */}
          <div
            className={`${cardSize} aspect-[3/4] border border-white/5 rounded-md absolute top-0 left-0 transition-transform duration-300 
            group-hover:translate-x-12 group-hover:-translate-y-2 group-hover:rotate-[10deg]
            z-0 overflow-hidden`}
          >
            <Image
              src={images[1]}
              alt={`${name} image 2`}
              fill
              className="object-cover"
            />
          </div>

          {/* Layer 3 */}
          <div
            className={`${cardSize} aspect-[3/4] border border-white/5 rounded-md absolute top-0 left-0 transition-transform duration-300 
            group-hover:-translate-x-12 group-hover:-translate-y-2 group-hover:-rotate-[10deg]
            z-0 overflow-hidden`}
          >
            <Image
              src={images[2]}
              alt={`${name} image 3`}
              fill
              className="object-cover"
            />
          </div>

          {/* Layer 4 */}
          <div
            className={`${cardSize} aspect-[3/4] border border-white/5 rounded-md absolute top-0 left-0 transition-transform duration-300 
            group-hover:-translate-x-6 group-hover:-translate-y-10 group-hover:-rotate-[5deg]
            z-0 overflow-hidden`}
          >
            <Image
              src={images[3]}
              alt={`${name} image 4`}
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-3 text-center text-lg sm:text-xl md:text-2xl font-bold">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}
