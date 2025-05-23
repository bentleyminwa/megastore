export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Megastore";

export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Megastore is a marketplace for buying and selling products.";

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCT_LIMIT =
  Number(process.env.NEXT_PUBLIC_LATEST_PRODUCT_LIMIT) || 4;
