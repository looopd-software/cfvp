export function Video({
  path,
  className,
}: {
  path: string;
  className: string;
}) {
  return (
    <video
      width="100%"
      height="auto"
      playsInline
      autoPlay
      loop
      muted
      preload="metadata"
      className={className}
    >
      <source src={path} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
