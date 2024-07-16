import Image from 'next/image';
import { Video } from '../common/Video';

const OurSpaceSection = () => {
  return (
    <section id="espacio" className="relative h-auto">
      <div className="flex flex-col lg:min-h-screen h-auto gap-1">
        <VideoRow />

        <ImagesRow />
      </div>
    </section>
  );
};

export default OurSpaceSection;

function VideoRow() {
  return (
    <div className="relative flex-grow h-[30vh] md:h-[45vh] lg:h-[70vh] 2xl:h-[80vh] ">
      <Video
        className="absolute w-full h-full object-cover"
        path="/space/space.mp4"
      />
    </div>
  );
}

function ImagesRow() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-1 flex-grow lg:h-[60vh] ">
        <div className="relative w-full h-[33vh] md:h-[45vh] lg:h-full lg:w-1/3">
          <Image
            src="/space/space-1.jpg"
            alt="Image 1 of our office"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '50% 70%',
            }}
          />
        </div>
        <div className="relative w-full h-[33vh] md:h-[45vh] lg:h-full lg:w-1/3">
          <Image
            src="/space/space-2.jpg"
            alt="Image 2 of our office"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'bottom',
            }}
          />
        </div>
        <div className="relative w-full h-[33vh] md:h-[45vh] lg:h-full lg:w-1/3">
          <Image
            src="/space/space-3.jpg"
            alt="Image 3 of our office"
            fill
            className="transform object-cover"
            style={{
              objectPosition: 'bottom',
            }}
          />
        </div>
      </div>
    </>
  );
}
