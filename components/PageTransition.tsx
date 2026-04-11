"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [opacity, setOpacity] = useState(1);
  const prevPath = useRef(pathname);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Only animate when the path actually changes, not on first mount
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    // Subtle fade in only — no fade out, no translateY
    // Content appears from slightly transparent to fully visible
    setOpacity(0.3);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpacity(1), 20);

    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [pathname]);

  return (
    <div
      style={{
        opacity,
        transition: "opacity 0.25s ease",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
