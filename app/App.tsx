"use client";

import { useCallback, useEffect } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import type { ColorScheme } from "@/hooks/useColorScheme";

const FORCED_SCHEME: ColorScheme = "light";

export default function App() {
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const root = document.documentElement;
    root.dataset.colorScheme = FORCED_SCHEME;
    root.classList.remove("dark");
    root.style.colorScheme = FORCED_SCHEME;
  }, []);

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-end bg-white">
      <div className="mx-auto w-full max-w-5xl">
        <ChatKitPanel
          theme={FORCED_SCHEME}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={() => {}}
        />
      </div>
    </main>
  );
}
