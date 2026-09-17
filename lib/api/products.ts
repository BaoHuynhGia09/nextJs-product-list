import type { Product, ProductsResponse } from "@/types/product";
import { apiClient } from "./client";

export function getProduct(): Promise<ProductsResponse> {
  return apiClient<ProductsResponse>("/product");
}

export function getProductById(id: number): Promise<Product> {
  return apiClient<Product>(`/product/${id}`);
}
