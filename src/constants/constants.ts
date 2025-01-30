
export const wspNum = `https://wa.me/${process.env.NEXT_PUBLIC_WSP_NUM || '541123498925'}`

export const generateWhatsAppLink = (courseTitle: string, price: number, startDate: string, duration: string, schedule: string) => {
    const wspNumber = process.env.NEXT_PUBLIC_WSP_NUM || '541123498925'; // Número de WhatsApp por defecto
    const message = encodeURIComponent(`
¡Hola! Estoy interesada en inscribirme en la cursada de: ${courseTitle}.\n
Aquí tienes los detalles:\n
- Modalidad: ON-LINE sincrónico\n
- Fecha de inicio: ${startDate}\n
- Duración: ${duration}\n
- Horario: ${schedule}\n
- Precio en dos cuotas: ${price}\n

¿Podrías brindarme más información? ¡Gracias!
    `);
    return `https://wa.me/${wspNumber}?text=${message}`;
};