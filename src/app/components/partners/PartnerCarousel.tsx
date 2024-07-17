// MySwiperComponent.tsx
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { partners } from './partners';
import { PartnerProps } from './PartnerProps';
import Partner from './Partner';
import { SwiperButtonNext } from './SwipperButtonNext';
import { SwiperButtonPrev } from './SwipperButtonPrev';
import PartnerDetails from './PartnerDetails';

const MySwiperComponent: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1.7,
          spaceBetween: 16,
        },
        520: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      onSlideChange={handleSlideChange}
      centeredSlides={true}
      navigation={{
        prevEl: '.swiper-button-prev-custom',
        nextEl: '.swiper-button-next-custom',
      }}
      className="block lg:hidden w-full h-auto relative items-center"
    >
      {partners.map((partner: PartnerProps, index: number) => (
        <SwiperSlide key={`partner-carousel-${index}`}>
          <Partner
            url={partner.url}
            name={partner.name}
            lastName={partner.lastName}
            description={partner.description}
            selected={index === activeIndex}
            imageClassName={
              index === activeIndex ? 'w-full h-80' : 'w-full h-64'
            }
          />
        </SwiperSlide>
      ))}
      <div className="px-4 mt-10 w-full max-w-96 mx-auto">
        <PartnerDetails partner={partners[activeIndex]} />
      </div>
      <SwiperButtonPrev />
      <SwiperButtonNext />
    </Swiper>
  );
};

export default MySwiperComponent;
