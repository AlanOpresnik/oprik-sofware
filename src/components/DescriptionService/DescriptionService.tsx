'use client';
import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

const DescriptionService: React.FC<ExpandableTextProps> = ({ text, maxLength = 250 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  // Dividir la descripción en líneas (por saltos de línea)
  const lines = text.split('\n');

  // Limitar el número de líneas si no está expandido
  const visibleLines = isExpanded ? lines : lines.slice(0, Math.ceil(maxLength / 50)); // Aproximación por longitud

  return (
    <div>
      <ul className="mt-4 text-base list-none">
        {visibleLines.map((line, index) => (
          <li key={index} className="mb-2 py-2">
            {line}
          </li>
        ))}
      </ul>
      {lines.length > visibleLines.length && (
        <button
          onClick={toggleExpanded}
          className="text-primary underline hover:no-underline mt-2"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
};

export default DescriptionService;
