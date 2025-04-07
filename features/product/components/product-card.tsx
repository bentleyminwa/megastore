import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm py-0">
      <CardHeader className="p-0 items-center">
        <Link
          href={`/product/${product.slug}`}
          className="relative w-full h-[300px]"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="font-medium text-sm">{product.name}</h2>
        </Link>
        <div className="flex items-center justify-between">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
