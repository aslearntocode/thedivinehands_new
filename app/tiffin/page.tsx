'use client';

import { useState } from 'react';

interface Meal {
  day: string;
  mealType: string;
  quantity: number;
  price: number;
}

interface SelectedMeals {
  [key: string]: Meal;
}

const PRICE_PER_MEAL = 150;

const weeklyMenu = {
  monday: {
    lunch: {
      items: [
        'Dal Tadka',
        'Jeera Rice',
        'Mixed Vegetable Curry',
        'Chapati (3)',
        'Green Salad',
        'Papad'
      ]
    },
    dinner: {
      items: [
        'Palak Paneer',
        'Steamed Rice',
        'Dal Fry',
        'Chapati (3)',
        'Boondi Raita',
        'Pickle'
      ]
    }
  },
  tuesday: {
    lunch: {
      items: [
        'Rajma Masala',
        'Veg Pulao',
        'Aloo Gobi',
        'Chapati (3)',
        'Onion Salad',
        'Roasted Papad'
      ]
    },
    dinner: {
      items: [
        'Kadai Paneer',
        'Plain Rice',
        'Dal Tadka',
        'Chapati (3)',
        'Mix Veg Raita',
        'Pickle'
      ]
    }
  },
  wednesday: {
    lunch: {
      items: [
        'Chole Masala',
        'Veg Biryani',
        'Bhindi Fry',
        'Chapati (3)',
        'Mixed Salad',
        'Papad'
      ]
    },
    dinner: {
      items: [
        'Dal Makhani',
        'Jeera Rice',
        'Matar Mushroom',
        'Chapati (3)',
        'Cucumber Raita',
        'Pickle'
      ]
    }
  },
  thursday: {
    lunch: {
      items: [
        'Mix Dal',
        'Veg Pulao',
        'Aloo Matar',
        'Chapati (3)',
        'Carrot Salad',
        'Papad'
      ]
    },
    dinner: {
      items: [
        'Shahi Paneer',
        'Steamed Rice',
        'Dal Fry',
        'Chapati (3)',
        'Onion Raita',
        'Pickle'
      ]
    }
  },
  friday: {
    lunch: {
      items: [
        'Kadhi Pakora',
        'Plain Rice',
        'Aloo Capsicum',
        'Chapati (3)',
        'Green Salad',
        'Roasted Papad'
      ]
    },
    dinner: {
      items: [
        'Malai Kofta',
        'Jeera Rice',
        'Dal Tadka',
        'Chapati (3)',
        'Mix Veg Raita',
        'Pickle'
      ]
    }
  },
  saturday: {
    lunch: {
      items: [
        'Dal Makhani',
        'Veg Pulao',
        'Paneer Bhurji',
        'Chapati (3)',
        'Cucumber Salad',
        'Papad'
      ]
    },
    dinner: {
      items: [
        'Mix Veg Curry',
        'Plain Rice',
        'Chana Dal',
        'Chapati (3)',
        'Boondi Raita',
        'Pickle'
      ]
    }
  },
  sunday: {
    lunch: {
      items: [
        'Paneer Butter Masala',
        'Veg Biryani',
        'Seasonal Special Veg',
        'Butter Naan (2)',
        'Russian Salad',
        'Papad',
        'Gulab Jamun (2)'
      ]
    },
    dinner: {
      items: [
        'Kaju Curry',
        'Jeera Rice',
        'Dal Makhani',
        'Butter Naan (2)',
        'Mix Raita',
        'Pickle',
        'Suji Halwa'
      ]
    }
  }
};

