"use server";

import { PrismaClient } from "@prisma/client";
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";

const prisma = new PrismaClient();

export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: LATEST_PRODUCT_LIMIT,
  });

  return convertToPlainObject(products);
}
