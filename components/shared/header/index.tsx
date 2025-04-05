"use client";

import { Button } from "@/components/ui/button";
import { LucideShoppingCart, LucideUser } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../theme/theme-toggle";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full border-b">
      <section className="w-full md:w-3/4 flex items-center justify-between py-4 mx-auto">
        <Logo />
        <section className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <LucideShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/cart">
              <LucideUser /> Sign In
            </Link>
          </Button>
        </section>
      </section>
    </header>
  );
}
