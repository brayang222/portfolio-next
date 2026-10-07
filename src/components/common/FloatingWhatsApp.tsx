"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/constants/contact";

export const FloatingWhatsApp = () => {
  const t = useTranslations("universo-web");

  return (
    <Link
      href={buildWhatsAppLink(t("whatsappMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14"
    >
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-slate-700 opacity-50 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 hover:bg-slate-700 border border-purple-600/30 transition shadow-lg shadow-black/40 text-white text-2xl">
        <FaWhatsapp />
      </span>
    </Link>
  );
};
