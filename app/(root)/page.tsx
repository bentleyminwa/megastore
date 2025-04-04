import sampleData from "@/db/sample-data";
import ProductList from "@/features/product/components/product-list";

export default function Homepage() {
  return (
    <section>
      <ProductList data={sampleData.products} title="New Arrivals" limit={4} />
    </section>
  );
}
