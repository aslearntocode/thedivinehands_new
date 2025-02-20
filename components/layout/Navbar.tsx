'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-[60px] h-[60px]">
              <Image 
                src="/images/TDH Logo.png"
                alt="The Divine Hands Logo"
                fill
                sizes="60px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span className="text-xl font-semibold">The Divine Hands</span>
          </Link>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-2">
              <span className="block w-6 h-0.5 bg-gray-600"></span>
              <span className="block w-6 h-0.5 bg-gray-600"></span>
              <span className="block w-6 h-0.5 bg-gray-600"></span>
            </div>
          </button>

          <div className={`md:flex items-center gap-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/about" className="hover:text-yellow-500">About Us</Link>
            <Link href="/chefs" className="hover:text-yellow-500">Home Made Food</Link>
            <Link href="/bakers" className="hover:text-yellow-500">Home Made Desserts</Link>
            <Link href="/tiffin" className="hover:text-yellow-500">Tiffin Service</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 