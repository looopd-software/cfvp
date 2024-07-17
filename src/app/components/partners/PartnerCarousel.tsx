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
import { AnimatePresence, motion } from 'framer-motion';

const PartnerSwiper: FC = () => {
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
          spaceBetween: 8,
        },
        520: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
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
      <SwiperButtonPrev />
      <SwiperButtonNext />
      {partners.map((partner: PartnerProps, index: number) => (
        <SwiperSlide key={`partner-carousel-${index}`}>
          <Partner
            url={partner.url}
            name={partner.name}
            lastName={partner.lastName}
            description={partner.description}
            selected={index === activeIndex}
            className={index === activeIndex ? 'w-full' : 'w-4/5 mx-auto'}
            imageClassName={index === activeIndex ? 'w-full h-80' : ' h-64'}
          />
        </SwiperSlide>
      ))}
      <div className="px-4 mt-10 w-full max-w-96 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PartnerDetails partner={partners[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Swiper>
  );
};

export default PartnerSwiper;
