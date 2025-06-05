import { ButtonOutline, ButtonPrimary } from "./Button";

import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-26">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg ">
              <img
                src="sss"
                width={40}
                height={40}
                alt="Henry clark portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide font-text">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 font-broken">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href=""
              label="Download CV"
              classes=""
              icon="download"
              target=""
            />

            <ButtonOutline
              label="Scroll down"
              href="#about"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-primary via-25% via-primary to-65% rounded-[60px] overflow-hidden p-10">
            <img
              src="/public/svg/avatar.svg"
              width={656}
              height={800}
              alt="Diego Gabriel"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
