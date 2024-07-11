import { PartnerProps } from './PartnerProps';

const PartnerDetails = ({ partner }: { partner: PartnerProps }) => {
  return (
    <div className="mt-4 text-white transition-all">
      <ul className="list-disc pl-5 mt-2">
        {Array.isArray(partner.description) ? (
          partner.description.map((desc, index) => <li key={index}>{desc}</li>)
        ) : (
          <li>{partner.description}</li>
        )}
      </ul>
    </div>
  );
};

export default PartnerDetails;
