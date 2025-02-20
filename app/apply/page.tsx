'use client';
import { useState } from 'react';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    experience: '',
    specialty: '',
    location: '',
    about: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formsubmit.co/thedivinehands3@gmail.com', {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement)
      });

      if (response.ok) {
        alert('Thank you for applying! We will contact you soon.');
        // Reset form
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          experience: '',
          specialty: '',
          location: '',
          about: ''
        });
      }
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Join Our Team</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="_subject" value="New Chef/Baker Application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="Full Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          {/* Similar fields for other inputs */}
          
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-800 py-3 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
} 