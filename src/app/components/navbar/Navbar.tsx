import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 w-full px-auto z-50">
    <div className="flex justify-between w-full container">
      <Link href={''}>
        <Image
          src={'/hero/isotipo.png'}
          width={62 * 1.5}
          height={76 * 1.5}
          alt="Isotipo de Castro Fernandez Vignau y Pianovi"
        />
      </Link>
      <NavLinks />
    </div>
  </nav>
);

export default Navbar;
