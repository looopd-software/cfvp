import AccordionItem from './AccordionItem';
import ContabilidadAuditoriaIcon from './icons/ContabilidadAuditoriaIcon';
import ImpuestosIcon from './icons/ImpuestosIcon';
import LaboralIcon from './icons/LaboralIcon';
import SociedadesIcon from './icons/SociedadesIcon';
import ConsultoriaEconomicaIcon from './icons/ConsultoriaEconomicaIcon';
import EstructuracionDeNegociosIcon from './icons/EstructuracionDeNegociosIcon';
import GestionDeLaEmpresaIcon from './icons/GestionDeLaEmpresa';
import ValuacionEmpresasIcon from './icons/ValuacionEmpresasIcon';

const ServicesAccordions = () => {


  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-2xl mb-2">SERVICIOS CONVENCIONALES</p>
        <AccordionItem
          icon={<ImpuestosIcon />}
          text="Impuestos"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<ContabilidadAuditoriaIcon />}
          text="Contabilidad y auditoría"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<LaboralIcon />}
          text="Laboral y RR.HH."
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<SociedadesIcon />}
          text="Sociedades"
          description="lorem ipsum"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-2xl mb-2">
          NEGOCIOS Y REINGENIERÍA DE EMPRESAS
        </p>
        <AccordionItem
          icon={<EstructuracionDeNegociosIcon />}
          text="Estructuración de negocios"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<ConsultoriaEconomicaIcon />}
          text="Consultoría económica y financiera"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<GestionDeLaEmpresaIcon />}
          text="Gestión de la empresa y optimización de costos"
          description="lorem ipsum"
        />
        <AccordionItem
          icon={<ValuacionEmpresasIcon />}
          text="Valuación de empresas y análisis de proyectos de inversión"
          description="lorem ipsum"
        />
      </div>
    </div>
  );
};

export default ServicesAccordions;
