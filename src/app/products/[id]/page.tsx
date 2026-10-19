import { notFound } from "next/navigation";
import { getProductById } from "../../../../lib/api/products";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/products/AddToCartButton";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  if (isNaN(productId)) {
    notFound();
  }

  let product;
  try {
    product = await getProductById(productId);
  } catch (error) {
    notFound();
  }

  return (
    <main className="min-h-[calc(100vh-65px)] bg-slate-50 py-8">
      <Container>
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
          >
            ← Back to products
          </Link>
        </div>

        {/* Product Detail Layout (2 Columns) */}
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2 lg:p-10">
          {/* Left col: product image */}
          <div className="flex items-center justify-center overflow-hidden rounded-xl bg-slate-100 p-4">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className=" h-full w-full object-cover object-center"
              />
            </div>
          </div>
          {/* Right col: product Detial */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {product.category}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-amber-500">
                  ★{product.rating}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {product.title}
            </h1>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-slate-900">
                ${product.price}
              </span>
              {product.stock !== undefined && (
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    product.stock > 0
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-rose-50 text-rose-700 border border-rose-200"
                  }`}
                >
                  {product.stock > 0
                    ? `In Stock (${product.stock})`
                    : "Out of Stock"}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mt-6 border-t border-slate-100 pt-6">
              <h3 className="text-sm font-medium text-slate-900">
                Description
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {product.description ||
                  "No description available for this product."}
              </p>
            </div>

            {/* Actions*/}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
