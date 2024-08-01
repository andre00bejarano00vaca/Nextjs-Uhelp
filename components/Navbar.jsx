"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu(); // Cierra el menú si está abierto
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-black shadow-md">
      <Link href="/">
        <h1 className="text-3xl font-bold text-red-500">Uhelp</h1>
      </Link>
      <button 
        className="block lg:hidden p-2 text-gray-600" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>
      <ul className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute lg:static bg-black w-full lg:w-auto top-16 left-0 shadow-lg lg:shadow-none `}>
        <li className="p-2"><Link onClick={handleLinkClick} href="/">Home</Link></li>
        <li className="p-2"><Link onClick={handleLinkClick} href="/auxiliatura">Auxiliaturas</Link></li>
        <li className="p-2"><Link onClick={handleLinkClick} href="/Documentacion">Documentación</Link></li>
        <li className="p-2"><Link onClick={handleLinkClick} href="/donaciones">???</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;