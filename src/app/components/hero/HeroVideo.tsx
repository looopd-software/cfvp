import React from 'react';
import { useRef, useState, useEffect } from 'react';

const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPath, setVideoPath] = useState('/hero/hero-video.mp4');

  useEffect(() => {
    const updateVideoPath = () => {
      const newVideoPath =
        window.innerWidth < 600
          ? '/hero/hero-video-mobile.mp4'
          : '/hero/hero-video.mp4';
      if (videoRef.current && newVideoPath !== videoPath) {
        videoRef.current.src = newVideoPath;
        videoRef.current.load();
        setVideoPath(newVideoPath);
      }
    };

    updateVideoPath();
    window.addEventListener('resize', updateVideoPath);

    return () => window.removeEventListener('resize', updateVideoPath);
  }, [videoPath]);

  return (
    <React.Fragment>
      <div className="w-full h-full bg-[#1A1A1AA6] absolute top-0 left-0 z-0"></div>
      <video
        ref={videoRef}
        className={`absolute object-cover w-full h-full overflow-visible -z-10 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2`}
        playsInline
        autoPlay
        loop
        muted
        preload="metadata"
        width="100%"
        height="auto"
      >
        <source src={videoPath} type="video/mp4" />
      </video>
    </React.Fragment>
  );
};

export default HeroVideo;
