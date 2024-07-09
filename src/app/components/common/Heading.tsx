interface HeadingProps {
    text: string;
    variant: 'dark' | 'light';
}

const Heading = ({ text, variant }: HeadingProps) => {
    const textColor = variant === 'light' ? 'text-white' : 'text-black';

    return (
        <h2 className={`font-serif text-[42px] leading-[52px] uppercase ${textColor}`}>
            {text}
        </h2>
    );
}

export default Heading;
