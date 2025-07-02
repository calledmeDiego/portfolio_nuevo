import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { ReactLenis } from "lenis/react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up") as HTMLElement[];

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,

          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out ",
      });
    });

    // gsap.fromTo(".grunge-bg",
    //   {
    //     opacity: 0,
    //     scale: 3,
    //     filter: "contrast(0.5) brightness(1.5)"
    //   },
    //   {
    //     opacity: 1, // Ajusta según tu imagen
    //     scale: 1,
    //     filter: "contrast(1.3) brightness(0.9)",
    //     duration: 1,
    //     ease: "power3.out"
    //   }
    // );

    // gsap.to(".grunge-bg", {
    //   y: -30,
    //   scrollTrigger: {
    //     trigger: "#home",
    //     start: "top top",
    //     end: "bottom 20%",
    //     scrub: 0.5,
    //     markers: true
    //   }
    // });

    gsap.to(".hero-bg-blur", {
      filter: "blur(200px)",
      backgroundColor: "#18181b",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });

    // Animación para el TÍTULO
    gsap.fromTo(
      ".headline-title",
      {
        y: 50,
        opacity: 0,
        skewY: 5, // Efecto de inclinación sutil
      },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.5,
        ease: "back.inOut(1)", // Efecto elástico suave
        delay: 0.1, // Retraso para sincronizar con el fondo
      }
    );

    gsap.to(".headline-1", {
      backgroundPosition: "100% 50%",
      duration: 8,
      ease: "linear",
      repeat: -1,
      yoyo: true
    });
  });

  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      <Header />
      <main>
        {/* PRIMERA SECCION */}
        <Hero />
        {/* ACERCA DE...  */}
        <About />
        {/* HABILIDADES */}
        <Skill />
        {/* TRABAJO PREVIO */}
        <Work />
        {/* CONTACTO */}
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};
