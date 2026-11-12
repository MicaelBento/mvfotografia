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
  const isPessoal = modo === "pessoal"

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
            "label-mini",
            isPessoal ? "mb-5" : "mb-4",
            isPessoal
              ? invertido
                ? "text-neutral-400"
                : "text-neutral-500"
              : invertido
                ? theme.darkMutedText
                : theme.mutedText
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          isPessoal
            ? "font-serif-site text-4xl font-medium leading-[1.05] md:text-5xl lg:text-6xl"
            : "text-3xl font-medium tracking-[-0.025em] leading-[1.08] md:text-5xl",
          isPessoal
            ? invertido
              ? "text-white"
              : "text-neutral-900"
            : invertido
              ? theme.darkInkText
              : theme.inkText
        )}
      >
        {titulo}
        {destaque && (
          <>
            {" "}
            <em
              className={cn(
                isPessoal ? "font-serif-site italic" : "not-italic font-light",
                isPessoal
                  ? invertido
                    ? "text-neutral-300"
                    : "text-neutral-400"
                  : invertido
                    ? theme.darkAccentText
                    : theme.mutedText
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
            isPessoal
              ? "mt-6 text-base font-light leading-relaxed md:text-lg"
              : "mt-5 max-w-2xl text-base leading-relaxed font-light md:text-[17px]",
            centralizado && "mx-auto",
            isPessoal
              ? invertido
                ? "text-neutral-300"
                : "text-neutral-600"
              : invertido
                ? theme.darkMutedText
                : theme.mutedText
          )}
        >
          {descricao}
        </p>
      )}
    </Reveal>
  )
}
