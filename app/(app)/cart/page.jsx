"use client";

import { useStore } from "@/app/zustand/store";

import ItemCard from "@/app/_components/ItemCard";

const Cart = () => {
  const { products } = useStore((state) => ({
    products: state.products,
  }));

  return (
    <div className="max-w-container mx-auto px-4 pt-10">
      {products?.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
