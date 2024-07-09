import React from 'react';
import { Video } from '../common/Video';
import Navbar from '../navbar/Navbar';
import Image from 'next/image';

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

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex justify-center">
      <HeroVideo />
      <Navbar />
      <div className="flex flex-col relative w-full z-10 items-center justify-center h-full gap-10">
        <Image
          src={'/hero/logo.svg'}
          alt="Logo de Castro Fernandez Vignau y Pianovi"
          width={757}
          height={332}
        />
        <h1 className="uppercase text-white text-[28px] leading-7 font-serif">
          Profesionales en ciencias económicas
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
