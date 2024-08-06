import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroVideo from '../hero/HeroVideo';

const heroImageVariants = {
  hidden: { y: '10%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const heroTextVariants = {
  hidden: { y: '10%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex justify-center"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      aria-labelledby="hero-heading"
    >
      <div className="fixed top-0 h-[800px] w-full">
        <div className="relative w-full h-screen flex justify-center">
          <HeroVideo />

          <div className="flex flex-col relative w-full z-10 items-center justify-center h-full gap-10 max-w-desktop px-4">
            <motion.div
              className="relative w-full px-6 max-w-[757px] max-h-[332px]"
              initial="hidden"
              animate="visible"
              variants={heroImageVariants}
              transition={{
                delay: 0.05,
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              <Image
                src={'/hero/logo.svg'}
                alt="Logo de la empresa Castro Fernandez Vignau y Pianovi"
                width={757}
                height={332}
              />
            </motion.div>
            <motion.h1
              id="hero-heading"
              className="uppercase text-center text-white text-xl lg:text-[28px] leading-7 font-serif"
              initial="hidden"
              animate="visible"
              variants={heroTextVariants}
              transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              Profesionales en ciencias económicas
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
