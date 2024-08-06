import Image from 'next/image';
import Heading from '../common/Heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const OurTeamSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="equipo"
      className="relative pt-32 lg:py-32 z-0"
      ref={ref}
      aria-labelledby="nuestro-equipo-titulo"
    >
      <TeamBackground />
      <motion.div
        className={`relative flex flex-col items-center justify-center max-w-desktop w-full lg:px-7 mx-auto gap-10 z-10 lg:flex-row lg:items-start`}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <Heading
          id="nuestro-equipo-titulo"
          text="NUESTRO EQUIPO"
          variant="light"
        />
        <motion.div
          className="w-full text-center lg:text-left lg:max-w-[700px]"
          variants={containerVariants}
        >
          <motion.p
            className="text-white lg:text-lg mb-12 px-7"
            variants={textVariants}
          >
            Nuestro equipo está compuesto por especialistas calificados en las
            diversas áreas de servicios que demanda el mercado, incluyendo
            auditoría, impuestos, costos, laboral, economía, finanzas y
            negocios.
            <br />
            <br />
            Una trayectoria de más de 30 años nos permite combinar la
            experiencia de los socios fundadores con la energía y el talento de
            los socios más jóvenes.
          </motion.p>
          <motion.div
            className="relative w-full h-[230px] rounded-lg lg:w-[700px]"
            variants={imageVariants}
          >
            <Image
              src="/our-team/our-team.jpg"
              alt="Imagen de nuestro equipo trabajando"
              fill
              style={{
                objectFit: 'cover',
              }}
              className="rounded-[4px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurTeamSection;

function TeamBackground() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full z-0 opacity-50"
        aria-hidden="true"
      >
        <Image
          src="/our-team/our-team-bg.jpg"
          alt="Fondo de nuestro equipo trabajando"
          fill
          style={{
            objectFit: 'cover',
            filter: 'grayscale(100%)',
          }}
        />
      </div>
      <div
        className="absolute top-0 left-0 bg-black w-full h-full z-0 opacity-85"
        aria-hidden="true"
      ></div>
    </>
  );
}
