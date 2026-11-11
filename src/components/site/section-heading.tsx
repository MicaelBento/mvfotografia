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
  centralizado = false,
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
          "label-mini mb-4",
          invertido ? "text-[#9E9B93]" : "text-[#57554F]"
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "text-3xl font-medium tracking-[-0.025em] leading-[1.08] md:text-5xl",
          invertido ? "text-[#F6F5F0]" : "text-[#141413]"
        )}
      >
        {titulo}
        {destaque && (
          <>
            {" "}
            <span
              className={cn(
                "font-light",
                invertido ? "text-[#A8A49B]" : "text-[#57554F]"
              )}
            >
              {destaque}
            </span>
          </>
        )}
      </h2>
      {descricao && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed font-light md:text-[17px]",
            centralizado && "mx-auto",
            invertido ? "text-[#B8B5AC]" : "text-[#57554F]"
          )}
        >
          {descricao}
        </p>
      )}
    </Reveal>
  )
}
