"use client";
import Link from "next/link";
import React from "react";
import { useTranslations } from "use-intl";

export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer
      className="flex relative h-[250px] bg-footer-color text-white w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%" }}
    >
      <div className="relative h-[calc(100vh+250px)] -top-[100vh] w-full">
        <div className="sticky top-[calc(100vh-250px)] h-[250px] p-4 md:p-16">
          <section className="flex justify-between flex-col md:flex-row gap-4">
            <aside className="flex flex-row items-center w-full gap-4">
              <span className="border-purple-700 rounded-2xl border-[1px] px-2 py-1 flex flex-col">
                v1.0.0
              </span>
              <h3 className="text-white-opacity">{t("update")} 25/11/2024</h3>
            </aside>
            <aside className="flex w-full md:w-[700px] flex-col md:flex-row gap-4">
              <div className="flex flex-col min-w-60 *:border-b-[1px] *:w-fit *:border-dotted *:border-white *:border-opacity-30">
                <Link
                  href="https://www.linkedin.com/in/brayangmz"
                  target="_blank"
                >
                  Linkedin
                </Link>
                <Link href="https://github.com/brayang222" target="_blank">
                  GitHub
                </Link>
                <Link href="https://x.com/BrayanGmz_" target="_blank">
                  Twitter
                </Link>
              </div>
              <div className="flex flex-col w-[700px] gap-3">
                <p className="text-nowrap">{t("build")}</p>
                <Link
                  href="mailto:brayangomez521@gmail.com"
                  className="border-b-[1px] w-fit border-dotted border-white border-opacity-30"
                  target="_blank"
                >
                  brayangomez521@gmail.com
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </footer>
  );
};
