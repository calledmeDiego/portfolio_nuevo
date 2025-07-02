import { ButtonPrimary } from "./Button";
import "../styles/Footer.css";

const sitemap = [
  {
    label: 'Inicio',
    href: '#home'
  },
  {
    label: 'Sobre Mí',
    href: '#about'
  },
  {
    label: 'Portafolio',
    href: '#work'
  },
  {
    label: 'Contacto',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/calledmeDiego'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/diego-gabriel-6a5109276/'
  },
  // {
  //   label: 'Twitter X',
  //   href: ''
  // },
  // {
  //   label: 'Instagram',
  //   href: ''
  // },
  // {
  //   label: 'CodePen',
  //   href: ''
  // }
];

export const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] font-broken headline-footer reveal-up">
                        ¡Empecemos a trabajar!
                    </h2>

                    <ButtonPrimary label="Start Project"
                    href="mailto:diegogabo17@gmail.com"
                    icon="chevron_right" classes="reveal-up"/>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20 font-text">

                  <div>
                    <p className="mb-2 reveal-up">
                      Sitio
                    </p>

                    <ul className="">
                      {
                        sitemap.map(({label, href},key) => (
                          <li key={key}>
                            <a href={href}
                            target="_blank"
                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                              {label}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                  <div >
                    <p className="mb-2 reveal-up">
                      Redes Sociales
                    </p>

                    <ul className="">
                      {
                        socials.map(({label, href},key) => (
                          <li key={key}>
                            <a href={href}
                            
                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                              {label}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>


            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
              <h1 className="text-2xl">
                DL
              </h1>
              {/* <a href="" className="">
                <img src="ssss" alt="Logo" 
                width={40} height={40} />
              </a> */}

              <p className="text-zinc-500 text-sm ">
                &copy; 2025 <span className="text-zinc-200">Diego Gabriel</span>
              </p>
            </div>
        </div>
    </footer>
  )
}
