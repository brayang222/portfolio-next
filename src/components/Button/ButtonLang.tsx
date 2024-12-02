import { usePathname, useRouter } from "next/navigation";
import "./button.css";

export const ButtonLang = () => {
  const router = useRouter();
  const pathname = usePathname();
  const es = pathname.startsWith("/es");

  const changeIdiom = () => {
    const path = es
      ? pathname.replace("/es", "/en")
      : pathname.replace("/en", "/es");
    router.push(path, { scroll: false });
  };
  return (
    <button onClick={changeIdiom}>
      <div className="scene">
        <div className="cube">
          <span className="side top">
            {pathname.startsWith("/es") ? "Inglés" : "Spanish"}
          </span>
          <span className="side front">
            {pathname.startsWith("/en") ? "English" : "Español"}
          </span>
        </div>
      </div>
    </button>
  );
};
