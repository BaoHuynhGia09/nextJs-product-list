"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Pagination({
  page,
  totalPage,
  limit,
}: {
  page: number;
  totalPage: number;
  limit: number;
}) {
  const router = useRouter();
  const search = useSearchParams();
  const [limitInput, setLimitInput] = useState(String(limit));

  return (
    <div>
      <button
        disabled={page === 1}
        onClick={() => {
          const newPage = page - 1;

          const params = new URLSearchParams(search.toString());

          params.set("page", newPage.toString());

          router.push(
            params.toString() ? `/products?${params.toString()}` : `/products`,
          );
        }}
      >
        {"<"}
      </button>
      <span>
        {page}/{totalPage}
      </span>
      <button
        disabled={page === totalPage}
        onClick={() => {
          const newPage = page + 1;

          const params = new URLSearchParams(search.toString());

          params.set("page", newPage.toString());

          router.push(
            params.toString() ? `/products?${params.toString()}` : `/products`,
          );
        }}
      >
        {">"}
      </button>
      <input
        type="number"
        min={1}
        max={100}
        value={limitInput}
        onChange={(event) => {
          setLimitInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const newLimit = Number(limitInput);

          if (!Number.isInteger(newLimit) || newLimit < 1 || newLimit > 100) {
            return;
          }

          const params = new URLSearchParams(search.toString());

          params.set("limit", newLimit.toString());
          params.set("page", "1");

          router.push(`/products?${params.toString()}`);
        }}
      >
        Apply
      </button>
    </div>
  );
}
