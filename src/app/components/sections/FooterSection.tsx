import Image from 'next/image';
import Link from 'next/link';

const ContactInfo = () => (
  <div className="flex-col justify-end items-start gap-4 inline-flex">
    <p className="text-stone-200 text-sm font-bold leading-[21px]">CONTACTO</p>
    <div className="flex-col justify-end items-start gap-2 inline-flex">
      <Link
        className="justify-center items-start gap-2 inline-flex hover:underline"
        href="https://maps.app.goo.gl/fhrc2Egig33ris2q9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-4 h-[20.85px] relative">
          <Image
            src={'/icons/location.svg'}
            alt="Icono de ubicación en mapa"
            fill
          />
        </div>
        <span>Córdoba 1026, Rosario, Argentina</span>
      </Link>
      <Link
        className="justify-center items-start gap-2 inline-flex hover:underline"
        href="tel:+54 9 3416 25-3526"
      >
        <div className="w-4 h-[20.85px] relative">
          <Image src={'/icons/whatsapp.svg'} alt="Icono de WhatsApp" fill />
        </div>
        <span>(704) 555-0127</span>
      </Link>
      <Link
        className="justify-center items-start gap-2 inline-flex hover:underline"
        href="mailto:contacto@cfvp.com.ar"
      >
        <div className="w-4 h-[20.85px] relative">
          <Image src={'/icons/email.svg'} alt="Icono de email" fill />
        </div>
        <span>contacto@cfvp.com.ar</span>
      </Link>
    </div>
  </div>
);

const NavigationLinks = () => (
  <div className="flex flex-col items-start gap-3">
    <p className="text-stone-200 text-sm font-bold leading-[21px]">NOSOTROS</p>
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
    <section id="footer" className="bg-black text-white">
      <div className="container w-full px-7 py-10 flex-col justify-start items-start gap-[72px] inline-flex">
        <div className="flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full flex-col justify-center items-start gap-[7px] inline-flex">
            <div className="justify-start items-start inline-flex">
              <div className="w-[172px] h-[79px] pr-[7.38px] pb-[5.17px] justify-start items-center flex">
                <Link href={''}>
                  <Image
                    src={'/hero/logo.svg'}
                    alt="Logo de Castro Fernandez Vignau y Pianovi"
                    width={223}
                    height={100}
                  />
                </Link>
              </div>
            </div>
            <div className="text-primary uppercase font-bold mt-2 leading-[17.92px]">
              PROFESIONALES EN <br /> CIENCIAS ECONÓMICAS
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-[34px] inline-flex">
            <ContactInfo />
            <NavigationLinks />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 inline-flex font-light text-stone-200 text-sm">
          <p>
            Castro, Fernández, Vignau & Pianovi © {new Date().getFullYear()}
          </p>
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
      </div>
    </section>
  );
};

export default FooterSection;
