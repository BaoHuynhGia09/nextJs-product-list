"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

export function ProductEmptyState() {
  const router = useRouter();

  const handleReset = () => {
    router.push("/products");
  };

  return (
    <div className="flex min-h-95 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        No products found
      </h3>
      <p className="mt-1 max-w-sm text-sm text-slate-500">
        We couldn&apos;t find any products matching your search criteria. Try
        checking for spelling errors or clearing your filters.
      </p>

      <div className="mt-6">
        <Button variant="secondary" onClick={handleReset}>
          Reset all filters
        </Button>
      </div>
    </div>
  );
}
