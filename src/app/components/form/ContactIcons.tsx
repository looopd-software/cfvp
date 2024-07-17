import WhatsAppIcon from '../form/WhatsAppIcon';
import MapsIcon from '../form/MapsIcon';
import EmailIcon from '../form/PhoneIcon';
import ContactIconItem from './ContactIconItem'; // Adjust the path if necessary
import Link from 'next/link';

const ContactIcons = () => {
  return (
    <div className="absolute top-4 lg:top-auto lg:bottom-4 right-4 flex flex-col gap-4 items-end">
      <Link
        href="https://maps.app.goo.gl/fhrc2Egig33ris2q9"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <ContactIconItem>
          <MapsIcon />
          <span>Córdoba 1026, Rosario, Argentina</span>
        </ContactIconItem>
      </Link>

      <Link href="tel:+54 9 3416 25-3526" passHref>
        <ContactIconItem>
          <WhatsAppIcon />
          <span>(704) 555-0127</span>
        </ContactIconItem>
      </Link>

      <Link href="mailto:contacto@cfvp.com.ar">
        <ContactIconItem>
          <EmailIcon />
          <span>contacto@cfvp.com.ar</span>
        </ContactIconItem>
      </Link>
    </div>
  );
};

export default ContactIcons;
