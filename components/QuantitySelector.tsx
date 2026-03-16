import { Button } from "./ui/button";

type Props = {
  quantity: number;
  setQuantity: (n: number) => void;
  stock: number;
};

export default function QuantitySelector({
  quantity,
  setQuantity,
  stock,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>

      <span>{quantity}</span>

      <Button onClick={() => setQuantity(Math.min(stock, quantity + 1))}>
        +
      </Button>
    </div>
  );
}
