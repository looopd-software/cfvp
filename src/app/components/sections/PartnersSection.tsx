import { useState } from 'react';
import Image from 'next/image';
import { PartnerProps } from '../partners/PartnerProps';
import { partners } from '../partners/partners';
import Partner from '../partners/Partner';
import PartnerDetails from '../partners/PartnerDetails';

const getPartnerDetailsColSpan = (index: number): string => {
    if (index == 3) return 'col-span-2';
    else if (index == 4) return 'col-span-1';
    return 'col-span-3';
};

const PartnersSection = () => {
    const [selectedPartnerIndex, setSelectedPartnerIndex] = useState<number>(0);

    return (
        <section id="socios" className="relative bg-black min-h-screen py-32">
            <div className="container max-w-desktop grid grid-cols-5 gap-2">
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
        </section>
    );
};

export default PartnersSection;
