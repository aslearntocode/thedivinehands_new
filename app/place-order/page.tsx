"use client";

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';

type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  pincode: string;
  deliveryDate: string;
  deliveryTime: string;
  specialInstructions: string;
};

// Separate OrderForm component
function OrderForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const items: OrderItem[] = JSON.parse(searchParams.get('items') || '[]');
  const subtotal = Number(searchParams.get('subtotal')) || 0;
  const deliveryFee = Number(searchParams.get('deliveryFee')) || 0;
  const total = Number(searchParams.get('total')) || 0;
  const vendorName = searchParams.get('vendorName') || '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    deliveryDate: '',
    deliveryTime: '',
    specialInstructions: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderDetails = {
      items,
      subtotal,
      deliveryFee,
      total,
      vendorName,
      customerDetails: formData
    };

    console.log('Order Details:', orderDetails);
    
    // TODO: Add your API call here to submit the order
    router.push('/order-confirmation');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Complete Your Order</h1>
      
      {/* Order Summary */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <p className="text-gray-600 mb-4">Ordering from: {vendorName}</p>
        
        {items.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee {subtotal < 1000 && '(Free delivery above ₹1000)'}</span>
            <span>₹{deliveryFee}</span>
          </div>
          <div className="flex justify-between font-bold mt-2 pt-2 border-t">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>

      {/* Customer Details Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">PIN Code</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              required
              value={formData.pincode}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">Delivery Date</label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              required
              value={formData.deliveryDate}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700">Preferred Delivery Time</label>
            <input
              type="time"
              id="deliveryTime"
              name="deliveryTime"
              required
              value={formData.deliveryTime}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">Special Instructions (Optional)</label>
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              rows={3}
              value={formData.specialInstructions}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-block bg-yellow-400 text-gray-800 px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}

// Main page component with Suspense
export default function PlaceOrderPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-xl">Loading order details...</p>
        </div>
      </div>
    }>
      <OrderForm />
    </Suspense>
  );
} 