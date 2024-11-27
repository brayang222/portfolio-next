import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer
      className="flex relative h-[250px] bg-footer-color text-white w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%" }}
    >
      <div className="relative h-[calc(100vh+250px)] -top-[100vh] w-full">
        <div className="sticky top-[calc(100vh-250px)] h-[250px] p-16">
          <section className="flex justify-between">
            <aside className="flex flex-row items-center w-full gap-4">
              <span className="border-purple-700 rounded-2xl border-[1px] px-2 py-1 flex flex-col">
                v1.0.0
              </span>
              <h3 className="text-white-opacity">Last Update 25/11/2024</h3>
            </aside>
            <aside className="flex w-[700px]">
              <div className="flex flex-col min-w-60 *:border-b-[1px] *:w-fit *:border-dotted *:border-white *:border-opacity-30">
                <Link href="https://www.linkedin.com/in/brayangmz">
                  Linkedin
                </Link>
                <Link href="https://www.linkedin.com/in/brayangmz">GitHub</Link>
                <Link href="https://www.linkedin.com/in/brayangmz">
                  Twitter
                </Link>
              </div>
              <div className="flex flex-col w-[700px] gap-3">
                <p className="text-nowrap">Let's Build something together</p>
                <Link
                  href="https://www.linkedin.com/in/brayangmz"
                  className="border-b-[1px] w-fit border-dotted border-white border-opacity-30"
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
