import Image from 'next/image';
import WhatsAppIcon from '../form/WhatsAppIcon';
import MapsIcon from '../form/MapsIcon';
import EmailIcon from '../form/PhoneIcon';
import Heading from '../common/Heading';
import Form from '../form/Form';

const ContactIcons = () => {
    return (
        <>
            <div className="absolute bottom-28 right-4 text-white bg-[#1A1A1A] rounded-[4px] py-2 px-4 gap-2 flex ">
                <MapsIcon />
                <span>Córdoba 1026, Rosario, Argentina</span>
            </div>
            <div className="absolute bottom-16 right-4 text-white bg-[#1A1A1A] rounded-[4px] py-2 px-4 gap-2 flex">
                <WhatsAppIcon />
                <span>(704) 555-0127</span>
            </div>
            <div className="absolute bottom-4 right-4 text-white bg-[#1A1A1A] rounded-[4px] py-2 px-4 gap-2 flex ">
                <EmailIcon />
                <span>contacto@cfvp.com.ar</span>
            </div>
        </>
    );
};
const FormSection = () => {
    return (
        <section id="formulario" className="relative bg-white h-screen">
            <div className="relative flex w-full h-full gap-20">
                <div className="relative h-full w-2/5">
                    <Image
                        src={'/form/form-bg.jpg'}
                        alt="Fotografia de las oficinas"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <ContactIcons />
                </div>
                <div className="h-full w-3/5 max-w-[520px] my-32 flex flex-col gap-6">
                    <Heading variant='dark' text='CONTACTANOS' />
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default FormSection;
