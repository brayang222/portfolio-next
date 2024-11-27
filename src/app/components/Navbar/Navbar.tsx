"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed flex items-center top-0 w-full bg-black-custom text-white border-white border-opacity-10 border-b-[1px] ">
      <section className="flex w-full justify-between p-4 lg:px-12 md:px-4">
        <h1 className="flex">Brayan Vargas</h1>
        <aside className="flex w-[700px]">
          <div className="min-w-60">
            <p>Web designer</p>
          </div>
          <div>
            <p className="flex ">Medellín, Colombia</p>
          </div>
        </aside>
      </section>
      <div
        className={clsx("bg-black-custom w-16 h-full", {
          hidden: pathname === "/",
        })}
      >
        <Link href="/">
          <AiOutlineFullscreenExit className="gap-16" />
        </Link>
      </div>
    </nav>
  );
};
