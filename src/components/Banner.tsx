"use client";
import { Image } from "@nextui-org/image";
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

export const Banner = () => {
  const t = useTranslations("universo-web");
  return (
    <div className="min-h-screen bg-gradient-to-b from-black-custom via-purple-950 to-black-custom-900 from-30% text-white flex flex-col items-center justify-center px-4 pt-8">
      <div className="flex flex-col items-center mt-10">
        <Image
          src="/logo.webp"
          alt="ZeenTro Logo"
          className="md:w-24 md:h-24 w-16 h-16"
          width={0}
          height={0}
        />
        <h1 className="md:text-4xl text-xl font-bold mt-2">Brayan Gómez</h1>
      </div>
      <p className="text-center md:text-lg text-sm mt-4 max-w-lg">
        {t("paragraph")}
      </p>
      <p className="text-gray-400 mt-2 md:text-lg text-sm">
        {t("building")}
        <span className="text-purple-500"> @universoweb_</span>
      </p>
      <div className="flex space-x-6 mt-6 text-2xl">
        <Link
          href="https://wa.me/3126177800#"
          className="hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </Link>
        <Link
          href="https://www.instagram.com/universoweb_"
          className="hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.tiktok.com/@universoweb_"
          className="hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61572509622812"
          className="hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://github.com/brayang222"
          className="hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/brayangmz/?originalSubdomain=co"
          className="hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </div>

      <div className="my-8 w-full max-w-md ">
        <h3 className="text-gray-500 text-sm uppercase">{t("contact")}</h3>
        <Link
          href="https://wa.me/3126177800"
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
  );
};
