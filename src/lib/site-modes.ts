export type SiteModo = "pessoal" | "corporativo"

export interface ModoTheme {
  id: SiteModo
  rotuloCurto: string
  rotuloCompleto: string
  href: `/${SiteModo}`
  isRomanticEditorial: boolean
  pageBg: string
  lightBg: string
  stoneBg: string
  cardBg: string
  cardBgMuted: string
  darkBg: string
  darkCardBg: string
  inkText: string
  mutedText: string
  borderLight: string
  borderHover: string
  primaryBtn: string
  secondaryBtn: string
  darkPrimaryBtn: string
  darkSecondaryBtn: string
  tagLightBg: string
  serifAccentClass: string
  accentText: string
  darkAccentText: string
  darkMutedText: string
  darkBodyText: string
  darkInkText: string
  darkBorder: string
  headingClass: string
  cardRadius: string
  frameRadius: string
  controlRadius: string
  quoteIconColor: string
  starColor: string
}

export const modoThemes: Record<SiteModo, ModoTheme> = {
  pessoal: {
    id: "pessoal",
    rotuloCurto: "Pessoal",
    rotuloCompleto: "Pessoal · Ensaios & Afeto",
    href: "/pessoal",
    isRomanticEditorial: true,
    pageBg: "bg-white",
    lightBg: "bg-white",
    stoneBg: "bg-neutral-50",
    cardBg: "bg-white",
    cardBgMuted: "bg-neutral-50",
    darkBg: "bg-black",
    darkCardBg: "bg-neutral-950",
    inkText: "text-neutral-900",
    mutedText: "text-neutral-600",
    borderLight: "border-neutral-200",
    borderHover: "hover:border-black",
    primaryBtn:
      "bg-black text-white hover:bg-neutral-800",
    secondaryBtn:
      "border-neutral-300 text-neutral-900 hover:border-black hover:bg-black hover:text-white",
    darkPrimaryBtn:
      "bg-white text-black hover:bg-neutral-200",
    darkSecondaryBtn:
      "border-white/40 text-white hover:border-white hover:bg-white/10",
    tagLightBg: "bg-black/80 text-white border border-white/20",
    serifAccentClass: "font-serif-site italic font-normal text-neutral-400",
    accentText: "text-neutral-500",
    darkAccentText: "text-neutral-400",
    darkMutedText: "text-neutral-400",
    darkBodyText: "text-neutral-200",
    darkInkText: "text-white",
    darkBorder: "border-white/15",
    headingClass: "font-serif-site font-medium",
    cardRadius: "rounded-2xl",
    frameRadius: "rounded-none",
    controlRadius: "rounded-full",
    quoteIconColor: "text-neutral-300",
    starColor: "text-black",
  },
  corporativo: {
    id: "corporativo",
    rotuloCurto: "Corporativo & Marketing",
    rotuloCompleto: "Corporativo & Marketing",
    href: "/corporativo",
    isRomanticEditorial: false,
    pageBg: "bg-[#F6F5F0]",
    lightBg: "bg-[#F6F5F0]",
    stoneBg: "bg-[#ECEAE3]",
    cardBg: "bg-[#FDFCFA]",
    cardBgMuted: "bg-[#ECEAE3]/60",
    darkBg: "bg-[#141413]",
    darkCardBg: "bg-[#1C1C1A]",
    inkText: "text-[#141413]",
    mutedText: "text-[#57554F]",
    borderLight: "border-[#141413]/12",
    borderHover: "hover:border-[#141413]/35",
    primaryBtn:
      "bg-[#141413] text-[#F6F5F0] hover:bg-[#2E2E2B]",
    secondaryBtn:
      "border-[#141413]/25 text-[#141413] hover:border-[#141413] hover:bg-[#ECEAE3]",
    darkPrimaryBtn:
      "bg-[#F6F5F0] text-[#141413] hover:bg-[#ECEAE3]",
    darkSecondaryBtn:
      "border-[#F6F5F0]/30 text-[#F6F5F0] hover:border-[#F6F5F0] hover:bg-[#F6F5F0]/10",
    tagLightBg: "bg-[#141413]/90 text-[#F6F5F0]",
    serifAccentClass: "font-light text-[#57554F]",
    accentText: "text-[#141413]",
    darkAccentText: "text-[#A8A49B]",
    darkMutedText: "text-[#B8B5AC]",
    darkBodyText: "text-[#D4D1C7]",
    darkInkText: "text-[#F6F5F0]",
    darkBorder: "border-[#F6F5F0]/12",
    headingClass: "font-medium tracking-[-0.025em]",
    cardRadius: "rounded-md",
    frameRadius: "rounded-sm",
    controlRadius: "rounded-sm",
    quoteIconColor: "text-[#B8B5AC]",
    starColor: "text-[#141413]",
  },
}

