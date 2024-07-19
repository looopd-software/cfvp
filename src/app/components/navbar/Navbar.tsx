import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';
import BurguerIcon from '../icons/BurguerIcon';
import XIcon from '../icons/XIcon';
import MobileNavbar from './MobileNavbar';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  const navbarVariants = {
    hidden: { y: '-50%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-black' : 'bg-transparent'} transition-colors duration-300`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="flex justify-between w-full container items-center py-2 md:py-4 mr-4 lg:mx-auto">
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
