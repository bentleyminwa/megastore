import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="border p-8 rounded-lg shadow-lg text-center space-y-3">
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-destructive">
          Sorry, we could not find the page you were looking for
        </p>
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
