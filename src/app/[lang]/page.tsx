import { Body } from "@/components/Body";

const BASE_URL = "https://brayangomez.xyz";

const JOB_TITLE = {
  es: "Desarrollador Web Freelance",
  en: "Freelance Web Developer",
};

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const jobTitle = lang === "en" ? JOB_TITLE.en : JOB_TITLE.es;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brayan Gómez",
    url: BASE_URL,
    image: `${BASE_URL}/logo.webp`,
    jobTitle,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressCountry: "CO",
    },
    sameAs: [
      "https://www.instagram.com/universoweb_",
      "https://www.tiktok.com/@universoweb_",
      "https://www.facebook.com/profile.php?id=61572509622812",
      "https://github.com/brayang222",
      "https://www.linkedin.com/in/brayangmz",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Body />
    </>
  );
}
