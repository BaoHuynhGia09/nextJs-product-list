import type {
  Product,
  ProductQuery,
  ProductsResponse,
  ProductListResponse,
} from "@/types/product";
import { apiClient } from "./client";

export async function getAllProducts(): Promise<Product[]> {
  const res = await apiClient<ProductsResponse>("/products?limit=0", {
    next: { revalidate: 3600 },
  });
  return res.products;
}

export async function queryProducts(
  all: Product[],
  query: ProductQuery = {},
): Promise<ProductListResponse> {
  let products = all;

  if (query.search) {
    const q = query.search.trim().toLowerCase();
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q),
    );
  }

  if (query.category) {
    products = products.filter((p) => p.category === query.category);
  }

  if (query.sortBy) {
    const sortBy = query.sortBy;
    const order = query.order === "desc" ? -1 : 1;

    products.sort((a, b) => {
      if (sortBy === "price") {
        return (a.price - b.price) * order;
      }
      if (sortBy === "rating") {
        return (a.rating - b.rating) * order;
      }
      // if (sortBy === "title") {
      //   return a.title.localeCompare(b.title) * order;
      // }
      return 0;
    });
  }

  // Valid page and limit
  const limit = Math.min(100, Math.max(1, query.limit ?? 10));
  const total = products.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const page = Math.min(totalPages, Math.max(1, query.page ?? 1));
  const skip = (page - 1) * limit;

  return {
    data: products.slice(skip, skip + limit),
    total,
    page,
    limit,
    totalPages,
  };
}

export function getProductById(id: number): Promise<Product> {
  return apiClient<Product>(`/products/${id}`, {
    next: { revalidate: 3600 },
  });
}
