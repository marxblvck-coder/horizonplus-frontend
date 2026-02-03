"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none active:scale-95 focus-visible:ring-2 focus-visible:ring-eliaviv-gold/50",
  {
    variants: {
      variant: {
        // Le bouton signature Eliaviv (Vert forêt)
        default: "bg-eliaviv-green text-white shadow-xl shadow-eliaviv-green/20 hover:bg-[#0d4d3d] hover:shadow-eliaviv-green/40 hover:-translate-y-1",
        
        // Le bouton Prestige (Or)
        premium: "bg-eliaviv-gold text-eliaviv-green shadow-lg shadow-eliaviv-gold/20 hover:bg-[#e5b66a] hover:shadow-eliaviv-gold/40 hover:-translate-y-1",
        
        // Outline raffiné
        outline: "border-2 border-eliaviv-green bg-transparent text-eliaviv-green hover:bg-eliaviv-green hover:text-white dark:border-eliaviv-gold dark:text-eliaviv-gold dark:hover:bg-eliaviv-gold dark:hover:text-eliaviv-green",
        
        // Ghost discret pour la navigation
        ghost: "text-eliaviv-green hover:bg-eliaviv-green/5 hover:text-eliaviv-gold dark:text-white/80 dark:hover:bg-white/5",
        
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
        secondary: "bg-eliaviv-soft/10 text-eliaviv-green hover:bg-eliaviv-soft/20",
        link: "text-eliaviv-green underline-offset-8 hover:underline hover:text-eliaviv-gold decoration-eliaviv-gold",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-xl px-4 text-xs",
        lg: "h-14 rounded-3xl px-10 text-base shadow-2xl",
        icon: "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }