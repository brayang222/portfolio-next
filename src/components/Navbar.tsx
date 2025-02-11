"use client";

import clsx from "clsx";
import Link from "next/link";
import { ButtonLang } from "./Button/ButtonLang";
import { usePathname } from "next/navigation";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useTranslations } from "next-intl";
import Magnetic from "./common/Magnetic";

export const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const isBaseUrl = pathname.split("/")[2];

  return (
    <nav className="fixed flex items-center top-0 w-full bg-black-custom/50 text-white border-white border-opacity-10 border-b-[1px] z-20 backdrop-blur-sm px-12 py-4">
      <section className="flex w-full justify-between ">
        <aside className="flex gap-8">
          <Link href="/" className="flex">
            Brayan Gómez
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
      <Magnetic>
        <Link
          href="/"
          className={clsx(
            "bg-black-custom/60 h-full p-2 rounded-full before:w-full before:h-full before:absolute before:-left-10 before:top-0 hover:before:left-0 before:rounded-full before:bg-purple-600 relative overflow-hidden before:transition-all group",
            {
              hidden: !isBaseUrl,
            }
          )}
        >
          <AiOutlineFullscreenExit className="gap-16 size-6 relative" />
        </Link>
      </Magnetic>
    </nav>
  );
};
