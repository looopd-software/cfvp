import Image from 'next/image';
import Heading from '../common/Heading';

const OurTeamSection = () => {
  return (
    <section id="nuestro-equipo" className="relative py-32 z-0">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50">
        <Image
          src="/our-team/our-team-bg.jpg"
          alt="Imagen de nuestro equipo trabajando"
          fill
          style={{
            objectFit: 'cover',
            filter: 'grayscale(100%)',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 bg-black w-full h-full z-0 opacity-85"></div>

      <div className="relative flex justify-center max-w-desktop w-full mx-auto gap-10 z-10">
        <Heading text="NUESTRO EQUIPO" variant="light" />
        <div className="max-w-[700px]">
          <p className="text-white text-lg mb-12">
            Nuestro equipo está compuesto por especialistas calificados en las
            diversas áreas de servicios que demanda el mercado, incluyendo
            auditoría, impuestos, costos, laboral, economía, finanzas y
            negocios. Una trayectoria de más de 30 años nos permite combinar la
            experiencia de los socios fundadores con la energía y el talento de
            los socios más jóvenes.
          </p>
          <div className="relative w-[700px] h-[230px] rounded-lg">
            <Image
              src="/our-team/our-team.jpg"
              alt="Imagen de nuestro equipo trabajando"
              fill
              style={{
                objectFit: 'cover',
              }}
              className="rounded-[4px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
