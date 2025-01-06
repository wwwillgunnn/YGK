import Link from "next/link";

type ButtonProps = {
  variant: 'outline' | 'solid';
  children: React.ReactNode;
  onClick?: () => void;
  link?: string; // Add link prop for navigation
};

export default function Button({ variant, children, onClick, link }: ButtonProps) {
  const baseStyles = 'px-10 py-5 rounded-md text-lg transition-all';
  const outlineStyles = 'border border-white text-white bg-transparent hover:bg-white hover:text-green-800';
  const solidStyles = 'bg-[#1E1E1E] text-white hover:bg-gray-800 z-10';

  const styles = `${baseStyles} ${variant === 'outline' ? outlineStyles : solidStyles}`;

  // If a link is provided, wrap the button with Link component
  if (link) {
    return (
      <Link href={link}>
          <button className={styles}>
            {children}
          </button>
      </Link>
    );
  }

  // If no link is provided, just render the button with onClick functionality
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
