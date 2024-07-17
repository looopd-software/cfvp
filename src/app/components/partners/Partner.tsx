import Image from 'next/image';
import { PartnerProps } from './PartnerProps';

const Partner = ({ url, name, lastName, onClick, selected }: PartnerProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col text-white gap-2 border-b-[3px] cursor-pointer ${selected ? 'border-primary' : ''}`}
    >
      <div className="relative w-full max-w-48 h-60 rounded-sm overflow-hidden">
        <Image
          src={url}
          alt={`Foto de ${name} ${lastName}`}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            mixBlendMode: selected ? 'normal' : 'luminosity',
          }}
        />
      </div>
      <div>
        <p className="uppercase font-bold">{lastName} ,</p>
        <p className="uppercase">{name}</p>
      </div>
    </div>
  );
};

export default Partner;
