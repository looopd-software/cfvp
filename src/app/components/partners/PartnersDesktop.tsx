import { useState } from 'react';
import Partner from './Partner';
import PartnerDetails from './PartnerDetails';
import { PartnerProps } from './PartnerProps';
import { partners } from './partners';
import { AnimatePresence, motion } from 'framer-motion';

const getPartnerDetailsColSpan = (index: number): string => {
  if (index === 3) return 'col-span-2';
  else if (index === 4) return 'col-span-1';
  return 'col-span-3';
};

export default function PartnersDesktop() {
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
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedPartnerIndex}-desktop-partner-slide`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0 } }}
            transition={{ duration: 0.3 }}
          >
            <PartnerDetails partner={partners[selectedPartnerIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
