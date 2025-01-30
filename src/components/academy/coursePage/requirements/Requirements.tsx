import PdfRedirect from "@/components/academy/coursePage/pdf-redirect";
import { CalendarMonthOutlined } from "@mui/icons-material";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import { DollarSignIcon, User } from "lucide-react";

interface Requirement {
  dedication: string;
  prev_knowledge?: string;
  duration: string;
  pdf?: string | null;
}

const Requirements = ({ requirements, price }: { requirements: Requirement[], price: number }) => {
  // Transformamos los datos del mock al formato esperado
  const transformedRequirements = [
    {
      icon: <LaptopChromebookIcon sx={{ fontSize: 22 }} />,
      title: `Dedicación: ${requirements[0].dedication}`,
    },
    {
      icon: <User />,
      title: requirements[0].prev_knowledge
        ? `Necesitas conocimientos previos de: ${requirements[0].prev_knowledge}`
        : "No necesitas conocimientos previos",
    },
    {
      icon: <DollarSignIcon size={24} color="white" />,
      title: `Dos cuotas de $${price.toLocaleString()}`,
    },
    {
      icon: <CalendarMonthOutlined />,
      title: `Duración: ${requirements[0].duration} - Clases sincrónicas virtuales`,
      pdf: requirements[0].pdf ?? null, // Usa el operador de fusión nula (??) en lugar de `? : null`
    },
  ];

  return (
    transformedRequirements.map((req, index) => (
      <div key={index} className="flex gap-2 glass_bg px-6 p-4 items-center mt-4">
        {req.icon}
        <div className="border-l px-2">
          <div className="flex items-center text-white text-xl gap-2">
            <p>{req.title}</p>
          </div>
          {req.pdf ? (
            <div className="mt-2">
              <PdfRedirect pdf={req.pdf} />
            </div>
          ) : index === transformedRequirements.length - 1 ? ( // El mensaje solo aplica al ítem del pdf
            <p className="text-gray-300 mt-2">No hay un plan de estudios por el momento</p>
          ) : null}
        </div>
      </div>
    ))
  );
};

export default Requirements;

