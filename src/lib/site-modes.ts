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
}

export const modoThemes: Record<SiteModo, ModoTheme> = {
  pessoal: {
    id: "pessoal",
    rotuloCurto: "Pessoal",
    rotuloCompleto: "Pessoal · Ensaios & Afeto",
    href: "/pessoal",
    isRomanticEditorial: true,
    pageBg: "bg-[#FAF7F2]",
    lightBg: "bg-[#FAF7F2]",
    stoneBg: "bg-[#F2ECE2]",
    cardBg: "bg-[#FFFDF9]",
    cardBgMuted: "bg-[#EFE7DA]/70",
    darkBg: "bg-[#1D1917]",
    darkCardBg: "bg-[#27211E]",
    inkText: "text-[#1D1917]",
    mutedText: "text-[#665E57]",
    borderLight: "border-[#1D1917]/12",
    borderHover: "hover:border-[#1D1917]/35",
    primaryBtn:
      "bg-[#1D1917] text-[#FAF7F2] hover:bg-[#342D29]",
    secondaryBtn:
      "border-[#1D1917]/25 text-[#1D1917] hover:border-[#1D1917] hover:bg-[#EFE7DA]",
    darkPrimaryBtn:
      "bg-[#FAF7F2] text-[#1D1917] hover:bg-[#EFE7DA]",
    darkSecondaryBtn:
      "border-[#FAF7F2]/30 text-[#FAF7F2] hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10",
    tagLightBg: "bg-[#1D1917]/90 text-[#FAF7F2]",
    serifAccentClass: "font-serif-site italic font-normal text-[#665E57]",
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
  },
}

