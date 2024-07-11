import Image from 'next/image';
import Heading from '../common/Heading';
import Form from '../form/Form';
import ContactIcons from '../form/ContactIcons';

const FormSection = () => {
  return (
    <section id="contacto" className="relative bg-white">
      <div className="relative flex w-full h-full gap-20">
        <div className="relative h-auto w-2/5">
          <Image
            src="/form/form-bg.jpg"
            alt="Fotografia de las oficinas"
            fill
            style={{ objectFit: 'cover' }}
          />
          <ContactIcons />
        </div>
        <div className="h-full w-3/5 max-w-[520px] my-32 flex flex-col gap-6">
          <Heading variant="dark" text="CONTACTANOS" />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
