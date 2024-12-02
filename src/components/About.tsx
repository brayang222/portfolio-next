import { ABOUT } from "@/constants/about";
import { useTranslations } from "next-intl";
import React from "react";

export const About = () => {
  const t = useTranslations("about");

  return ABOUT.map((item) => (
    <section className="flex flex-col text-sm justify-between bg-black-custom text-white lg:px-12 px-4 mt-12 py-8 md:flex-row md:text-base ">
      <aside className="flex flex-col gap-4">
        <p className="text-white-opacity text-xs">{t(item.about)}</p>
        <p className="max-w-[50ch]">{t(item.aboutText)}</p>
      </aside>
      <aside className="flex flex-col mt-4 md:w-[700px]">
        <div className="flex flex-col md:columns-2 gap-4" key={item.team}>
          <div className="flex columns-2 gap-4">
            <h3 className="text-white-opacity text-xs min-w-60">
              {t(item.team)}
            </h3>
            <h3 className="text-white-opacity text-xs">
              {t(item.description)}
            </h3>
          </div>
          {item.teamDetails.map((team, index) => (
            <div className="flex columns-2 gap-4">
              <p className="w-full md:min-w-60">
                {t(`team-details.${index}.${team.teamName}`)}
                <br />
                {t(`team-details.${index}.${team.teamTimeLine}`)}
              </p>
              <p className="">
                {t(`team-details.${index}.${team.descriptionText}`)}
              </p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  ));
};
