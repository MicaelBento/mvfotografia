import Image from "next/image"
import { cn } from "@/lib/utils"

type EmblemaTamanho = "sm" | "md" | "lg"

const tamanhoConfig: Record<
  EmblemaTamanho,
  { container: string; innerRing: string; svg: string }
> = {
  sm: {
    container:
      "h-11 w-11 bg-white/[0.04] ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/[0.08] group-hover:ring-white/40",
    innerRing: "inset-[3px] border border-white/10",
    svg: "w-[50%]",
  },
  md: {
    container:
      "h-16 w-16 bg-white/[0.03] ring-1 ring-white/20 transition-all duration-300 group-hover:bg-white/[0.07] group-hover:ring-white/35",
    innerRing: "inset-1 border border-white/10",
    svg: "w-[52%]",
  },
  lg: {
    container:
      "h-20 w-20 bg-black/45 backdrop-blur-md ring-1 ring-white/25 shadow-[0_0_50px_rgba(0,0,0,0.65)] md:h-24 md:w-24",
    innerRing: "inset-1.5 border border-white/12",
    svg: "w-[52%]",
  },
}

interface LogoEmblemaProps {
  tamanho?: EmblemaTamanho
  alt?: string
  className?: string
}

/**
 * Selo circular translúcido com o monograma vetorial branco (`MV`).
 * Dimensiona o SVG em ~50-52% do diâmetro para preservar os vértices sem cortes
 * e aplica micro-compensação vertical para centralização ótica no círculo.
 */
export function LogoEmblema({
  tamanho = "sm",
  alt = "Logotipo Memória Viva Fotografia",
  className,
}: LogoEmblemaProps) {
  const cfg = tamanhoConfig[tamanho]

  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full",
        cfg.container,
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn("pointer-events-none absolute rounded-full", cfg.innerRing)}
      />
      <Image
        src="/logo-branco.svg"
        alt={alt}
        width={540}
        height={504}
        unoptimized
        loading="eager"
        className={cn("h-auto translate-y-[2%] object-contain", cfg.svg)}
      />
    </span>
  )
}

