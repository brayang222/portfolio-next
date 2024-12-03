import gsap from "gsap";

export const animatePageIn = () => {
  const banner = document.getElementById("curved-banner");
  const text = document.getElementById("banner-text");

  if (banner) {
    const tl = gsap.timeline();

    tl.to(banner, {
      y: "-100%", // Mueve el div hacia arriba
      duration: 1.5,
      ease: "power3.inOut",
    });
  }
};
