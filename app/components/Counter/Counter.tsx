interface CounterProps {
  productName: string;
  quantity: number;
  price: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter = ({ productName, quantity, price, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="flex-1">
        <div>{productName}</div>
        <div className="text-sm text-gray-500">${price}</div>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={onDecrement}
          className="rounded-lg px-3 py-1 border"
        >
          -
        </button>
        <span className="min-w-[60px] text-center">
          {quantity}
        </span>
        <button 
          onClick={onIncrement}
          className="rounded-lg px-3 py-1 border"
        >
          +
        </button>
      </div>
    </div>
  );
}; 