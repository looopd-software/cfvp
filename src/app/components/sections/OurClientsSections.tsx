import Image from 'next/image';
import AgropecuarioIcon from '../clients/AgropecuarioIcon';
import ComercioIcon from '../clients/ComercioIcon';
import IndustriaIcon from '../clients/IndustriaIcon';
import LogisticaIcon from '../clients/LogisticaIcon';
import RealEstateIcon from '../clients/RealEstateIcon';
import SaludIcon from '../clients/SaludIcon';
import ServiciosIcon from '../clients/ServiciosIcon';
import Heading from '../common/Heading';

interface IndustryItemProps {
  icon: React.ReactNode;
  title: string;
}
const IndustryItem = ({ icon, title }: IndustryItemProps) => {
  return (
    <div className="flex flex-col items-center gap-2 w-[97px]">
      {icon}
      <p className="text-center">{title}</p>
    </div>
  );
};

const OurClientsSections = () => {
  return (
    <section
      id="clientes"
      className="relative flex justify-center bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full">
        <Image
          src="/hero/isotipo-2.png"
          width={600}
          height={1000}
          alt="Isotipo de Castro Fernandez Vignau y Pianovi"
          className="absolute"
          unselectable="on"
          draggable={false}
        />
      </div>
      <div className="container py-16 md:py-40 flex-col justify-start items-end gap-20 inline-flex">
        <div className="px-7 flex-col md:flex-row justify-start md:justify-between items-center md:items-start gap-5 inline-flex text-center md:text-left">
          <div className="grow shrink basis-0">
            <Heading text="NUESTROS CLIENTES" variant="dark" />
          </div>
          <p className="grow shrink basis-0 text-base font-normal md:text-lg">
            Dirigimos nuestros servicios principalmente a empresas medianas de
            la región, muchas veces organizadas bajo el formato de empresas
            familiares, ya sean industriales, comerciales o de servicios.
            <br />
            <br />
            Estamos preparados para ofrecer soluciones tanto a corto como a
            largo plazo, desde intervenciones puntuales y transitorias hasta
            soluciones de consultoría permanente destinadas a estrechar y
            fortalecer la relación con nuestros clientes.
            <br />
            <br />
            Nuestra firma trasciende los límites habituales de un estudio
            contable, asumiendo funciones de asesoramiento y consultoría que
            pretenden impactar positivamente sobre los resultados de la
            compañía.
          </p>
        </div>
        <div className="col-span-2 flex justify-end gap-7">
          <IndustryItem
            title="Actividad primaria"
            icon={<AgropecuarioIcon />}
          />
          <IndustryItem title="Comercio" icon={<ComercioIcon />} />
          <IndustryItem title="Industria" icon={<IndustriaIcon />} />
          <IndustryItem
            title="Logística y distribución"
            icon={<LogisticaIcon />}
          />
          <IndustryItem title="Real Estate" icon={<RealEstateIcon />} />
          <IndustryItem title="Salud" icon={<SaludIcon />} />
          <IndustryItem title="Servicios" icon={<ServiciosIcon />} />
        </div>
      </div>
    </section>
  );
};

export default OurClientsSections;
