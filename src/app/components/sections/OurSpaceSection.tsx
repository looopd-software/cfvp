import Image from 'next/image';
import { Video } from '../common/Video';

const OurSpaceSection = () => {
  return (
    <section id="espacio" className="relative h-auto">
      <div className="flex flex-col min-h-screen h-auto gap-1">
        <div className="relative flex-grow h-[600px]">
          <Video
            className="absolute w-full h-full object-cover"
            path="/space/space.mp4"
          />
        </div>
        <div className="flex gap-1">
          <div className="relative min-w-[500px] min-h-[500px] flex-grow">
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
          <div className="relative min-w-[500px] min-h-[500px] flex-grow">
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
          <div className="relative flex-grow min-w-[500px] min-h-[500px]">
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
      </div>
    </section>
  );
};

export default OurSpaceSection;
