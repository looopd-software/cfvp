import Heading from '../common/Heading';
import Image from 'next/image';

const WhoAreWeSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-black py-24 gap-11 z-0 overflow-hidden">
      <Image
        src="/hero/isotipo-2.png"
        width={600}
        height={1000}
        alt="Isotipo de Castro Fernandez Vignau y Pianovi"
        className="absolute mix-blend-luminosity left-0 opacity-50"
      />
      <Heading text="QUIÉNES SOMOS" variant="light" />
      <p className="text-white text-2xl text-center max-w-6xl">
        Somos un estudio de profesionales en ciencias económicas de la ciudad de
        Rosario. Nuestra misión es analizar y resolver problemas empresariales,
        comprometidos desde siempre con dos valores fundamentales: una sólida
        ética de trabajo, y el crecimiento de nuestros clientes.
      </p>
    </section>
  );
};

export default WhoAreWeSection;
