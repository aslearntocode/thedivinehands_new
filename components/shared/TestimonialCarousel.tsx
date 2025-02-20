'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slides every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="transition-all duration-500 ease-in-out">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {testimonials[currentIndex].image && (
                <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-gray-600 text-center mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="text-center">
                <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 