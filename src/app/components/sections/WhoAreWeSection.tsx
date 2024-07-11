import Heading from '../common/Heading';
import Image from 'next/image';

const WhoAreWeSection = () => {
  return (
    <section id='nosotros' className="w-full bg-black py-24 overflow-hidden relative">
      <Image
        src="/hero/isotipo-2.png"
        width={600}
        height={1000}
        alt="Isotipo de Castro Fernandez Vignau y Pianovi"
        className="absolute mix-blend-luminosity -top-1/2 opacity-50"
      />
      <div className="relative flex flex-col items-center justify-center gap-11 z-0 max-w-desktop mx-auto">
        <Heading text="QUIÉNES SOMOS" variant="light" />
        <p className="text-white text-2xl text-center">
          Somos un estudio de profesionales en ciencias económicas de la ciudad
          de Rosario. Nuestra misión es analizar y resolver problemas
          empresariales, comprometidos desde siempre con dos valores
          fundamentales: una sólida ética de trabajo, y el crecimiento de
          nuestros clientes.
        </p>
      </div>
    </section>
  );
};

export default WhoAreWeSection;
