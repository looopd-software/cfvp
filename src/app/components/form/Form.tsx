"use client";
import { useState, useCallback } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import Spinner from './Spinner';
import Toast from '../common/Toast';

interface FormData {
    name: string;
    lastName: string;
    email: string;
    company: string;
    message: string;
}

const initialFormData: FormData = {
    name: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
};

export default function Form() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ type: 'normal' | 'success' | 'error' | 'warning'; message: string } | null>(null);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setToast({ type: 'success', message: 'Email enviado con exito' });
            } else {
                const errorData = await response.json();
                setToast({ type: 'error', message: `Error: ${errorData.error}` });
            }
        } catch (error) {
            setToast({ type: 'error', message: 'Failed to send email' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-3">
                    <Input
                        id="name"
                        name="name"
                        label="Nombre"
                        placeholder="Nombre"
                        required={true}
                        value={formData.name}
                        onChange={handleInputChange}
                        wrapperWidthClassName="w-full"
                    />
                    <Input
                        id="lastName"
                        name="lastName"
                        label="Apellido"
                        placeholder="Apellido"
                        required={true}
                        value={formData.lastName}
                        onChange={handleInputChange}
                        wrapperWidthClassName="w-full"
                    />
                    <Input
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="email@empresa.com"
                        required={true}
                        value={formData.email}
                        onChange={handleInputChange}
                        wrapperWidthClassName="w-full col-span-2"
                    />
                    <Input
                        id="company"
                        name="company"
                        label="Empresa"
                        placeholder="Empresa"
                        required={false}
                        value={formData.company}
                        onChange={handleInputChange}
                        wrapperWidthClassName="w-full col-span-2"
                    />
                </div>
                <TextArea
                    id="message"
                    name="message"
                    label="Mensaje"
                    placeholder="Mensaje"
                    required={true}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="h-36"
                    wrapperWidthClassName="w-full"
                />

                <Button type="submit">
                    {isLoading ?
                        <div className='w-full flex place-content-center'>
                            <Spinner />
                        </div>
                        : "Enviar"
                    }
                </Button>
            </form>
            <div id="toast-container">
                {toast && (
                    <Toast
                        type={toast.type}
                        message={toast.message}
                        onClose={() => setToast(null)}
                    />
                )}
            </div>
        </>
    );
}
