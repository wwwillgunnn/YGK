type ButtonProps = {
  variant: 'outline' | 'solid';
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ variant, children, onClick }: ButtonProps) {
  const baseStyles = 'px-10 py-5 rounded-md font-semibold text-lg transition-all';
  const outlineStyles = 'border border-white text-white bg-transparent hover:bg-white hover:text-green-800';
  const solidStyles = 'bg-[#1E1E1E] text-white hover:bg-gray-800 z-10';

  const styles = `${baseStyles} ${variant === 'outline' ? outlineStyles : solidStyles}`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
