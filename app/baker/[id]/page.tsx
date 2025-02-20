import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Baker data structure
const bakersData = {
  'juhi-kastiya': {
    name: 'Baker Juhi Kastiya',
    specialty: 'Stuffed Eggless Bread',
    imageUrl: '/images/Juhi_Kastiya.jpg',
    experience: '9+ Years Experience',
    bio: `I started my journey as a baker/chef 4 years back and have been baking artisinal breads ever since. 
          It's been a wonderful journey with the love and trust of my lovely clients. 
          I specialize in stuffed eggless breads.`,
    menu: [
      {
        category: "Breads",
        items: [
          {
            name: "Stuffed Garlic Bread",
            description: "Fresh baked bread filled with garlic, herbs and cheese",
            price: "₹299"
          },
          {
            name: "Cheese Bread",
            description: "Soft bread loaded with mozzarella cheese",
            price: "₹249"
          },
          {
            name: "Masala Bread",
            description: "Spiced Indian-style stuffed bread",
            price: "₹279"
          }
        ]
      },
      {
        category: "Special Items",
        items: [
          {
            name: "Pizza Base",
            description: "Freshly made artisanal pizza base",
            price: "₹199/pack"
          },
          {
            name: "Dinner Rolls",
            description: "Soft and fluffy eggless dinner rolls",
            price: "₹249/dozen"
          },
          {
            name: "Focaccia",
            description: "Italian bread with herbs and olive oil",
            price: "₹299"
          }
        ]
      }
    ]
  },
  // Add more bakers here with the same structure
};

export default function BakerPage({ params }: { params: { id: string } }) {
  const baker = bakersData[params.id];

  if (!baker) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Baker Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={baker.imageUrl}
                alt={baker.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{baker.name}</h1>
            <p className="text-xl text-yellow-600 mb-4">Specialty: {baker.specialty}</p>
            <div className="flex gap-4 mb-6">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {baker.experience}
              </span>
            </div>
            <p className="text-gray-700 mb-8">{baker.bio}</p>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Menu Selection</h2>
          
          {baker.menu.map((section, index) => (
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