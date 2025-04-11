import {
  cartItemSchema,
  insertCartSchema,
  insertProductSchema,
} from "@/lib/validator";
import { z } from "zod";

// Product
export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

// Cart
export type CartItem = z.infer<typeof cartItemSchema>;
export type Cart = z.infer<typeof insertCartSchema>;
