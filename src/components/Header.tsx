import { useState } from 'react';
import { Navbar } from './Navbar';

import '../styles/Header.css'


export const Header = () => {

    const [navOpen, setNavOpen] = useState<boolean>(true);
   
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1 className='text-2xl'>DL</h1>

        <div className="relative md:justify-self-center">
          <button className="menu-btn"
          onClick={() => setNavOpen((prev)=> !prev)}>
            <span className="material-icons">{navOpen ? 'close': 'menu'}</span>
          </button>
          
            <Navbar navOpen={navOpen}/>
        </div>

        <a href="#contact" className="btn btn-secondary md:justify-self-end ">
            Contactame
        </a>
      </div>
    </header>
  );
};
