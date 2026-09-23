"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function ProductSort() {
  const router = useRouter();
  const search = useSearchParams();

  return (
    <select
      onChange={(event) => {
        const value = event.target.value.trim();

        const params = new URLSearchParams(search.toString());

        if (!value) {
          params.delete("sortBy");
          params.delete("order");
        } else {
          const [sortBy, order] = value.split("-");

          params.set("sortBy", sortBy);
          params.set("order", order);
        }

        router.push(
          params.toString() ? `/products?${params.toString()}` : `/products`,
        );
      }}
    >
      <option value="">Default</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc"> Rating: High to Low</option>
    </select>
  );
}
