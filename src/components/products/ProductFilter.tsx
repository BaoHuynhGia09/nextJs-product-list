"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value.trim();

    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    params.delete("page");

    router.push(
      params.toString() ? `/products?${params.toString()}` : `/products`,
    );
  };

  return (
    <div className="relative">
      <select
        value={currentCategory}
        onChange={handleChange}
        className="h-10 rounded-lg border border-slate-200 bg-white px-3 pr-8 text-sm text-slate-700 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
      >
        <option value="">All categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragraneces</option>
        <option value="groceries">Groceries</option>
      </select>
    </div>
  );
}
