import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert prisma object into a regular js object
export function convertToPlainObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// format number with decimal places
export function formatNumberWithDecimals(num: number): string {
  const [int, decimal] = num.toString().split(".");

  if (decimal) {
    return `${int}.${decimal.padEnd(2, "0")}`;
  } else {
    return `${int}.00`;
  }
}
