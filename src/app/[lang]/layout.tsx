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

const BASE_URL = "https://brayangomez.xyz";

const SEO_COPY = {
  es: {
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
    ogDescription:
      "Explora proyectos reales y descubre cómo una página web profesional puede ayudar a tu negocio a vender más. Cotización gratuita por WhatsApp.",
    twitterDescription:
      "Desarrollador web freelance especializado en páginas web y plataformas que ayudan a tu negocio a vender más.",
    imageAlt: "Brayan Gómez - Desarrollo Web para Negocios",
  },
  en: {
    title: "Brayan Gómez | Web Development for Businesses",
    description:
      "Freelance web developer. I design and build websites, online stores, and custom platforms that help your business sell more online. Free quote on WhatsApp.",
    keywords: [
      "web developer",
      "freelance web developer",
      "websites for businesses",
      "online store",
      "landing page",
      "business digitalization",
      "web development",
      "Brayan Gómez",
    ],
    ogDescription:
      "Explore real projects and see how a professional website can help your business sell more. Free quote on WhatsApp.",
    twitterDescription:
      "Freelance web developer specialized in websites and platforms that help your business sell more.",
    imageAlt: "Brayan Gómez - Web Development for Businesses",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? SEO_COPY.en : SEO_COPY.es;

  return {
    metadataBase: new URL(BASE_URL),
    title: copy.title,
    description: copy.description,
    keywords: [...copy.keywords],
    authors: [{ name: "Brayan Gómez", url: BASE_URL }],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.ogDescription,
      url: `${BASE_URL}/${lang}`,
      type: "website",
      images: [
        {
          url: "/portafolio-og.webp",
          width: 1200,
          height: 630,
          alt: copy.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.twitterDescription,
      images: [
        {
          url: "/portafolio-og.webp",
          alt: copy.imageAlt,
        },
      ],
    },
  };
}

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
