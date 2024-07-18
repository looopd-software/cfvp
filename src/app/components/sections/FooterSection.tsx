import Image from 'next/image';
import MapsIcon from '../form/MapsIcon';
import EmailIcon from '../form/PhoneIcon';
import WhatsAppIcon from '../form/WhatsAppIcon';
import Link from 'next/link';

const Logo = () => (
  <Link href={''}>
    <Image
      src={'/hero/logo.svg'}
      alt="Logo de Castro Fernandez Vignau y Pianovi"
      width={223}
      height={100}
    />
    <p className="text-primary uppercase max-w-[20ch] font-bold mt-2">
      PROFESIONALES EN CIENCIAS ECONÓMICAS
    </p>
  </Link>
);

const ContactInfo = () => (
  <div className="flex flex-col items-start gap-3 ">
    <p className="font-bold mb-4">CONTACTO</p>
    <Link
      className="flex gap-2 hover:underline"
      href="https://maps.app.goo.gl/fhrc2Egig33ris2q9"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MapsIcon />
      <span>Córdoba 1026, Rosario, Argentina</span>
    </Link>
    <Link className="flex gap-2 hover:underline" href="tel:+54 9 3416 25-3526">
      <WhatsAppIcon />
      <span>(704) 555-0127</span>
    </Link>
    <Link
      className="flex gap-2 hover:underline"
      href="mailto:contacto@cfvp.com.ar"
    >
      <EmailIcon />
      <span>contacto@cfvp.com.ar</span>
    </Link>
  </div>
);

const NavigationLinks = () => (
  <div className="flex flex-col items-start gap-3">
    <p className="font-bold">NOSOTROS</p>
    <div className="flex flex-col items-start gap-1">
      <Link
        className="font-normal text-sm hover:underline leading-[21px]"
        href={'#servicios'}
      >
        Servicios
      </Link>
      <Link
        className="font-normal text-sm hover:underline leading-[21px]"
        href={'#nosotros'}
      >
        Nosotros
      </Link>
      <Link
        className="font-normal text-sm hover:underline leading-[21px]"
        href={'#socios'}
      >
        Socios
      </Link>
      <Link
        className="font-normal text-sm hover:underline leading-[21px]"
        href={'#clientes'}
      >
        Clientes
      </Link>
      <Link
        className="font-normal text-sm hover:underline leading-[21px]"
        href={'#contacto'}
      >
        Contacto
      </Link>
    </div>
  </div>
);

const FooterSection = () => {
  return (
    <section id="footer" className="relative bg-black pt-20 pb-4 text-white">
      <div className="flex flex-col md:flex-row items-start w-full max-w-desktop container justify-between">
        <Logo />
        <div className="w-1/4"></div>
        <ContactInfo />
        <NavigationLinks />
      </div>
      <div className="flex flex-col md:flex-row items-start w-full max-w-desktop container justify-between mt-6">
        <p>Castro, Fernández, Vignau & Pianovi © {new Date().getFullYear()}</p>
        <p>
          Desarrollado por{' '}
          <Link
            className="underline-offset-2 underline"
            href="https://looopd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Looopd
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
