'use client';
import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength?: number; 
}

const DescriptionPlanMatch: React.FC<ExpandableTextProps> = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = text.length > maxLength;

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`relative transition-all duration-300 ${
          isExpanded ? 'h-auto overflow-auto' : 'h-fit'
        }`}
      >
        <p className="text-sm leading-6">
          {isExpanded || !shouldTruncate ? text : `${text.slice(0, maxLength)}...`}
        </p>
      </div>
      {shouldTruncate && (
        <button
          onClick={toggleExpanded}
          className="text-primary text-sm underline hover:no-underline mt-2 block"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
};

export default DescriptionPlanMatch;
