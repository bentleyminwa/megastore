import ProductList from "@/features/product/components/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Homepage() {
  const latestProducts = await getLatestProducts();

  return (
    <section>
      <ProductList data={latestProducts} title="New Arrivals" />
    </section>
  );
}
