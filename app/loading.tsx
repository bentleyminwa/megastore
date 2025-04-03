import { Spinner } from "@/components/shared/spinner";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Spinner />
    </div>
  );
}
