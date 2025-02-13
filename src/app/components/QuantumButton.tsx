import React from 'react';

const QuantumButton = ({ onClick }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <button 
        onClick={onClick}
        className="
          relative inline-block px-6 py-1 md:px-8 md:py-2 text-lg md:text-xl lg:text-2xl font-medium 
          text-white bg-black/30 backdrop-blur-md border-2 border-white rounded-full 
          cursor-pointer outline-none transition-all duration-300 
          transform active:translate-y-[6px] 
          before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-full 
          before:transition-all before:duration-300 
          before:transform before:translate-y-[5px] md:before:translate-y-[6px] 
          before:shadow-[0px_0px_0px_1px_rgb(120,120,120),0px_3px_0px_0px_rgb(65,65,65)] md:before:shadow-[0px_0px_0px_1px_rgb(110,110,110),0px_4px_0px_0px_rgb(55,55,55)] 
          hover:bg-white hover:text-black 
          hover:before:opacity-100 
          hover:cursor-pointer
          active:before:translate-y-[1px] md:active:before:translate-y-[2px] 
          active:before:shadow-[0px_0px_0px_1px_rgb(120,120,120),0px_2px_0px_0px_rgb(120,120,120)]
        "
      >
        Jump into the Quantum Verse
      </button>
    </div>
  );
};

export default QuantumButton;
