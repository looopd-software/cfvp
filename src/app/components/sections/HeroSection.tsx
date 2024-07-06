import React from 'react';
import { Video } from '../common/Video';

const HeroVideo = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-[#1A1A1AA6] absolute top-0 left-0 z-20"></div>
      <Video
        className="object-cover w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        path="/hero/hero-video.mp4"
      />
    </React.Fragment>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-red-500 flex justify-center items-center">
      <HeroVideo />
    </div>
  );
};

export default HeroSection;
