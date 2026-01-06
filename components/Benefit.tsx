import type { IconType } from "react-icons";

type BenefitProps = {
  title: string;
  description: string;
  Icon: IconType;
};

export default function Benefit({ title, description, Icon }: BenefitProps) {
  return (
    <figure data-animate className="flex flex-col gap-5 items-center">
      <Icon className="text-4xl text-white" aria-label={`${title} Icon`} />
      <figcaption>
        <p className="text-base md:text-lg lg:text-xl font-bold">{title}</p>
        <p className="text-sm md:text-base lg:text-lg">{description}</p>
      </figcaption>
    </figure>
  );
}
