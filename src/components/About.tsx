
export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ">
          <p className="font-text text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            ¡Hola y bienvenidos! Soy Diego, un desarrollador de software
            apasionado por crear soluciones funcionales, eficientes y
            visualmente atractivas. Combino lógica, diseño y experiencia técnica
            para construir aplicaciones web que no solo se ven bien, sino que
            también ofrecen un rendimiento sólido y una excelente experiencia de
            usuario. Me gusta innovar, encontrar respuestas y soluciones útiles
            que dejan huella en el mundo digital. Si tienes una idea, puedo
            ayudarte a convertirla en código.
            
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
            {/* {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-primary font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400 font-text">{label}</p>
              </div>
            ))} */}

            <h1 className="text-5xl ml-auto">DL</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
