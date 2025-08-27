'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  // Active/inactive link classes
  const linkClasses = (path: string): string => {
    const baseClasses =
      "px-4 py-2 text-lg font-extrabold transition-colors duration-200 whitespace-nowrap";
    const activeClasses = "text-green-600";
    const inactiveClasses = "text-black hover:text-green-600";
    return `${baseClasses} ${pathname === path ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="flex flex-wrap gap-2 justify-end">
      <Link href="/" className={linkClasses('/')}>Home</Link>
      <Link href="/about" className={linkClasses('/about')}>About</Link>
      <Link href="/events" className={linkClasses('/events')}>Events</Link>
      <Link href="/team" className={linkClasses('/team')}>Team</Link>
      <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
    </nav>
  );
};

export default Navbar;
