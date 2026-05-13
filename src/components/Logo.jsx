import React from 'react';

const Logo = ({ className = '', width = "120" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img 
        src="/Pro cells logo.png" 
        alt="ProCells Logo" 
        style={{ width: `${width}px`, filter: 'brightness(0) invert(1)' }} 
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
