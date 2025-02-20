interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  onSelect: () => void;
}

export const ProductCard = ({ id, name, image, onSelect }: ProductCardProps) => {
  return (
    <button
      onClick={onSelect}
      className="relative aspect-square w-full rounded-lg border border-gray-200 p-2 flex flex-col items-center justify-center gap-2"
    >
      <span className="text-4xl">{image}</span>
      <span className="text-sm">{name}</span>
    </button>
  );
}; 