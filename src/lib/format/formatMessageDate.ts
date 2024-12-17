export function formatMessageDate(fechaStr: Date): string {
    const fecha = new Date(fechaStr);

    const opciones: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Para usar el formato de 24 horas
    };

    return new Intl.DateTimeFormat('es-ES', opciones).format(fecha);
}