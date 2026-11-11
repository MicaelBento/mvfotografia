import { cn } from "@/lib/utils"
import { modoThemes, type SiteModo } from "@/lib/site-modes"
import { Reveal } from "./reveal"

interface SectionHeadingProps {
  label?: string
  titulo: string
  destaque?: string
  descricao?: string
  invertido?: boolean
  centralizado?: boolean
  modo?: SiteModo
  className?: string
}

export function SectionHeading({
  label,
  titulo,
  destaque,
  descricao,
  invertido = false,
  centralizado = false,
  modo = "corporativo",
  className,
}: SectionHeadingProps) {
  const theme = modoThemes[modo]

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        centralizado && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "label-mini mb-4",
            invertido
              ? modo === "pessoal"
                ? "text-[#B5AAA0]"
                : "text-[#9E9B93]"
              : theme.mutedText
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-medium tracking-[-0.025em] leading-[1.08] md:text-5xl",
          invertido
            ? modo === "pessoal"
              ? "text-[#FAF7F2]"
              : "text-[#F6F5F0]"
            : theme.inkText
        )}
      >
        {titulo}
        {destaque && (
          <>
            {" "}
            <span
              className={cn(
                modo === "pessoal"
                  ? "font-serif-site italic font-normal"
                  : "font-light",
                invertido
                  ? modo === "pessoal"
                    ? "text-[#C5BBB1]"
                    : "text-[#A8A49B]"
                  : theme.mutedText
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
            invertido
              ? modo === "pessoal"
                ? "text-[#C5BBB1]"
                : "text-[#B8B5AC]"
              : theme.mutedText
          )}
        >
          {descricao}
        </p>
      )}
    </Reveal>
  )
}
