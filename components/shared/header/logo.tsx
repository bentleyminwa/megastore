"use client";

import { APP_NAME } from "@/lib/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link href="/" className="flex items-center gap-2">
      {theme === "dark" ? (
        <Image
          src="/dark-logo.png"
          alt={`${APP_NAME} logo`}
          width={40}
          height={40}
          priority
        />
      ) : (
        <Image
          src="/light-logo.png"
          alt={`${APP_NAME} logo`}
          width={40}
          height={40}
          priority
        />
      )}
      <span className="hidden md:block text-2xl font-bold">{APP_NAME}</span>
    </Link>
  );
}
