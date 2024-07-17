import { useState } from 'react';
import Image from 'next/image';
import { PartnerProps } from '../partners/PartnerProps';
import { partners } from '../partners/partners';
import Partner from '../partners/Partner';
import PartnerDetails from '../partners/PartnerDetails';
import PartnerCarousel from '../partners/PartnerCarousel';
import Heading from '../common/Heading';

const getPartnerDetailsColSpan = (index: number): string => {
  if (index == 3) return 'col-span-2';
  else if (index == 4) return 'col-span-1';
  return 'col-span-3';
};

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

function PartnersDesktop() {
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState<number>(0);

  return (
    <div className="hidden lg:grid container max-w-desktop grid-cols-5 gap-2">
      {partners.map((partner: PartnerProps, index: number) => (
        <div key={index} className="relative">
          <Partner
            url={partner.url}
            name={partner.name}
            lastName={partner.lastName}
            description={partner.description}
            selected={selectedPartnerIndex === index}
            onClick={() => setSelectedPartnerIndex(index)}
          />
        </div>
      ))}

      {Array.from({ length: selectedPartnerIndex }, (_, index) => (
        <div key={index}></div>
      ))}
      <div className={getPartnerDetailsColSpan(selectedPartnerIndex)}>
        <PartnerDetails partner={partners[selectedPartnerIndex]} />
      </div>
    </div>
  );
}
