"use server";

import { prisma } from "@/db/prisma";
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: LATEST_PRODUCT_LIMIT,
  });

  return convertToPlainObject(products);
}
