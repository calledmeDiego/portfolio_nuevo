import { ButtonOutline, ButtonPrimary } from "./Button";

import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-26 relative overflow-hidden h-screen hero-bg-blur sm:pb-5 "
    >
      <img
        className="grunge-bg absolute inset-0 w-full h-full object-cover pointer-events-none "
        src="https://i.ibb.co/Fbcxtxrq/yellow-grunge.jpg"
        style={{ zIndex: -1 }}
      />
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="hidden lg:block">
          <figure className="relative  w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden p-6 backdrop-blur-md bg-zinc-800/50 ring-2 ring-inset ring-zinc-50/10 shadow-xl">
            <img
              src="https://calledmeDiego.github.io/portfolio_nuevo/svg/undraw_hello_.svg"
              width={656}
              height={800}
              alt="Diego Gabriel"
              className="w-full h-auto headline-title my-5"
            />
          </figure>
        </div>

        <div>
          <div className="flex items-center gap-3 justify-end">
            <figure className="img-box w-9 h-9 rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=""
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide font-text">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Disponible para trabajar
            </div>
          </div>
          <div className="flex justify-end">
            <h2 className="headline-1 headline-title max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 font-broken text-right ">
              Construyendo Soluciones Digitales a Gran Escala
              {/* Building Scalable Modern Websites for the Future */}
            </h2>
            
          </div>

          <div className="flex items-center gap-3 justify-end sm:mb-2 lg:mb-0">
            <ButtonPrimary
              href="https://drive.google.com/file/d/1hE5hC3NXpmgRtAr1lgS_FlUmrhj55Zaq/view?usp=sharing"
              label="Descargar CV"
              classes=""
              icon="download"
              target="_blank"
            />

            <ButtonOutline
              label="Desplácese"
              href="#about"
              icon="arrow_downward"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
