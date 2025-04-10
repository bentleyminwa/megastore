import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new your account",
};

import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CredentialsSignUpForm from "@/features/auth/components/credentials-signup-form";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth();

  if (session) {
    return redirect("/");
  }

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="text-center">
        <Link href="/" className="flex justify-center">
          <Image
            src="/light-logo.png"
            alt="logo"
            width={120}
            height={120}
            priority
          />
        </Link>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <CredentialsSignUpForm />
      </CardContent>
    </Card>
  );
}
