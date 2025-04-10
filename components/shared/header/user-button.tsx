import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOutUser } from "@/lib/actions/user.actions";
import { LucideUser } from "lucide-react";
import Link from "next/link";

export default async function UserButton() {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">
          <LucideUser /> Sign In
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name?.charAt(0) ?? "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex justify-center items-center">
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full bg-gray-300 text-lg font-bold"
        >
          {firstInitial}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <h2 className="font-semibold">{session.user?.name}</h2>
          <h3 className="text-sm text-muted-foreground">
            {session.user?.email}
          </h3>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <form action={signOutUser} className="w-full">
            <Button className="w-full cursor-pointer">Sign Out</Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
