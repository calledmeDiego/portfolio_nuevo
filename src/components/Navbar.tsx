import { useEffect, useRef, type RefObject } from "react";

import '../styles/Navbar.css'


interface NavbarProps {
  navOpen: boolean;
}

interface NavItem {
  label: string;
  link: string;
  className: string;
  ref?: RefObject<HTMLAnchorElement | null>;
  id?: string
}

export const Navbar = ({ navOpen }: NavbarProps) => {
   const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    // console.log(lastActiveLink.current);
    // console.log(activeBox.current);

    activeBox.current!.style.top = `${lastActiveLink.current?.offsetTop ?? 0}px`;

    activeBox.current!.style.left = 
    `${lastActiveLink.current?.offsetLeft ?? 0}px`;

    activeBox.current!.style.width =  `${lastActiveLink.current?.offsetWidth ?? 0}px`;

    activeBox.current!.style.height = `${lastActiveLink.current?.offsetHeight ?? 0}px`;
  }

  useEffect(initActiveBox, []);
  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Remover clase del elemento anterior
    lastActiveLink.current?.classList.remove('active');
    // Agregar clase al nuevo elemento clickeado
    event.currentTarget.classList.add('active');

     // Actualizar la referencia
    lastActiveLink.current = event.currentTarget;

    // Actualizar posición del activeBox (si es necesario)
     activeBox.current!.style.top = `${event.currentTarget?.offsetTop ?? 0}px`;

    activeBox.current!.style.left = 
    `${event.currentTarget?.offsetLeft ?? 0}px`;

    activeBox.current!.style.width =  `${event.currentTarget?.offsetWidth ?? 0}px`;

    activeBox.current!.style.height = `${event.currentTarget?.offsetHeight ?? 0}px`;
  }

  const navItems: NavItem[] = [
    {
      label: "Inicio",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "Sobre Mi",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Portafolio",
      link: "#work",
      className: "nav-link",
    },
    // {
    //   label: "Reviews",
    //   link: "#reviews",
    //   className: "nav-link",
    // },
    {
      label: "Contacto",
      link: "#contact",
      className: "nav-link",
      id:'contact1'
    },
  ];

  return (
    <nav className={`font-broken navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className, ref,id }, key) => (
        <a id={id} href={link} key={key} ref={ref} className={className} onClick={activeCurrentLink}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
