import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-slate-50 py-8">
      <Container>
        {/* Product Detail Layout (2 Columns) */}
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2 lg:p-10">
          {/* Left col: product image */}
          <div className="aspect-square w-full rounded-lg bg-slate-200" />
          {/* Right col: product Detial */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <div className="mt-3 h-6 w-16 rounded bg-slate-200" />
                <div className="mt-3 h-6 w-16 rounded bg-slate-200" />
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              <div className="mt-3 h-6 w-full rounded bg-slate-200" />
            </h1>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <div className="h-9 w-24 rounded-lg bg-slate-200" />
              <div className="h-6 w-16 rounded bg-slate-200" />
            </div>

            {/* Description */}
            <div className="mt-6 border-t border-slate-100 pt-6">
              <div className="mt-2 h-7 w-32 rounded bg-slate-200" />
              <div className="mt-2 h-16 w-full rounded bg-slate-200" />
            </div>

            {/* Actions*/}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="mt-2 h-11 w-[75vw] rounded bg-slate-200" />
                <div className="mt-2 h-11 w-[25vw] rounded bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
