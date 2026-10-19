import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Montserrat({
  variable: "--font-sans-site",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Micael & Vanusa | Memória Viva Fotografia",
  description:
    "Micael & Vanusa transformam instantes reais em memória viva: ensaios de casais, famílias, gestantes, casamentos e aniversários com sensibilidade e arte.",
  keywords: [
    "fotografia",
    "fotógrafo",
    "ensaio de casal",
    "ensaio de família",
    "gestante",
    "casamento",
    "aniversário",
    "Micael e Vanusa",
    "Memória Viva Fotografia",
  ],
  authors: [{ name: "Micael & Vanusa" }],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Micael & Vanusa | Memória Viva Fotografia",
    description:
      "O tempo passa. A memória fica. Fotografia que conta histórias de verdade.",
    siteName: "Micael & Vanusa — Memória Viva Fotografia",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${serif.variable} ${sans.variable} antialiased bg-white text-neutral-900 font-sans`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
