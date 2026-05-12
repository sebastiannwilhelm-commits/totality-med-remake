import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medical Spa Charleston | Aesthetic Services | Totality MediSpa",
  description:
    "Award-winning Totality Medispa in Charleston, SC—fillers, toxins, lasers, body sculpting, and personalized care under Dr. Nicole Nadel.",
  openGraph: {
    title: "Totality MediSpa | Charleston Medical Spa",
    description:
      "Defy reality with Charleston’s award-winning medispa—consultations, advanced aesthetics, and best-in-class hospitality.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0a09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="min-h-dvh bg-spa-ink font-sans text-stone-100">
        {children}
      </body>
    </html>
  );
}
