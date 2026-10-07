import type { Metadata } from "next";
import localFont from "next/font/local";
import { Silkscreen } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import "../globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { HeroUIProvider } from "@heroui/react";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title: "Brayan Gómez | Desarrollo Web para Negocios",
  description:
    "Desarrollador web freelance. Diseño y construyo páginas web, tiendas online y plataformas a medida que ayudan a tu negocio a vender más en internet. Cotización gratuita por WhatsApp.",
  keywords: [
    "desarrollador web",
    "desarrollador web freelance",
    "páginas web para negocios",
    "tienda online",
    "landing page",
    "digitalización de negocios",
    "desarrollo web",
    "Brayan Gómez",
  ],
  authors: [{ name: "Brayan Gómez", url: "https://brayangomez.xyz" }],
  openGraph: {
    title: "Brayan Gómez | Desarrollo Web para Negocios",
    description:
      "Explora proyectos reales y descubre cómo una página web profesional puede ayudar a tu negocio a vender más. Cotización gratuita por WhatsApp.",
    url: "https://brayangomez.xyz",
    type: "website",
    images: [
      {
        url: "/portafolio-og.webp",
        width: 1200,
        height: 630,
        alt: "Brayan Gómez - Desarrollo Web para Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayan Gómez | Desarrollo Web para Negocios",
    description:
      "Desarrollador web freelance especializado en páginas web y plataformas que ayudan a tu negocio a vender más.",
    images: [
      {
        url: "/portafolio-og.webp",
        alt: "Brayan Gómez - Desarrollo Web para Negocios",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!routing.locales.includes(lang as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable} font-geistMono  antialiased h-full w-full`}
      >
        <Toaster richColors></Toaster>
        <HeroUIProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
            <FloatingWhatsApp />
          </NextIntlClientProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
