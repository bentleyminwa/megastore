"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpWithCredentials } from "@/lib/actions/user.actions";
import { LucideLoaderCircle } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function CredentialsSignUpForm() {
  const [state, formAction] = useActionState(signUpWithCredentials, {
    success: false,
    message: "",
  });

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? (
          <p className="flex items-center justify-center gap-2">
            Creating account{" "}
            <span>
              <LucideLoaderCircle
                width={20}
                height={20}
                className="animate-spin"
              />
            </span>
          </p>
        ) : (
          "Create Account"
        )}
      </Button>
    );
  };

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          defaultValue={""}
        />
      </div>
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
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          autoComplete="confirmPassword"
          defaultValue={""}
        />
      </div>
      <div>
        <SignUpButton />
      </div>

      {state && !state.success && (
        <div className="text-center text-sm text-destructive">
          {state.message}
        </div>
      )}

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/sign-in" target="_self" className="underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}
