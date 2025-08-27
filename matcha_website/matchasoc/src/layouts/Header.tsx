import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full flex justify-between items-center py-2 px-6 shadow-sm">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🍵</span>
            </div>
            <span className="text-xl font-bold text-gray-800">UNSW Matcha Society</span>
          </div>
        </Link>
      </div>

      {/* Navbar pushed to far right */}
      <div className="flex-1 flex justify-end ml-4">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
