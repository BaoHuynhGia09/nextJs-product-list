import Link from "next/link";
import { getAllProducts, queryProducts } from "../../../lib/api/products";
import { ProductSearch } from "@/components/products/ProductSearch";
import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductSort } from "@/components/products/ProductSort";
import { Pagination } from "@/components/products/Pagination";

function parsePositiveNumber(value?: string) {
  if (!value) return undefined;
  const number = Number(value);
  return Number.isInteger(number) && number >= 1 ? number : undefined;
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sortBy?: string;
    order?: "asc" | "desc";
    page?: string;
    limit?: string;
  }>;
}) {
  const params = await searchParams;

  const allProducts = await getAllProducts();

  const data = await queryProducts(allProducts, {
    search: params.search,
    category: params.category,
    sortBy: params.sortBy,
    order: params.order,
    page: parsePositiveNumber(params.page),
    limit: parsePositiveNumber(params.limit),
  });

  return (
    <main>
      <ProductSearch />
      <ProductFilter />
      <ProductSort />
      <div>
        {data.data.map((product) => (
          <div key={product.id}>
            {product.id}
            {product.title}
            <Link href={`/products/${product.id}`}>Detail</Link>
          </div>
        ))}
      </div>
      <Pagination
        page={data.page}
        totalPage={data.totalPages}
        limit={data.limit}
      />
    </main>
  );
}
