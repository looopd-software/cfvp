import Image from 'next/image';
import Heading from '../common/Heading';
import ServicesAccordions from '../services/ServiceAccordions';

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-white ">
      <div className="flex flex-col justify-center items-center container py-32 gap-12 max-w-desktop">
        <Heading text="NUESTROS SERVICIOS" variant="dark" />
        <p className="text-center">
          Nos distinguimos en el mercado por ofrecer soluciones integrales,
          incluso en los servicios más convencionales. Contamos con el know-how
          para asesorar, pero también para involucrarnos en la gestión de la
          empresa, brindando soporte interno o externo para sus diferentes
          requerimientos.{' '}
        </p>
        <ServicesAccordions />
      </div>
    </section>
  );
};

export default ServicesSection;
