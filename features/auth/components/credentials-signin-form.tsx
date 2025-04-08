"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { LucideLoaderCircle } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function CredentialsSignInForm() {
  const [state, formAction] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? (
          <p className="flex items-center justify-center gap-2">
            Signing In{" "}
            <span>
              <LucideLoaderCircle
                width={20}
                height={20}
                className="animate-spin"
              />
            </span>
          </p>
        ) : (
          "Sign In"
        )}
      </Button>
    );
  };

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={""}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="password"
          defaultValue={""}
        />
      </div>
      <div>
        <SignInButton />
      </div>

      {state && !state.success && (
        <div className="text-center text-sm text-destructive">
          {state.message}
        </div>
      )}

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" target="_self" className="underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
