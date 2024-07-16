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
  const accordionItems = [
    {
      icon: <ImpuestosIcon />,
      text: 'Impuestos',
      description: [
        'Asesoramiento tributario integral.',
        'Planificación fiscal estratégica.',
        'Declaraciones juradas.',
        'Inscripciones y bajas impositivas.',
      ],
    },
    {
      icon: <ContabilidadAuditoriaIcon />,
      text: 'Contabilidad y auditoría',
      description: [
        'Gestión y análisis de registros contables.',
        'Preparación de estados contables.',
        'Auditorías internas y externas.',
      ],
    },
    {
      icon: <LaboralIcon />,
      text: 'Laboral y RR.HH.',
      description: [
        'Liquidación de salarios y confección de recibos de sueldo.',
        'Declaraciones de seguridad social.',
        'Apoyo integral en la búsqueda, selección y contratación de personal.',
      ],
    },
    {
      icon: <SociedadesIcon />,
      text: 'Sociedades',
      description: [
        'Constitución, gestión y disolución de estructuras societarias.',
      ],
    },
    {
      icon: <EstructuracionDeNegociosIcon />,
      text: 'Estructuración de negocios',
      description: [
        'Análisis de oportunidades de negocios.',
        'Evaluación de su estructura formal.',
        'Apoyo en la búsqueda de financiamiento.',
      ],
    },
    {
      icon: <ConsultoriaEconomicaIcon />,
      text: 'Consultoría económica y financiera',
      description: [
        'Asistencia al directorio y a la gerencia general en el proceso de toma de decisiones estratégicas mediante el análisis de tendencias macroeconómicas y sectoriales.',
        'Asesoramiento en la gestión y planificación financiera de la compañía.',
      ],
    },
    {
      icon: <GestionDeLaEmpresaIcon />,
      text: 'Gestión de la empresa y optimización de costos',
      description: [
        'Análisis de costos y rediseño de los procesos de gestión para reducir gastos.',
        'Sistematización de información interna y desarrollo de tableros de control e Indicadores Clave de Rendimiento (KPIs) para monitorear y mejorar la rentabilidad.',
        'Reingeniería organizacional.',
      ],
    },
    {
      icon: <ValuacionEmpresasIcon />,
      text: 'Valuación de empresas y análisis de proyectos de inversión',
      description: [
        'Análisis objetivo del valor de un negocio y apoyo en compraventas o divisiones de compañías.',
        'Evaluación de viabilidad financiera y económica de nuevos proyectos.',
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full justify-between gap-10 px-7">
      <div className="flex w-full flex-col gap-6">
        <p className="font-bold text-xl lg:text-2xl mb-2">
          SERVICIOS CONVENCIONALES
        </p>
        {accordionItems.slice(0, 4).map((item, index) => (
          <AccordionItem
            key={index}
            icon={item.icon}
            text={item.text}
            description={item.description}
          />
        ))}
      </div>
      <div className="flex w-full flex-col gap-6">
        <p className="font-bold text-xl lg:text-2xl mb-2">
          NEGOCIOS Y REINGENIERÍA DE EMPRESAS
        </p>
        {accordionItems.slice(4).map((item, index) => (
          <AccordionItem
            key={index}
            icon={item.icon}
            text={item.text}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesAccordions;
