import React from 'react';
import { Video } from '../common/Video';
import Image from 'next/image';
import { motion } from 'framer-motion';

const heroImageVariants = {
  hidden: { y: '10%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const heroTextVariants = {
  hidden: { y: '10%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const HeroVideo = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-[#1A1A1AA6] absolute top-0 left-0 z-0"></div>
      <Video
        className={`absolute object-cover w-full h-full overflow-visible -z-10
        lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2`}
        path="/hero/hero-video.mp4"
      />
    </React.Fragment>
  );
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex justify-center"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
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
                alt="Logo de Castro Fernandez Vignau y Pianovi"
                width={757}
                height={332}
              />
            </motion.div>
            <motion.h1
              className="uppercase text-center text-white text-xl lg:text-[28px] leading-7 font-serif px-2"
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
}
