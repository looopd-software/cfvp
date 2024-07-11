import { ReactNode } from 'react';

const ContactIconItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-[4px] py-2 px-4 gap-2 inline-flex items-center text-white">
      {children}
    </div>
  );
};

export default ContactIconItem;
