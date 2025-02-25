"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Static baker data
const bakerData = {
  name: "Baker Juhi Kastiya",
  specialty: "Stuffed Eggless Bread",
  imageUrl: "/images/Juhi_Kastiya.jpg",
  experience: "9+ Years Experience",
  bio: "I started my journey as a baker/chef 4 years back and have been baking artisanal breads ever since. It's been a wonderful journey with the love and trust of my lovely clients. I specialize in stuffed eggless breads.",
  menu: [
    {
      category: "Breads",
      items: [
        {
          name: "Stuffed Garlic Bread",
          description: "Eggless bread stuffed with garlic, herbs, and cheese",
          price: "₹200"
        },
        {
          name: "Masala Bread",
          description: "Spiced bread with Indian masala filling",
          price: "₹180"
        },
        {
          name: "Cheese Bread",
          description: "Soft bread loaded with cheese",
          price: "₹220"
        }
      ]
    },
    {
      category: "Special Items",
      items: [
        {
          name: "Pizza Bread",
          description: "Bread with pizza toppings and sauce",
          price: "₹250"
        },
        {
          name: "Sweet Bread",
          description: "Bread with sweet filling and glaze",
          price: "₹200"
        },
        {
          name: "Focaccia",
          description: "Italian bread with herbs and olive oil",
          price: "₹230"
        }
      ]
    }
  ]
};

type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

export default function Page() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const getNumericPrice = (priceStr: string) => {
    return parseInt(priceStr.replace('₹', ''));
  };

  const handleQuantityChange = (itemName: string, price: string, quantity: number) => {
    const numericPrice = getNumericPrice(price);
    
    setOrderItems(prev => {
      const existingItem = prev.find(item => item.name === itemName);
      if (existingItem) {
        if (quantity === 0) {
          return prev.filter(item => item.name !== itemName);
        }
        return prev.map(item => 
          item.name === itemName ? { ...item, quantity } : item
        );
      }
      if (quantity > 0) {
        return [...prev, { name: itemName, price: numericPrice, quantity }];
      }
      return prev;
    });
  };

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal < 1000 ? 100 : 0;
  const total = subtotal + deliveryFee;

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Baker Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={bakerData.imageUrl}
                alt={bakerData.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{bakerData.name}</h1>
            <p className="text-xl text-yellow-600 mb-4">Specialty: {bakerData.specialty}</p>
            <div className="flex gap-4 mb-6">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {bakerData.experience}
              </span>
            </div>
            <p className="text-gray-700 mb-8">{bakerData.bio}</p>
          </div>
        </div>

        {/* Modified Menu Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Menu Selection</h2>
          
          {bakerData.menu.map((section, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-xl font-semibold mb-6">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <p className="text-yellow-600 font-semibold mb-3">{item.price}</p>
                    <div className="flex items-center gap-2">
                      <label htmlFor={`quantity-${itemIndex}`} className="text-sm">Quantity:</label>
                      <input
                        type="number"
                        id={`quantity-${itemIndex}`}
                        min="0"
                        value={orderItems.find(orderItem => orderItem.name === item.name)?.quantity || 0}
                        onChange={(e) => handleQuantityChange(item.name, item.price, parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-1 border rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        {orderItems.length > 0 && (
          <div className="mb-16 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {orderItems.map((item, index) => (
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
        )}

        {/* Replace WhatsApp Order Button with Place Order Button */}
        <div className="text-center">
          <Link
            href={{
              pathname: '/place-order',
              query: {
                items: JSON.stringify(orderItems),
                subtotal: subtotal,
                deliveryFee: deliveryFee,
                total: total,
                vendorName: bakerData.name // Add vendor name to know who's receiving the order
              }
            }}
            className={`inline-block bg-yellow-400 text-gray-800 px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors ${
              orderItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={(e) => {
              if (orderItems.length === 0) {
                e.preventDefault();
                alert('Please select at least one item to order');
              }
            }}
          >
            Place Order
          </Link>
        </div>
      </section>
    </main>
  );
} 