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
import { NextUIProvider } from "@nextui-org/system";

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
  title: "Brayan Vargas | Desarrollador Web",
  description: "Portafolio de Brayan Vargas, desarrollador web especializado en la digitalización de negocios mediante páginas web modernas y eficientes.",
  keywords: ["desarrollador web", "páginas web", "digitalización de negocios", "desarrollo web", "Brayan Vargas"],
  authors: [{ name: "Brayan Vargas", url: "https://brayangomez.xyz" }],
  openGraph: {
    title: "Brayan Vargas | Desarrollador Web",
    description: "Explora mi portafolio y descubre cómo puedo ayudar a digitalizar tu negocio con páginas web modernas y eficientes.",
    url: "https://brayangomez.xyz",
    type: "website",
    images: [
      {
        url: "/portafolio-og.webp",
        width: 1200,
        height: 630,
        alt: "Brayan Vargas - Desarrollador Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayan Vargas | Desarrollador Web",
    description: "Desarrollador web especializado en la digitalización de negocios.",
    images: [
      {
        url: "/portafolio-og.webp",
        alt: "Brayan Vargas - Desarrollador Web",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
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
        <NextUIProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
