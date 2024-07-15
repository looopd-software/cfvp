import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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

const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: '100%' },
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="absolute z-40 bg-black w-full h-screen top-0 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
