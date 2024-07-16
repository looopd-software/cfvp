import Image from 'next/image';
import Heading from '../common/Heading';
import ServicesAccordions from '../services/ServiceAccordions';
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="servicios" className="bg-white" ref={ref}>
      <motion.div
        className="flex flex-col justify-center items-center container py-20 gap-7 lg:py-32 lg:gap-12 max-w-desktop"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <Heading text="NUESTROS SERVICIOS" variant="dark" />
        </motion.div>
        <motion.p className="text-center px-7" variants={itemVariants}>
          Nos distinguimos en el mercado por ofrecer soluciones integrales,
          incluso en los servicios más convencionales. Contamos con el know-how
          para asesorar, pero también para involucrarnos en la gestión de la
          empresa, brindando soporte interno o externo para sus diferentes
          requerimientos.
        </motion.p>
        <motion.div variants={itemVariants}>
          <ServicesAccordions />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
