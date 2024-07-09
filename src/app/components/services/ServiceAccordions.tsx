import AccordionItem from './AccordionItem';
import ArrowDownIcon from './icons/ArrowDownIcon';
import ContabilidadAuditoriaIcon from './icons/ContabilidadAuditoriaIcon';
import ImpuestosIcon from './icons/ImpuestosIcon';
import LaboralIcon from './icons/LaboralIcon';
import SociedadesIcon from './icons/SociedadesIcon';
import ConsultoriaEconomicaIcon from './icons/ConsultoriaEconomicaIcon';
import EstructuracionDeNegociosIcon from './icons/EstructuracionDeNegociosIcon';
import GestionDeLaEmpresaIcon from './icons/GestionDeLaEmpresa';
import ValuacionEmpresasIcon from './icons/ValuacionEmpresasIcon';

const ServicesAccordions = () => {
  const primaryColor = "var(--primary-color)";

  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-2xl mb-2">SERVICIOS CONVENCIONALES</p>
        <AccordionItem
          icon={<ImpuestosIcon color={primaryColor} />}
          text="Impuestos"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<ContabilidadAuditoriaIcon color={primaryColor} />}
          text="Contabilidad y auditoría"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<LaboralIcon color={primaryColor} />}
          text="Laboral y RR.HH."
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<SociedadesIcon color={primaryColor} />}
          text="Sociedades"
          description="lorem ipsum"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-2xl mb-2">NEGOCIOS Y REINGENIERÍA DE EMPRESAS</p>
        <AccordionItem
          icon={<EstructuracionDeNegociosIcon color={primaryColor} />}
          text="Estructuración de negocios"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<ConsultoriaEconomicaIcon color={primaryColor} />}
          text="Consultoría económica y financiera"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<GestionDeLaEmpresaIcon color={primaryColor} />}
          text="Gestión de la empresa y optimización de costos"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<ValuacionEmpresasIcon color={primaryColor} />}
          text="Valuación de empresas y análisis de proyectos de inversión"
          description="lorem ipsum"
        />
      </div>
    </div>
  );
};

export default ServicesAccordions;
