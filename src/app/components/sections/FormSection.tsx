import Image from 'next/image';
import Heading from '../common/Heading';
import Form from '../form/Form';
import ContactIcons from '../form/ContactIcons';

const FormSection = () => {
  return (
    <section id="contacto" className="relative bg-white">
      <div className="relative flex flex-col-reverse lg:flex-row w-full h-full gap-10 lg:gap-20 ">
        <div className="relative w-full h-[50vh] lg:h-auto lg:w-2/5">
          <Image
            src="/form/form-bg.jpg"
            alt="Fotografia de las oficinas"
            fill
            style={{ objectFit: 'cover' }}
          />
          <ContactIcons />
        </div>
        <div className="w-full flex flex-col gap-6 mt-12 items-center lg:w-3/5 lg:max-w-[520px] lg:my-32">
          <Heading variant="dark" text="CONTACTANOS" />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
