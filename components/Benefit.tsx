type BenefitProps = {
  title: string;
  description: string;
  Icon: any;
};

export default function Benefit({ title, description, Icon }: BenefitProps) {
  return (
    <figure data-animate className="flex flex-col gap-5 items-center">
      <Icon className="text-4xl text-white" aria-label={`${title} Icon`} />
      <figcaption>
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
