"use client";
import Link from "next/link";
import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import { WhatsAppSvg } from "./common/WhatsAppSvg";
import { useTranslations } from "next-intl";
import { Image } from "@heroui/react";
import { buildWhatsAppLink } from "@/constants/contact";

export const Banner = () => {
  const t = useTranslations("universo-web");
  const whatsappHref = buildWhatsAppLink(t("whatsappMessage"));

  return (
    <div className="min-h-screen bg-gradient-to-b from-black-custom via-purple-950 to-black-custom-900 from-30% text-white flex items-center px-4 lg:px-12 py-16">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/logo.webp"
              alt="ZeenTro Logo"
              className="md:w-24 md:h-24 w-16 h-16"
              width={0}
              height={0}
            />
            <h1 className="md:text-4xl text-xl font-bold mt-2">Brayan Gómez</h1>
            <p className="text-purple-400 text-xs md:text-sm mt-1 uppercase tracking-wider">
              {t("role")}
            </p>
          </div>
          <h2 className="font-extrabold md:text-3xl text-2xl mt-6 max-w-xl leading-tight">
            {t("headline")}
          </h2>
          <p className="md:text-lg text-sm mt-4 max-w-lg text-gray-300">
            {t("paragraph")}
          </p>

          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-purple-900/50 mt-8"
          >
            <FaWhatsapp className="text-2xl" />
            {t("ctaPrimary")}
          </Link>
          <p className="text-gray-400 text-xs mt-3">{t("ctaNote")}</p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-2 mt-8 text-sm text-gray-300 max-w-xl">
            <span>⭐ {t("statsExperience")}</span>
            <span>🚀 {t("statsProjects")}</span>
            <span>⚡ {t("statsResponse")}</span>
          </div>

          <p className="text-gray-500 mt-8 md:text-lg text-sm">
            {t("building")}
            <span className="text-purple-500"> @universoweb_</span>
          </p>
          <div className="flex space-x-6 mt-6 text-2xl">
            <Link
              href={whatsappHref}
              className="hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://www.instagram.com/universoweb_"
              className="opacity-60 hover:opacity-100 hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.tiktok.com/@universoweb_"
              className="opacity-60 hover:opacity-100 hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61572509622812"
              className="opacity-60 hover:opacity-100 hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://github.com/brayang222"
              className="opacity-60 hover:opacity-100 hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/brayangmz/?originalSubdomain=co"
              className="opacity-60 hover:opacity-100 hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <h3 className="text-gray-500 text-sm uppercase">{t("contact")}</h3>
            <Link
              href={whatsappHref}
              className="flex flex-col items-center justify-between bg-slate-800 hover:bg-gray-600 transition px-5 py-3 rounded-xl mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-60">
                <WhatsAppSvg />
              </div>
              <div>
                <span className="md:text-lg text-sm">💬 {t("whatsapp")}</span>{" "}
                <span>↗</span>
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/universoweb_"
              className="flex items-center justify-between bg-slate-800 hover:bg-gray-600 transition px-5 py-3 rounded-xl mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-4 md:text-lg text-sm">
                <FaInstagram /> {t("instagram")}
              </span>
              <span>↗</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@universoweb_"
              className="flex items-center justify-between bg-slate-800 hover:bg-gray-600 transition px-5 py-3 rounded-xl mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-4 md:text-lg text-sm">
                <FaTiktok /> {t("tiktok")}
              </span>
              <span>↗</span>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61572509622812"
              className="flex items-center justify-between bg-slate-800 hover:bg-gray-600 transition px-5 py-3 rounded-xl mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-4 md:text-lg text-sm">
                <FaFacebook /> {t("facebook")}
              </span>
              <span>↗</span>
            </Link>
            <Link
              href="https://github.com/brayang222"
              className="flex items-center justify-between bg-slate-800 hover:bg-gray-600 transition px-5 py-3 rounded-xl mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-4 md:text-lg text-sm">
                <FaGithub /> {t("github")}
              </span>
              <span>↗</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/brayangmz/?originalSubdomain=co"
              className="flex items-center justify-between bg-slate-800 hover:bg-gray-600 transition px-5 py-3 rounded-xl mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-4 md:text-lg text-sm">
                <FaLinkedin /> {t("linkedin")}
              </span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
