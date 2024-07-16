import Image from 'next/image';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';
import BurguerIcon from '../icons/BurguerIcon';
import XIcon from '../icons/XIcon';
import MobileNavbar from './MobileNavbar';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarVariants = {
    hidden: { y: '-50%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 ${true ? ' pb-10 bg-gradient-to-b from-[#252525] to-transparent backdrop-blur-[2px]' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="flex justify-between w-full container items-center pt-4 mr-4 lg:mx-auto">
        <Link href="/">
          <Image
            src={'/hero/isotipo.png'}
            width={40 * 0.8}
            height={50 * 0.8}
            alt="Isotipo de Castro Fernandez Vignau y Pianovi"
          />
        </Link>
        <NavLinks className="hidden lg:flex" />
        <div className="lg:hidden lg:z-40">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="relative z-50"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <BurguerIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <MobileNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </motion.nav>
  );
};

export default Navbar;
