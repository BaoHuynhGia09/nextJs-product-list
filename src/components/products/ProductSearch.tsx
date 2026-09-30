"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/Button";
import { useState } from "react";

export function ProductSearch() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";

  const [query, setQuery] = useState(currentSearch);
  const [prevSearch, setPrevSearch] = useState(currentSearch);

  if (prevSearch !== currentSearch) {
    setPrevSearch(currentSearch);
    setQuery(currentSearch);
  }

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      params.set("search", trimmedQuery);
    } else {
      params.delete("search");
    }

    // Reset to page 1 when active new search
    params.delete("page");

    router.push(
      params.toString() ? `/products?${params.toString()}` : `/products`,
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className=" w-full">
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          placeholder="Search products..."
          className="w-full h-10 rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  );
}
