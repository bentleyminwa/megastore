import { z } from "zod";
import { formatNumberWithDecimals } from "./utils";

// ===== PRODUCT SCHEMA ===== //

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

// ===== AUTH SCHEMA ===== //

export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name should be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
