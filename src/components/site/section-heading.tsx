import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

interface SectionHeadingProps {
  label: string
  titulo: string
  destaque?: string
  descricao?: string
  invertido?: boolean
  centralizado?: boolean
  className?: string
}

export function SectionHeading({
  label,
  titulo,
  destaque,
  descricao,
  invertido = false,
  centralizado = true,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        centralizado && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "label-mini mb-5",
          invertido ? "text-neutral-400" : "text-neutral-500"
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "font-serif-site text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium",
          invertido ? "text-white" : "text-neutral-900"
        )}
      >
        {titulo}
        {destaque && (
          <>
            {" "}
            <em
              className={cn(
                "font-serif-site italic",
                invertido ? "text-neutral-300" : "text-neutral-400"
              )}
            >
              {destaque}
            </em>
          </>
        )}
      </h2>
      {descricao && (
        <p
          className={cn(
            "mt-6 text-base md:text-lg leading-relaxed font-light",
            invertido ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {descricao}
        </p>
      )}
    </Reveal>
  )
}
