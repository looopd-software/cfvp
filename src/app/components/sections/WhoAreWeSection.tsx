import Heading from '../common/Heading';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariants = {
  hidden: { y: '10%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const WhoAreWeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="nosotros"
      className="w-full bg-white py-24 overflow-hidden relative"
      ref={ref}
      aria-labelledby="encabezado-quienes-somos"
    >
      <Image
        src="/hero/isotipo-2.png"
        width={600}
        height={1000}
        alt="Isotipo de Castro Fernandez Vignau y Pianovi"
        className="absolute mix-blend-luminosity -top-1/2 opacity-70"
      />
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={{
          delay: 0.3,
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        className="relative flex flex-col items-center justify-center gap-11 z-0 max-w-desktop mx-auto px-7"
      >
        <Heading id="encabezado-quienes-somos" text="QUIÉNES SOMOS" variant="dark" />
        <p className="text-black text-lg lg:text-2xl text-center">
          Somos un estudio de profesionales en ciencias económicas de la ciudad
          de Rosario. Nuestra misión es analizar y resolver problemas
          empresariales, comprometidos desde siempre con dos valores
          fundamentales: una sólida ética de trabajo, y el crecimiento de
          nuestros clientes.
        </p>
      </motion.div>
    </section>
  );
};

export default WhoAreWeSection;
