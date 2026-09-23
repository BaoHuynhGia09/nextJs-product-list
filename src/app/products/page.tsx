import Link from "next/link";
import { getProducts } from "../../../lib/api/products";
import { ProductSearch } from "@/components/products/ProductSearch";
import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductSort } from "@/components/products/ProductSort";
import { Pagination } from "@/components/products/Pagination";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sortBy?: string;
    order?: "asc" | "desc";
    page?: number;
    limit?: number;
  }>;
}) {
  const query = await searchParams;

  const data = await getProducts({
    search: query.search,
    category: query.category,
    sortBy: query.sortBy,
    order: query.order,
    page: parsePositiveNumber(query.page?.toString()),
    limit: parsePositiveNumber(query.limit?.toString()),
  });

  function parsePositiveNumber(value?: string) {
    if (!value) {
      return undefined;
    }

    const number = Number(value);

    if (!Number.isInteger(number) || number < 1) {
      return undefined;
    }

    return number;
  }

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
