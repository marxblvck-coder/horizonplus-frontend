"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<any>(null);

  // Force Lenis à recalculer la taille de la page et à remonter en haut à chaque changement de route
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
      lenisRef.current.lenis.resize();
    }
  }, [pathname]);

  return (
    <ReactLenis root ref={lenisRef} options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}