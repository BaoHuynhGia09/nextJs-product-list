import { Container } from "@/components/ui/Container";

export default function ProductsLoading() {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-slate-50 py-8">
      <Container>
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-8 w-48 rounded-lg bg-slate-200" />
          <div className="mt-2 h-4 w-32 rounded bg-slate-200" />
        </div>

        {/* Toolbar Skeleton */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">
          <div className="h-10 w-full rounded-lg bg-slate-200 sm:max-w-xs" />
          <div className="flex gap-3">
            <div className="h-10 w-32 rounded-lg bg-slate-200" />
            <div className="h-10 w-32 rounded-lg bg-slate-200" />
          </div>
        </div>

        {/* Product Grid Skeleton (8 thẻ) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-4 animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="aspect-square w-full rounded-lg bg-slate-200" />

              {/* Category Skeleton */}
              <div className="mt-3 h-3 w-16 rounded bg-slate-200" />

              {/* Title Skeleton */}
              <div className="mt-2 h-4 w-full rounded bg-slate-200" />
              <div className="mt-1 h-4 w-2/3 rounded bg-slate-200" />

              {/* Price Skeleton */}
              <div className="mt-4 flex items-center justify-between">
                <div className="h-5 w-16 rounded bg-slate-200" />
                <div className="h-9 w-24 rounded-lg bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
