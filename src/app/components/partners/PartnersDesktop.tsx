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
    <div className="hidden lg:grid container max-w-desktop grid-cols-5 gap-4">
      {partners.map((partner: PartnerProps, index: number) => (
        <motion.div
          key={index}
          className="relative"
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedPartnerIndex(index)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          role="button"
          tabIndex={0}
          aria-pressed={selectedPartnerIndex === index}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setSelectedPartnerIndex(index);
            }
          }}
        >
          <Partner
            url={partner.url}
            name={partner.name}
            lastName={partner.lastName}
            description={partner.description}
            selected={selectedPartnerIndex === index}
          />
        </motion.div>
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
            role="region"
            aria-labelledby={`partner-name-${selectedPartnerIndex}`}
            aria-describedby={`partner-description-${selectedPartnerIndex}`}
          >
            <PartnerDetails partner={partners[selectedPartnerIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
