import Link from "next/link";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/constants/contact";

type ServiceItem = { title: string; description: string };

export const Services = () => {
  const t = useTranslations("services");
  const tProcess = useTranslations("process");
  const tUniverso = useTranslations("universo-web");
  const items = t.raw("items") as ServiceItem[];
  const steps = tProcess.raw("steps") as string[];

  return (
    <section className="w-full lg:px-12 px-4 py-16 bg-black-custom text-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">{t("title")}</h2>
        <p className="text-white-opacity mt-4">{t("subtitle")}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-[#1d1d1d] rounded-2xl p-6 border border-white/5 hover:border-purple-600/50 transition"
          >
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-white-opacity">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-10 border-t border-white/10">
        <p className="text-center text-xs uppercase tracking-widest text-white-opacity mb-5">
          {tProcess("title")}
        </p>
        <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-sm">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-purple-500 font-silkscreen">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </span>
              {index < steps.length - 1 && (
                <span className="text-white-opacity">→</span>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href={buildWhatsAppLink(tUniverso("whatsappMessage"))}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-full font-semibold"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
};
