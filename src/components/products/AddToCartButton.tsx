"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "../ui/Button";
import { Product } from "@/types/product";

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="flex flex-col gap-3 sm:flex-row w-full">
      <Button
        variant="primary"
        className="w-full sm:flex-1 h-11 text-base font-medium"
        onClick={() => addToCart(product, 1)}
      >
        Add to Cart
      </Button>
      <Button
        variant="secondary"
        className="w-full sm:w-auto h-11 px-6"
        onClick={() => addToCart(product, 1)}
      >
        Buy Now
      </Button>
    </div>
  );
}
