import type {
  Product,
  ProductQuery,
  ProductsResponse,
  ProductListResponse,
} from "@/types/product";
import { apiClient } from "./client";

export async function getProducts(
  query: ProductQuery = {},
): Promise<ProductListResponse> {
  let products: Product[];

  if (query.search) {
    const params = new URLSearchParams({
      q: query.search,
    });

    const response = await apiClient<ProductsResponse>(
      `/products/search?${params.toString()}`,
    );

    products = response.products;
  } else if (query.category) {
    const response = await apiClient<ProductsResponse>(
      `/products/category/${encodeURIComponent(query.category)}`,
    );

    products = response.products;
  } else {
    const response = await apiClient<ProductsResponse>("/products?limit=0");

    products = response.products;
  }

  if (query.search && query.category) {
    products = products.filter(
      (product) => product.category === query.category,
    );
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
      if (sortBy === "title") {
        return a.title.localeCompare(b.title) * order;
      }
      return 0;
    });
  }

  // Valid page and limit
  const limit = Math.min(100, Math.max(1, query.limit ?? 10));
  const total = products.length;
  const totalPages = Math.ceil(total / limit);
  const page = Math.min(totalPages, Math.max(1, query.page ?? 1));
  const skip = (page - 1) * limit;
  const paginatedProducts = products.slice(skip, skip + limit);

  return { data: paginatedProducts, total, page, limit, totalPages };
}

export function getProductById(id: number): Promise<Product> {
  return apiClient<Product>(`/products/${id}`);
}
