import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const links = [
  { href: '#hero', text: 'Inicio' },
  { href: '#nosotros', text: 'Nosotros' },
  { href: '#servicios', text: 'Servicios' },
  { href: '#equipo', text: 'Equipo' },
  { href: '#clientes', text: 'Clientes' },
  { href: '#socios', text: 'Socios' },
  { href: '#contacto', text: 'Contacto' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="absolute z-40 bg-black w-full h-screen top-0 flex flex-col items-center">
      <Image
        src={'/hero/logo.svg'}
        alt="Logo de Castro Fernandez Vignau y Pianovi"
        width={145}
        height={69}
        className="mt-3"
      />
      <div className="flex flex-col text-left w-full mt-6 text-white ">
        {links.map((link, index) => (
          <Link key={link.href} href={link.href} onClick={toggleMenu}>
            <div
              className={`py-4 pl-8 ${
                index !== links.length - 1
                  ? 'border-[#ffffff30] border-b-[0.5px]'
                  : ''
              }`}
            >
              {link.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
