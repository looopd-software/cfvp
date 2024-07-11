import Link from 'next/link';
import { ReactNode } from 'react';

interface ContactIconItemProps {
  href: string;
  children: ReactNode;
}

const ContactIconItem = ({ href, children }: ContactIconItemProps) => {
  return (
    <Link href={href} passHref>
      <div className="bg-[#1A1A1A] rounded-[4px] py-2 px-4 gap-2 inline-flex items-center text-white">
        {children}
      </div>
    </Link>
  );
};

export default ContactIconItem;
