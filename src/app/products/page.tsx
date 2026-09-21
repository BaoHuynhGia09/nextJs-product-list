import Link from "next/link";
import {
  getProduct,
  getProductsByCategory,
  searchProducts,
} from "../../../lib/api/products";
import { ProductSearch } from "@/components/products/ProductSearch";
import { ProductFilter } from "@/components/products/ProductFilter";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const { search, category } = await searchParams;

  const data = search
    ? await searchProducts(search)
    : category
      ? await getProductsByCategory(category)
      : await getProduct();

  return (
    <main>
      <ProductSearch />
      <ProductFilter />
      <div>
        {data.products.map((product) => (
          <div key={product.id}>
            {product.id}
            {product.title}
            <Link href={`/products/${product.id}`}>Detail</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
