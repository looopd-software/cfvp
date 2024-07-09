import React from 'react';
import { Video } from '../common/Video';
import Navbar from './Navbar';

const HeroVideo = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full bg-[#1A1A1AA6] absolute top-0 left-0 z-10"></div>
      <Video
        className={`absolute object-cover w-full h-full overflow-visible z-0
        lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2`}
        path="/hero/hero-video.mp4"
      />
    </React.Fragment>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <HeroVideo />
      <Navbar />
    </div>
  );
};

export default HeroSection;
