import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PartnerCarousel from '../partners/PartnerCarousel';
import Heading from '../common/Heading';
import PartnersDesktop from '../partners/PartnersDesktop';

const PartnersSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="socios"
      className="relative bg-black min-h-screen py-16 lg:py-32 flex flex-col items-center gap-10"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-col items-center gap-10 w-full"
      >
        <motion.div variants={itemVariants}>
          <Heading text="Socios" variant="light" />
        </motion.div>
        <PartnerCarousel />
        <motion.div variants={itemVariants}>
          <PartnersDesktop />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnersSection;
