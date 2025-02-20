import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from an API or database
const chefsData = {
  urmila: {
    name: "Chef Urmila Saud",
    specialty: "Multi Cuisine",
    imageUrl: "/images/chef_urmila.png",
    experience: "15+ Years Experience",
    bio: "Experienced chef specializing in multi-cuisine dishes with expertise in Indian, Chinese, and Continental cuisines. Known for creating delicious home-style meals that bring comfort and satisfaction to every plate.",
    menu: [
      {
        category: "Daily Meals",
        items: [
          {
            name: "Standard Thali",
            description: "Complete meal with 2 sabzi, dal, rice, and 4 rotis",
            price: "₹200"
          },
          {
            name: "Premium Thali",
            description: "Deluxe meal with 3 sabzi, dal fry, pulao, and 4 rotis",
            price: "₹250"
          },
          {
            name: "Mini Meal",
            description: "Light meal with 1 sabzi, dal, rice, and 2 rotis",
            price: "₹150"
          }
        ]
      },
      {
        category: "Special Items",
        items: [
          {
            name: "Paneer Special",
            description: "Choice of paneer dish with butter naan",
            price: "₹300"
          },
          {
            name: "Chinese Combo",
            description: "Noodles/fried rice with manchurian",
            price: "₹250"
          },
          {
            name: "South Indian Platter",
            description: "Dosa/Idli with sambar and chutney",
            price: "₹200"
          }
        ]
      }
    ]
  },
  anjali: {
    name: "Chef Anjali Broor",
    specialty: "Multi Cuisine",
    imageUrl: "/images/Anjali_Broor.jpeg",
    experience: "10+ Years Experience",
    bio: "Passionate about creating authentic multi-cuisine experiences. Specializing in North Indian, Chinese, and Continental dishes. Every meal is prepared with love and attention to detail.",
    menu: [
      {
        category: "Main Course",
        items: [
          {
            name: "Special Thali",
            description: "Deluxe meal with variety of dishes including 3 sabzi, dal, rice, and rotis",
            price: "₹250"
          },
          {
            name: "Veg Combo",
            description: "Choice of 2 veg dishes with rice and rotis",
            price: "₹200"
          },
          {
            name: "Party Pack",
            description: "Special menu for small gatherings (serves 4)",
            price: "₹999"
          }
        ]
      },
      {
        category: "Specialty Items",
        items: [
          {
            name: "Chinese Platter",
            description: "Assorted Chinese dishes with rice/noodles",
            price: "₹350"
          },
          {
            name: "Continental Special",
            description: "Choice of pasta/sandwich with sides",
            price: "₹300"
          },
          {
            name: "Snacks Combo",
            description: "Assorted snacks perfect for evening",
            price: "₹250"
          }
        ]
      }
    ]
  },
  ruchita: {
    name: "Chef Ruchita",
    specialty: "Healthy Treats",
    imageUrl: "https://placehold.co/200x200",
    about: "Mad Batter was born out of my cravings for guilty free indulgence. Most of my menu is healthy and sugar free with a few options for your cheat day!",
    menu: []
  },
  
  nani: {
    name: "Chef Nani's Kitchen",
    specialty: "American BBQ",
    imageUrl: "https://placehold.co/200x200",
    about: "Bringing authentic American BBQ flavors...",
    menu: []
  },
  priya: {
    name: "Chef Priya Patel",
    specialty: "Indian Cuisine",
    imageUrl: "https://placehold.co/200x200",
    about: "Expert in traditional Indian cuisine...",
    menu: []
  }
};

export default function ChefProfile({ params }: { params: { id: string } }) {
  const chef = chefsData[params.id as keyof typeof chefsData];

  if (!chef) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Chef Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={chef.imageUrl}
                alt={chef.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{chef.name}</h1>
            <p className="text-xl text-yellow-600 mb-4">Specialty: {chef.specialty}</p>
            <div className="flex gap-4 mb-6">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {chef.experience}
              </span>
            </div>
            <p className="text-gray-700 mb-8">{chef.bio}</p>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Menu Selection</h2>
          
          {chef.menu.map((section, index) => (
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
                    <p className="text-yellow-600 font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <div className="text-center">
          <Link
            href="https://wa.me/919136033288?text=Hi,%20I%20would%20like%20to%20order%20from%20your%20menu"
            target="_blank"
            className="inline-block bg-yellow-400 text-gray-800 px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Order via WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}