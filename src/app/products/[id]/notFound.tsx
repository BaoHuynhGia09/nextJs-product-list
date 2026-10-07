import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            404 - Product Not Found
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            The product you are looking for does not exist or has been removed.
          </p>
          <div className="mt-6">
            <Link href="/products">
              <Button variant="primary">Back to All Products</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
