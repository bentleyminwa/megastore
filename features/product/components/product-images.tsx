"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <div className="">
        <Image
          src={images[currentImage]}
          alt="Product Image"
          width={1000}
          height={1000}
          className="object-cover"
        />
      </div>
      <div className="flex justify-center gap-3 mt-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "w-20 h-20 relative border cursor-pointer hover:border-gray-400",
              currentImage === index && "border-gray-600"
            )}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image}
              alt="Product Image"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
