"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/Button";

type PaginationProps = {
  page: number;
  totalPage: number;
  limit: number;
};

export function Pagination({ page, totalPage, limit }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPage) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    params.set("page", newPage.toString());

    router.push(`/products?${params.toString()}`);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;

    const params = new URLSearchParams(searchParams.toString());

    params.set("limit", newLimit);

    params.set("page", "1");

    router.push(`/products?${params.toString()}`);
  };

  // Deny if 1 page only.
  if (totalPage <= 1) return null;

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span>Items per page:</span>
        <select
          value={limit}
          onChange={handleLimitChange}
          className="h-9 rounded-lg border border-slate-200 bg-white px-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
        >
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous Page"
          className="h-9 px-3 text-xs"
        >
          Previous
        </Button>

        <span className="px-3 text-sm font-medium text-slate-700">
          Page {page} of {totalPage}
        </span>

        <Button
          variant="secondary"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPage}
          aria-label="Next Page"
          className="h-9 px-3 text-xs"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
