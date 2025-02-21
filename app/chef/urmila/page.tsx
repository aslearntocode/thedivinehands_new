import Image from 'next/image';
import Link from 'next/link';

// Static chef data
const chefData = {
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
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Chef Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={chefData.imageUrl}
                alt={chefData.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{chefData.name}</h1>
            <p className="text-xl text-yellow-600 mb-4">Specialty: {chefData.specialty}</p>
            <div className="flex gap-4 mb-6">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {chefData.experience}
              </span>
            </div>
            <p className="text-gray-700 mb-8">{chefData.bio}</p>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Menu Selection</h2>
          
          {chefData.menu.map((section, index) => (
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

// Static metadata export
export const metadata = {
  title: 'Chef Urmila Saud - The Divine Hands',
  description: 'Experienced chef specializing in multi-cuisine dishes with expertise in Indian, Chinese, and Continental cuisines.'
}; 