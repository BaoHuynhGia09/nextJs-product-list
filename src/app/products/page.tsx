import Link from "next/link";
import { getAllProducts, queryProducts } from "../../../lib/api/products";
import { ProductSearch } from "@/components/products/ProductSearch";
import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductSort } from "@/components/products/ProductSort";
import { Pagination } from "@/components/products/Pagination";
import { Navbar } from "@/components/layout/Navbar";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Container } from "@/components/ui/Container";

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
    <main className="py-8 bg-slate-50 min-h-[calc(100vh-65px)]">
      <Container>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            All Products
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Showing {data.data.length} of {data.total} products
          </p>
        </div>

        {/* Toolbar: Search, Filter, Sort */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-xs">
            <ProductSearch />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ProductFilter />
            <ProductSort />
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={data.data} />

        {/* Pagination */}
        <div className="mt-10">
          <Pagination
            page={data.page}
            totalPage={data.totalPages}
            limit={data.limit}
          />
        </div>
      </Container>
    </main>
  );
}
