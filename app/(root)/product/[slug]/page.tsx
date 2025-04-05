import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductImages from "@/features/product/components/product-images";
import ProductPrice from "@/features/product/components/product-price";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

interface ProductDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Images component */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        {/* Details component */}
        <div className="col-span-2 flex flex-col gap-6">
          <h4 className="text-sm">
            {product.brand} {product.category}
          </h4>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <h3>
            {product.rating} of {product.numReviews} Reviews
          </h3>
          <div>
            <ProductPrice
              value={Number(product.price)}
              className="w-24 bg-green-100 flex items-center justify-center px-3 py-2 rounded-full text-green-800"
            />
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Description</h3>
            <p className="">{product.description}</p>
          </div>
        </div>
        {/* Actions component */}
        <Card className="h-fit">
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Price</h2>
              <ProductPrice value={Number(product.price)} />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Status</h2>
              {product.stock > 0 ? (
                <Badge variant="outline" className="p-2">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive" className="p-2">
                  Out of Stock
                </Badge>
              )}
            </div>
            {product.stock > 0 && (
              <div>
                <Button className="w-full">Add To Cart</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
