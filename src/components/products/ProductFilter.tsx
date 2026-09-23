"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <select
      onChange={(event) => {
        const category = event.target.value.trim();

        const params = new URLSearchParams(searchParams.toString());

        if (category) {
          params.set("category", category);
        } else {
          params.delete("category");
        }

        router.push(
          params.toString() ? `/products?${params.toString()}` : `/products`,
        );
      }}
    >
      <option value="">All categories</option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
      <option value="fragrances">Fragraneces</option>
      <option value="groceries">Groceries</option>
    </select>
  );
}
