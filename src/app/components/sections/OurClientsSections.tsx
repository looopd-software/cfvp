import Image from 'next/image';
import AgropecuarioIcon from '../clients/AgropecuarioIcon';
import ComercioIcon from '../clients/ComercioIcon';
import IndustriaIcon from '../clients/IndustriaIcon';
import LogisticaIcon from '../clients/LogisticaIcon';
import RealEstateIcon from '../clients/RealEstateIcon';
import SaludIcon from '../clients/SaludIcon';
import ServiciosIcon from '../clients/ServiciosIcon';
import Heading from '../common/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

SwiperCore.use([Autoplay]);

interface IndustryItemProps {
  icon: React.ReactNode;
  title: string;
}

const IndustryItem = ({ icon, title }: IndustryItemProps) => {
  return (
    <motion.div className="flex flex-col items-center gap-2 w-[97px]">
      {icon}
      <p className="text-center">{title}</p>
    </motion.div>
  );
};

const OurClientsSections = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const swiperItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const industryItems = [
    { title: 'Actividad primaria', icon: <AgropecuarioIcon /> },
    { title: 'Comercio', icon: <ComercioIcon /> },
    { title: 'Industria', icon: <IndustriaIcon /> },
    { title: 'Logística y distribución', icon: <LogisticaIcon /> },
    { title: 'Real Estate', icon: <RealEstateIcon /> },
    { title: 'Salud', icon: <SaludIcon /> },
    { title: 'Servicios', icon: <ServiciosIcon /> },
  ];

  return (
    <section
      id="clientes"
      className="relative flex flex-col py-20 md:py-40 gap-10 justify-center bg-white overflow-hidden"
      ref={ref}
      aria-labelledby="nuestros-clientes-titulo"
    >
      <div className="absolute top-0 right-0 w-full" aria-hidden="true">
        <Image
          src="/hero/isotipo-2.png"
          width={600}
          height={1000}
          alt="Isotipo de Castro Fernandez Vignau y Pianovi"
          className="absolute"
          unselectable="on"
          draggable={false}
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container flex-col justify-start items-end gap-20 inline-flex"
      >
        <motion.div
          variants={itemVariants}
          className="flex-col md:flex-row justify-start md:justify-between items-center md:items-start gap-5 inline-flex text-center md:text-left"
        >
          <div className="grow shrink basis-0 px-6">
            <Heading
              id="nuestros-clientes-titulo"
              text="NUESTROS CLIENTES"
              variant="dark"
            />
          </div>
          <p className="grow shrink basis-0 text-base font-normal px-7 md:text-lg">
            Dirigimos nuestros servicios principalmente a empresas medianas de
            la región, muchas veces organizadas bajo el formato de empresas
            familiares, ya sean industriales, comerciales o de servicios.
            <br />
            <br />
            Estamos preparados para ofrecer soluciones tanto a corto como a
            largo plazo, desde intervenciones puntuales y transitorias hasta
            soluciones de consultoría permanente destinadas a estrechar y
            fortalecer la relación con nuestros clientes.
            <br />
            <br />
            Nuestra firma trasciende los límites habituales de un estudio
            contable, asumiendo funciones de asesoramiento y consultoría que
            pretenden impactar positivamente sobre los resultados de la
            compañía.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden md:flex justify-end gap-7"
        >
          {industryItems.map((item) => (
            <IndustryItem
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </motion.div>
      </motion.div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={3.75}
        className="flex md:hidden w-full"
        aria-label="Carrusel de industrias de clientes"
      >
        {industryItems.map((item) => (
          <SwiperSlide key={item.title} className="" style={{ width: '97px' }}>
            <motion.div
              variants={swiperItemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <IndustryItem title={item.title} icon={item.icon} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurClientsSections;
