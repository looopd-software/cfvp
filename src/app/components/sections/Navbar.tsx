// src/components/Navbar.tsx
import Image from 'next/image';
import React from 'react';
import NavLinks from '../navbar/NavLinks';
import Link from 'next/link';

const Navbar: React.FC = () => (
    <div className="absolute flex justify-between w-full container z-50">
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
);

export default Navbar;
