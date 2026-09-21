import type { Product, ProductsResponse } from "@/types/product";
import { apiClient } from "./client";

export function getProduct(): Promise<ProductsResponse> {
  return apiClient<ProductsResponse>("/product");
}

export function getProductById(id: number): Promise<Product> {
  return apiClient<Product>(`/product/${id}`);
}

export function searchProducts(query: string): Promise<ProductsResponse> {
  return apiClient<ProductsResponse>(
    `/products/search?q=${encodeURIComponent(query)}`,
  );
}

export function getProductsByCategory(
  category: string,
): Promise<ProductsResponse> {
  return apiClient<ProductsResponse>(
    `/products/category/${encodeURIComponent(category)}`,
  );
}
