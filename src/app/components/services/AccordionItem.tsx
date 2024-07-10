import { useState } from 'react';
import ArrowDownIcon from './icons/ArrowDownIcon';
import React from 'react';

interface AccordionItemProps {
  icon: React.ReactNode;
  text: string;
  description: string | string[];
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

  const renderDescription = () => {
    if (Array.isArray(description)) {
      if (description.length > 1) {
        return (
          <ul className="list-disc ml-5">
            {description.map((item, index) => (
              <li key={index} className="mt-1">
                {item}
              </li>
            ))}
          </ul>
        );
      }
      return <p className="font-sans mt-2">{description[0]}</p>;
    }
    return <p className="font-sans mt-2">{description}</p>;
  };

  return (
    <div className="border-b-[#595959] border-b-[1px] flex flex-col pb-2 transition-all duration-200 max-w-full">
      <div
        className="flex items-center justify-between gap-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 flex items-center justify-center transition-colors duration-200`}
          >
            {React.cloneElement(icon as React.ReactElement<any>, {
              color: isOpen ? activeColor : defaultColor,
            })}
          </div>
          <p className="font-semibold text-xl max-w-[330px]">{text}</p>
        </div>
        <div
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <ArrowDownIcon color={isOpen ? activeColor : defaultColor} />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-200 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        {renderDescription()}
      </div>
    </div>
  );
};

export default AccordionItem;
