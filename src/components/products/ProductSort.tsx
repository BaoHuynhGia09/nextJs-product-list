"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export function ProductSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSortBy = searchParams.get("sortBy") || "";
  const currentOrder = searchParams.get("order") || "";

  const currentValue =
    currentSortBy && currentOrder ? `${currentSortBy}-${currentOrder}` : "";

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value.trim();

    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete("sortBy");
      params.delete("order");
    } else {
      const [sortBy, order] = value.split("-");
      params.set("sortBy", sortBy);
      params.set("order", order);
    }

    params.delete("page");

    router.push(
      params.toString() ? `/products?${params.toString()}` : `/products`,
    );
  };

  return (
    <div className="relative">
      <select
        value={currentValue}
        onChange={handleChange}
        className="h-10 rounded-lg border border-slate-200 bg-white px-3 pr-8 text-sm text-slate-700 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
      >
        <option value="">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc"> Rating: High to Low</option>
      </select>
    </div>
  );
}
