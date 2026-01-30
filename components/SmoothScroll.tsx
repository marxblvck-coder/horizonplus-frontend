"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";


export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Réinitialise le scroll en haut à chaque changement de page
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 2.2,      // Très long pour un effet cinématographique
        lerp: 0.05,         // Très bas pour une fluidité maximale
        damping: 0.8,       // Amortissement
        smoothWheel: true,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}