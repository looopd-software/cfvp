import Image from 'next/image';
import { FC } from 'react';
import { PartnerProps } from './PartnerProps';

interface PartnerComponentProps extends PartnerProps {
  className?: string;
  imageClassName?: string;
}

const Partner: FC<PartnerComponentProps> = ({
  url,
  name,
  lastName,
  onClick,
  selected,
  className,
  imageClassName,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col text-white gap-2 border-b-[3px] cursor-pointer ${selected ? 'border-primary' : ''} ${className}`}
    >
      <div
        className={`relative lg:max-w-48 lg:h-60 rounded-sm overflow-hidden ${imageClassName} ${selected ? '' : 'grayscale'}`}
      >
        <Image
          src={url}
          alt={`Foto de ${name} ${lastName}`}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      </div>
      <div>
        <p className="uppercase text-xl font-extrabold">{lastName} ,</p>
        <p className="uppercase font-bold">{name}</p>
      </div>
    </div>
  );
};

export default Partner;
