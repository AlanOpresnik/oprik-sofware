'use client';

import React, { useState, useEffect } from 'react';

interface FadeInWrapperProps {
  children: React.ReactNode;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50); // Pequeño retraso para suavidad
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
