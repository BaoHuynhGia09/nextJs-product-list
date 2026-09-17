import Link from "next/link";
import { getProduct } from "../../../lib/api/products";

export default async function ProductsPage() {
  const data = await getProduct();

  return (
    <main>
      <div>
        {data.products.map((product) => (
          <div key={product.id}>
            {product.id}
            {product.title}
            <Link href={`/products/${product.id}`}>Detail</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
