import React from 'react';

const Arrow = () => {
  return (
    <div className="absolute bottom-0  right-[-110px] top-52 lg:top-28 lg:right-32 xl:right-80 xl:top-24">
      <svg width="479" height="300" viewBox="0 0 479 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          className="draw-path"
          d="M476 3C429.825 70.5617 304.326 191.759 157.296 151.748C56.9109 124.432 133.639 64.2411 241.388 96.499C349.136 128.757 244.498 285.151 6 274M6 274L38.0167 253.779M6 274L55.4719 297.055" 
          stroke="white" 
          strokeWidth="5" 
          strokeLinecap="round" />
      </svg>

      <style jsx>{`
        .draw-path {
          stroke-dasharray: 2000; /* Ajusta el valor si es necesario */
          stroke-dashoffset: 2000;
          animation: draw 4s ease forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Arrow;
