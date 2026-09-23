"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function ProductSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const params = new URLSearchParams(searchParams.toString());

        if (query) {
          params.set("search", query);
        } else {
          params.delete("search");
        }

        router.push(
          params.toString() ? `/products?${params.toString()}` : `/products`,
        );
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value.trim());
        }}
        placeholder="Search products..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
