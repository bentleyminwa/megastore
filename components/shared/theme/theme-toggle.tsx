"use client";

import { Button } from "@/components/ui/button";
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center cursor-pointer"
    >
      {theme === "light" ? <LucideSun /> : <LucideMoon />}
    </Button>
  );
}
