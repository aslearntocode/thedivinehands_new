'use client';

import { useState } from 'react';

interface ChefApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChefApplicationModal({ isOpen, onClose }: ChefApplicationModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formsubmit.co/thedivinehands3@gmail.com', {
        method: 'POST',
        body: formData
      });
      setShowSuccess(true);
      
      // Countdown and redirect
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.location.href = '/';
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Chef/Baker Application</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          {showSuccess ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">Thank You for Applying!</h3>
              <p className="mb-4">We will soon reach out to you to initiate the onboarding process.</p>
              <p className="text-yellow-500 font-bold">
                Redirecting in {countdown} seconds...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Chef/Baker Application" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://thedivinehands.com" />
              <input 
                type="hidden" 
                name="_autoresponse" 
                value="Thank you for applying to The Divine Hands! We have received your application and will contact you soon."
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Full Name"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="Mobile Number"
                  pattern="[0-9]{10}"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience in Cooking/Baking <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="Years of Experience"
                  min="0"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currently Supplying Food? <span className="text-red-500">*</span>
                </label>
                <select
                  name="Currently Supplying Food"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Pick-up Location (Locality) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Home Pick-up Location"
                  placeholder="e.g., Parel"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Specialty"
                  placeholder="e.g., North Indian, Desserts, Multi Cuisine"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Introduce Yourself (2-3 lines) <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="Introduction"
                  rows={3}
                  placeholder="Tell us about your cooking journey and passion"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Your Photo (Optional)
                </label>
                <input
                  type="file"
                  name="Photo"
                  accept="image/*"
                  className="w-full p-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Maximum file size: 25MB. Supported formats: JPG, PNG
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-800 py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 