export function Video({ path }: { path: string }) {
  return (
    <video
      width="100%"
      height="auto"
      playsInline
      autoPlay
      loop
      muted
      preload="metadata"
    >
      <source src={path} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

const HeroSection = () => {
  return (
    <div>
      <Video path="/hero/hero-video.mp4" />
    </div>
  );
};

export default HeroSection;
