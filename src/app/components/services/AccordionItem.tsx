import { useState } from 'react';
import ArrowDownIcon from './icons/ArrowDownIcon';
import React from 'react';

interface AccordionItemProps {
  icon: React.ReactNode;
  text: string;
  description: string[];
  activeColor?: string;
  defaultColor?: string;
}

const AccordionItem = ({
  icon,
  text,
  description,
  defaultColor = 'var(--primary-color)',
  activeColor = 'var(--black-color)',
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const renderDescription = () => (
    <ul className="list-disc ml-5">
      {description.map((item, index) => (
        <li key={index} className="mt-1 text-lg lg:text-xl">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="border-b-[#595959] border-b-[1px] flex flex-col pb-2 transition-all duration-200 max-w-full">
      <div
        className="flex items-center justify-between gap-3 cursor-pointer"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`content-${text.replace(/\s+/g, '-').toLowerCase()}`}
        id={`header-${text.replace(/\s+/g, '-').toLowerCase()}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleAccordion();
          }
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 flex items-center justify-center transition-colors duration-200`}
          >
            {React.cloneElement(icon as React.ReactElement<any>, {
              color: isOpen ? activeColor : defaultColor,
              'aria-hidden': true,
            })}
          </div>
          <p className="font-semibold text-lg lg:text-xl leading-6">{text}</p>
        </div>
        <div
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <ArrowDownIcon color={isOpen ? activeColor : defaultColor} />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-200 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        id={`content-${text.replace(/\s+/g, '-').toLowerCase()}`}
        aria-labelledby={`header-${text.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {renderDescription()}
      </div>
    </div>
  );
};

export default AccordionItem;
