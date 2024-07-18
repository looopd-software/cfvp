import PartnerCarousel from '../partners/PartnerCarousel';
import Heading from '../common/Heading';
import PartnersDesktop from '../partners/PartnersDesktop';

const PartnersSection = () => {
  return (
    <section
      id="socios"
      className="relative bg-black min-h-screen py-16 lg:py-32 flex flex-col items-center  gap-10"
    >
      <Heading text="Socios" variant="light" />
      <PartnerCarousel />
      <PartnersDesktop />
    </section>
  );
};

export default PartnersSection;
