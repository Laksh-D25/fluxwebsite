'use client';

import React from 'react';

const QuantumButton = ({ onClick }) => {
  return (
    <div className="relative" style={{ perspective: '500px' }}>
      <button 
        className={`
          relative text-lg md:text-2xl text-white rounded-full 
          py-2 px-5 md:py-3 md:px-7 border-2 border-white 
          hover:text-black hover:bg-white hover:border-black 
          transition-all duration-500 cursor-pointer z-10
          [transform-style:preserve-3d]
        `}
        onClick={onClick}
      >
        <span>Jump into the Quantum Verse</span>
      </button>
      <div 
        className={`
          absolute inset-0 rounded-full opacity-0
          [transform:translateZ(-10px)]
          group-hover:opacity-100
          group-hover:animate-quantum-wobble
          bg-white/20 mix-blend-overlay
        `}
      />
    </div>
  );
};

export default QuantumButton;