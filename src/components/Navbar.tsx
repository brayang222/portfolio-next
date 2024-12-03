"use client";

import clsx from "clsx";
import Link from "next/link";
import { ButtonLang } from "./Button/ButtonLang";
import { usePathname } from "next/navigation";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const isBaseUrl = pathname.split("/")[2];

  return (
    <nav className="fixed flex items-center top-0 w-full bg-black-custom text-white border-white border-opacity-10 border-b-[1px] z-10">
      <section className="flex w-full justify-between p-4 lg:px-12 md:px-4">
        <aside className="flex gap-8">
          <Link href="/" className="flex">
            Brayan Vargas
          </Link>
          <ButtonLang />
        </aside>
        <aside className=" lg:w-[700px] hidden md:flex">
          <div className="min-w-60">
            <p>{t("rol")}</p>
          </div>
          <div>
            <p className="flex ">Medellín, Colombia</p>
          </div>
        </aside>
      </section>
      <div
        className={clsx("bg-black-custom w-16 h-full", {
          hidden: !isBaseUrl,
        })}
      >
        <Link href="/">
          <AiOutlineFullscreenExit className="gap-16" />
        </Link>
      </div>
    </nav>
  );
};