export default function TiffinPage() {
  const [selectedMeals, setSelectedMeals] = useState<SelectedMeals>({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedChef, setSelectedChef] = useState('all');

  const selectMeal = (day: string, mealType: string, quantity: number) => {
    if (quantity > 0) {
      setSelectedMeals(prev => ({
        ...prev,
        [`${day}-${mealType}`]: {
          day,
          mealType,
          quantity,
          price: quantity * PRICE_PER_MEAL
        }
      }));
    } else {
      const newMeals = { ...selectedMeals };
      delete newMeals[`${day}-${mealType}`];
      setSelectedMeals(newMeals);
    }
  };

  const calculateTotal = () => {
    return Object.values(selectedMeals).reduce((total, meal) => total + meal.price, 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add selected meals to form data
    Object.values(selectedMeals).forEach((meal, index) => {
      formData.append(`Meal ${index + 1}`, 
        `${meal.day} - ${meal.mealType}: ${meal.quantity} x ₹${PRICE_PER_MEAL} = ₹${meal.price}`);
    });
    
    formData.append('Total Amount', `₹${calculateTotal()}`);

    try {
      const response = await fetch('https://formsubmit.co/thedivinehands3@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Show success message and redirect
        document.body.innerHTML = "<div class='text-center p-12 text-2xl'>Thank you for placing the order. We will try to deliver it at the time specified.</div>";
        setTimeout(() => {
          window.location.href = '/';
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const filteredMenu = Object.entries(weeklyMenu).filter(([day]) => {
    if (selectedDay === 'all') return true;
    return day === selectedDay;
  });

  return (
    <main className="min-h-screen">
      <section className="py-16">
        <h1 className="text-3xl font-bold text-center mb-4">Select Your Meals and Chef - Its Simple!</h1>
        <p className="text-center mb-8">Fresh and Healthy homemade food delivered daily</p>

        {/* Filters */}
        <div className="bg-yellow-400 p-4 mb-8">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
            <div className="bg-white p-3 rounded-lg flex items-center gap-2">
              <label htmlFor="day-select">Jump to Day:</label>
              <select
                id="day-select"
                className="border p-2 rounded"
                value={selectedDay}
                onChange={(e) => {
                  setSelectedDay(e.target.value);
                  if (e.target.value !== 'all') {
                    const element = document.getElementById(e.target.value);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <option value="all">All Days</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>

            <div className="bg-white p-3 rounded-lg flex items-center gap-2">
              <label htmlFor="chef-select">Select Chef:</label>
              <select
                id="chef-select"
                className="border p-2 rounded"
                value={selectedChef}
                onChange={(e) => setSelectedChef(e.target.value)}
              >
                <option value="all">Show All Chefs</option>
                <option value="koral">Koral</option>
                <option value="monika">Monika</option>
                <option value="urmila">Urmila</option>
                <option value="nani">Nani</option>
                <option value="michael">Michael</option>
                <option value="david">David</option>
              </select>
            </div>
          </div>
        </div>

        {/* Weekly Menu */}
        <div className="max-w-6xl mx-auto px-4">
          {filteredMenu.map(([day, meals]) => (
            <div 
              key={day} 
              id={day}
              className="mb-8 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold mb-4 capitalize">
                {day === 'sunday' ? `${day} (Special)` : day}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(meals).map(([mealType, { items }]) => (
                  <div key={mealType} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 capitalize">{mealType}</h3>
                    <ul className="list-disc pl-5 mb-4">
                      {items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        min="0"
                        max="10"
                        defaultValue="0"
                        className="w-20 p-2 border rounded"
                        onChange={(e) => selectMeal(day, mealType, parseInt(e.target.value))}
                      />
                      <button 
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={() => selectMeal(day, mealType, 1)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        {Object.keys(selectedMeals).length > 0 && (
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Order Summary</h2>
            {Object.values(selectedMeals).map((meal, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <span className="capitalize">{meal.day} - {meal.mealType}</span>
                <span>{meal.quantity} x ₹{PRICE_PER_MEAL} = ₹{meal.price}</span>
              </div>
            ))}
            <div className="mt-4 text-xl font-bold">
              Total Amount: ₹{calculateTotal()}
            </div>
            <button
              className="w-full mt-4 bg-green-500 text-white py-3 rounded hover:bg-green-600"
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Checkout Form */}
        {showCheckout && (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="customerName"
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded"
              />
              <input
                type="email"
                name="customerEmail"
                placeholder="Email Address"
                required
                className="w-full p-3 border rounded"
              />
              <input
                type="tel"
                name="customerPhone"
                placeholder="Phone Number"
                required
                className="w-full p-3 border rounded"
              />
              <textarea
                name="deliveryAddress"
                placeholder="Delivery Address"
                required
                className="w-full p-3 border rounded h-32"
              />
              <select
                name="deliveryTime"
                required
                className="w-full p-3 border rounded"
              >
                <option value="">Select Preferred Delivery Time</option>
                <option value="11:30">11:30 AM (Lunch)</option>
                <option value="19:30">7:30 PM (Dinner)</option>
              </select>
              <textarea
                name="specialInstructions"
                placeholder="Special Instructions (Optional)"
                className="w-full p-3 border rounded h-32"
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600"
              >
                Place Order Now
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
} 