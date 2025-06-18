import { useState, useEffect } from "react";

export function useIsMobileByWidth(threshold = 1024): boolean {
  // Initialize state based on window width (guards for SSR)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      // on server, assume “desktop” to match initial render
      return false;
    }
    return window.innerWidth <= threshold;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= threshold);
    };

    // run once on mount
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isMobile;
}
