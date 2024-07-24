import MapsIcon from '../form/MapsIcon';
import EmailIcon from '../form/PhoneIcon';
import ContactIconItem from './ContactIconItem';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactIcons = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const iconVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={ref}
      className="absolute top-4 lg:top-auto lg:bottom-4 right-4 flex flex-col gap-4 items-end"
    >
      <Link
        href="https://maps.app.goo.gl/r6wEVvH7MVenPK1y7"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={iconVariants}
        >
          <ContactIconItem>
            <MapsIcon />
            <span>
              Córdoba 1015, Piso 1 Oficina 1{' '}
              <span className="hidden lg:inline">, </span>
              <span className="block lg:hidden"></span>
              Rosario, Argentina
            </span>
          </ContactIconItem>
        </motion.div>
      </Link>

      <Link href="mailto:contacto@cfvp.com.ar">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={iconVariants}
        >
          <ContactIconItem>
            <EmailIcon />
            <span>contacto@cfvp.com.ar</span>
          </ContactIconItem>
        </motion.div>
      </Link>
    </div>
  );
};

export default ContactIcons;
