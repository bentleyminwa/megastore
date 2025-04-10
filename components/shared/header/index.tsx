import { Button } from "@/components/ui/button";
import { LucideShoppingCart } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../theme/theme-toggle";
import Logo from "./logo";
import UserButton from "./user-button";

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
          <UserButton />
        </section>
      </section>
    </header>
  );
}
