import { z } from "zod";
import { formatNumberWithDecimals } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimals(Number(value))),
    {
      message: "Price must have  2 decimal places",
    }
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name should be at least 3 characters long"),
  slug: z.string().min(3, "Slug should be at least 3 characters long"),
  category: z.string().min(3, "Category should be at least 3 characters long"),
  brand: z.string().min(3, "Brand should be at least 3 characters long"),
  description: z
    .string()
    .min(3, "Description should be at least 3 characters long"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
