import ArrowDownIcon from './icons/ArrowDownIcon';

interface AccordionItemProps {
  icon: React.ReactNode;
  text: string;
  description: string;
}

const AccordionItem = ({ icon, text, description }: AccordionItemProps) => {
  return (
    <div className="border-b-[#595959] border-b-[1px] flex pb-2 items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <p className="font-semibold text-xl max-w-[330px]">{text}</p>
      </div>
      <ArrowDownIcon color="var(--primary-color)" />
    </div>
  );
};

export default AccordionItem;
