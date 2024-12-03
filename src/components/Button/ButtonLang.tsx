import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import "./button.css";

export const ButtonLang = () => {
  const router = useRouter();
  const pathname = usePathname();
  const es = pathname.startsWith("/es");

  const locale = useLocale();

  const changeIdiom = () => {
    locale === "es"
      ? router.replace(pathname, { locale: "en", scroll: false })
      : router.replace(pathname, { locale: "es", scroll: false });
  };

  return (
    <button onClick={changeIdiom}>
      <div className="scene">
        <div className="cube">
          <span className="side top">
            {locale === "es" ? "Inglés" : "Spanish"}
          </span>
          <span className="side front">
            {locale === "en" ? "English" : "Español"}
          </span>
        </div>
      </div>
    </button>
  );
};
