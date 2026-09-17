import { getProductById } from "../../../../lib/api/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);
  return (
    <main>
      <div>
        <p>{product.id}</p>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.stock}</p>
      </div>
    </main>
  );
}
