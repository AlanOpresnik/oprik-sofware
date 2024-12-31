
import { CalendarDays, ClipboardEdit, Handshake } from 'lucide-react';
import React from 'react'
import FeaturesList from './FeatureList';

const Experiencie = () => {
    const features = [
        {
            icon: <ClipboardEdit className="h-12 w-12 text-primary" />,
            title: "SOLICITA MÁS INFORMACIÓN",
            description: "Ponete en contacto con nuestros Asesores por medio de Watshapp",
            action: "Enviar mensaje →",
            href: "https://wa.me/+541123498925"
        },
        {
            icon: <CalendarDays className="h-12 w-12 text-primary" />,
            title: "AGENDA UNA LLAMADA",
            description: "Selecciona un dia disponible y agenda una llamada con nuestros asesores",
            action: "Agendar →",
            target: "_blank",
            href: "https://calendly.com/opriksoftware/oprik-software-asesoria-45-minutos"
        },
        {
            icon: <Handshake className="h-12 w-12 text-primary" />,
            title: "LA EXPERIENCIA DE ESTAR EN LINEA",
            description: "Empeza a disfrutar de los beneficios de tener tu sitio web Online",
            action: "Visitar planes →",
            href: "#pricing"
        }
    ]
    return (
        <div className="py-24 mb-24">
            <div className="flex justify-center">
                <h3 className="text-white text-center text-5xl font-semibold">
                    ¿Listo para vivir la{' '}
                    <span className="relative inline-block">
                        <span className="absolute px-2 inset-0 h-1/2 bg-yellow-500 top-8 rounded-sm w-full -z-10"></span>
                        experiencia ?
                    </span>

                </h3>
            </div>
            <div className='flex justify-center mt-6'>
                <p className='text-white text-center text-xl '>Tener tu sitio WEB es muy simple con nosotros.</p>
            </div>
        
                <FeaturesList features={features}/>

        </div>
    );
};

export default Experiencie;
