"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface SmoothNavLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function SmoothNavLink({ href, className, onClick, children }: SmoothNavLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    if (href.startsWith("/#")) {
      const hash = href.slice(1); // "#about" or "#pricing"

      if (pathname === "/") {
        // Already on homepage — smooth scroll directly
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // On another page — navigate with hash so browser scrolls automatically
        // Page transition fades in, then browser positions to section
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
