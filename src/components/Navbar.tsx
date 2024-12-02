"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { ButtonLang } from "./Button/ButtonLang";

export const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("navbar");

  return (
    <nav className="fixed flex items-center top-0 w-full bg-black-custom text-white border-white border-opacity-10 border-b-[1px] z-10">
      <section className="flex w-full justify-between p-4 lg:px-12 md:px-4">
        <div className="flex gap-8">
          <h1 className="flex">Brayan Vargas</h1>
          <ButtonLang />
        </div>
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
          hidden: pathname.endsWith("/es") || pathname.endsWith("/en"),
        })}
      >
        <Link href="/">
          <AiOutlineFullscreenExit className="gap-16" />
        </Link>
      </div>
    </nav>
  );
};
