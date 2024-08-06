interface HeadingProps {
  text: string;
  variant: 'dark' | 'light';
  id?: string;
}

const Heading = ({ text, variant, id }: HeadingProps) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-black';

  return (
    <h2
      id={id}
      className={`font-serif text-3xl lg:text-[42px] leading-[52px] uppercase ${textColor}`}
    >
      {text}
    </h2>
  );
};

export default Heading;
