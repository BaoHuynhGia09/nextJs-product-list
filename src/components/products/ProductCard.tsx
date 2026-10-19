import { Product } from "@/types/product";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <p className="text-xs font-medium text-slate-500">
            {product.category}
          </p>

          <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-slate-900">
            {product.title}
          </h3>

          <div className="mt-2 flex items-center gap-1">
            <span className="text-sm text-amber-500" aria-hidden="true">
              ★
            </span>

            <span className="text-sm text-slate-600">{product.rating}</span>
          </div>

          <p className="mt-3 text-lg font-bold text-slate-900">
            ${product.price}
          </p>

          <Button
            variant="primary"
            className="w-full mt-2"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
          >
            Add to cart
          </Button>
        </div>
      </Link>
    </article>
  );
}
