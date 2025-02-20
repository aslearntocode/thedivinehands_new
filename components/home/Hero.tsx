'use client';

import Link from 'next/link';
import { useState } from 'react';
import ChefApplicationModal from '../forms/ChefApplicationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-yellow-400 py-20">
      <div className="bg-white rounded-3xl p-12 md:p-16 max-w-4xl mx-auto text-center shadow-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Homemade Food Delivered To Your Doorstep
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Experience the authentic taste of home-cooked meals prepared by talented home chefs and bakers
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/chefs" 
            className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
          >
            Explore Home Made Food
          </Link>
          <Link 
            href="/bakers" 
            className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
          >
            Explore Home Made Desserts
          </Link>
        </div>
        
        <div className="mt-4 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Join as a Home Chef/Baker
          </button>
        </div>
      </div>

      <ChefApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
} 