// src/components/EventFilterButton.tsx
import React from 'react';

interface EventFilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const EventFilterButton: React.FC<EventFilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#71B340]
        transform hover:scale-105 active:scale-95
        ${
          isActive
            ? 'bg-gradient-to-r from-[#71B340] to-[#669D31] text-white shadow-lg shadow-green-500/20'
            : 'bg-white text-gray-700 border border-gray-200 hover:bg-[#F6FBF2] hover:border-[#CDE4B5] hover:text-gray-800 hover:shadow-md'
        }
      `}
    >
      {label}
    </button>
  );
};

export default EventFilterButton;