'use client';
import { Button } from "@/components/ui/button";
import { Course } from "@/interface/courseInterface";
import { Share2 } from "lucide-react";

interface Props {
    course: Course;
}

export function ShareButton({ course }: Props) {
    const handleShare = async () => {
        const { title, description, slug } = course;

        const texto = `${title}\n\n${description}\n\nMás información:`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: texto,
                    url: `http://localhost:3000/academy/${slug}`,
                });
                console.log('Contenido compartido exitosamente');
            } catch (error) {
                console.error('Error al compartir:', error);
            }
        } else {
            try {
                await navigator.clipboard.writeText(`${texto}`);
                alert('Texto copiado al portapapeles');
            } catch {
                alert('No se pudo copiar el texto');
            }
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="text-zinc-400 hover:text-yellow-500 hover:bg-transparent"
        >
            <Share2 className="h-5 w-5" />
        </Button>
    );
}
