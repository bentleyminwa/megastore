import { APP_NAME } from "@/lib/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="flex items-center gap-2">
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
    </section>
  );
}
