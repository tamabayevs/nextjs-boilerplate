'use client';

import { useState } from 'react';
import { Timer } from './components/Timer/Timer';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Counter } from './components/Counter/Counter';
import { useRouter } from 'next/navigation';
import { products } from './data/products';

export default function Home() {
  const router = useRouter();
  const [selectedProducts, setSelectedProducts] = useState<Record<string, number>>({});

  const handleIncrement = (productId: string) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const handleDecrement = (productId: string) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) - 1)
    }));
  };

  const handleOrder = () => {
    const hasItems = Object.values(selectedProducts).some(quantity => quantity > 0);
    if (!hasItems) {
      alert('Please select at least one item');
      return;
    }
    
    router.push(`/confirmation?items=${JSON.stringify(selectedProducts)}`);
  };

  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">Order Snacks</h1>
        <p className="text-gray-600">We bring to your car at station</p>
      </header>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onSelect={() => handleIncrement(product.id)}
          />
        ))}
      </div>

      <Timer />

      <div className="mt-6 space-y-3">
        {Object.entries(selectedProducts).map(([productId, quantity]) => {
          if (quantity === 0) return null;
          const product = products.find(p => p.id === productId);
          if (!product) return null;

          return (
            <Counter
              key={productId}
              productName={product.name}
              quantity={quantity}
              onIncrement={() => handleIncrement(productId)}
              onDecrement={() => handleDecrement(productId)}
            />
          );
        })}
      </div>

      <button
        onClick={handleOrder}
        className="w-full mt-6 rounded-lg bg-green-500 hover:bg-green-600 text-white py-3 px-4 fixed bottom-4 left-4 right-4 max-w-md mx-auto"
      >
        Order now
      </button>
    </div>
  );
}
