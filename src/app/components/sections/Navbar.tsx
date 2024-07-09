import Image from 'next/image';
import React from 'react';
import NavLinks from '../navbar/NavLinks';



const Navbar: React.FC = () => (
    <div className="container flex place-content-between relative z-10 items-center">
        <Image
            src={'/hero/isotipo.png'}
            width={62 * 1.5}
            height={76 * 1.5}
            alt="Isotipo de Castro Fernandez Vignau y Pianovi"
        />
        <NavLinks />
    </div>
);

export default Navbar;
