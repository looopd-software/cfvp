import Image from 'next/image';
import Heading from '../common/Heading';
import Form from '../form/Form';
import ContactIcons from '../form/ContactIcons';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const FormSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="contacto" className="relative bg-white" ref={ref}  aria-labelledby="contacto-titulo">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative flex flex-col-reverse lg:flex-row w-full h-full gap-10 lg:gap-20 "
      >
        <div className="relative w-full h-[50vh] lg:h-auto lg:w-2/5">
          <Image
            src="/form/form-bg.jpg"
            alt="Fotografia de las oficinas"
            fill
            style={{ objectFit: 'cover' }}
          />
          <ContactIcons />
        </div>
        <div className="w-full flex flex-col gap-6 mt-12 items-center lg:w-3/5 lg:max-w-[520px] lg:my-32">
        <Heading id="contacto-titulo" variant="dark" text="CONTÁCTANOS" />
          <Form />
        </div>
      </motion.div>
    </section>
  );
};

export default FormSection;
