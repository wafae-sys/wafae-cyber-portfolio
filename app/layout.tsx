import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import FrozenBackground from "@/components/FrozenBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Script from "next/script";
import MagneticTargets from "@/components/MagneticTargets";
import SeasonProvider, {
  SEASON_BOOT_SCRIPT,
} from "@/components/SeasonProvider";
import LanguageProvider, {
  LANG_BOOT_SCRIPT,
} from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EL FATMAOUI Wafae | Portfolio Cybersécurité",
  description:
    "Portfolio de Wafae El Fatmaoui, élève ingénieure en cybersécurité et infrastructures réseaux. Découvrez mes projets en sécurité réseau, DevSecOps, détection d'intrusions et supervision.",

  authors: [{ name: "Wafae El Fatmaoui" }],

  openGraph: {
    title: "EL FATMAOUI Wafae | Portfolio Cybersécurité",
    description:
      "Découvrez mes projets en cybersécurité, sécurité réseau, DevSecOps, détection d'intrusions et supervision.",
    type: "website",
    locale: "fr_FR",
  },

  twitter: {
    card: "summary_large_image",
    title: "EL FATMAOUI Wafae | Portfolio Cybersécurité",
    description:
      "Portfolio de Wafae El Fatmaoui, élève ingénieure en cybersécurité et infrastructures réseaux.",
  },
};

export const viewport: Viewport = {
  themeColor: "#171126",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Run synchronously before hydration to apply the user's stored
            season + language â€” avoids a flash of the default values. */}

      </head>
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <SeasonProvider>
            <FrozenBackground />
            <ScrollProgress />
            {children}
            <CustomCursor />
            <MagneticTargets />
          </SeasonProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
