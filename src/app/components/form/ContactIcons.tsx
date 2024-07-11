import WhatsAppIcon from '../form/WhatsAppIcon';
import MapsIcon from '../form/MapsIcon';
import EmailIcon from '../form/PhoneIcon';
import ContactIconItem from './ContactIconItem'; // Adjust the path if necessary

const ContactIcons = () => {
  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-4 items-end">
      <ContactIconItem href="https://maps.app.goo.gl/fhrc2Egig33ris2q9">
        <MapsIcon />
        <span>Córdoba 1026, Rosario, Argentina</span>
      </ContactIconItem>
      <ContactIconItem href="tel:+54 9 3416 25-3526">
        <WhatsAppIcon />
        <span>(704) 555-0127</span>
      </ContactIconItem>
      <ContactIconItem href="mailto:contacto@cfvp.com.ar">
        <EmailIcon />
        <span>contacto@cfvp.com.ar</span>
      </ContactIconItem>
    </div>
  );
};

export default ContactIcons;
