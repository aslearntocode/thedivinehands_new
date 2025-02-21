import Image from 'next/image';
import Link from 'next/link';

// Static chef data
const chefData = {
  name: "Chef Anjali Broor",
  specialty: "North Indian Cuisine",
  imageUrl: "/images/Anjali_Broor.jpeg",
  experience: "9+ Years Experience",
  bio: "Chef Anjali Broor brings her expertise in authentic North Indian cuisine, specializing in traditional Punjabi dishes and modern Indian fusion. Her culinary journey spans over a decade, creating memorable dining experiences with her signature dishes.",
  menu: [
    {
      category: "Daily Meals",
      items: [
        {
          name: "Punjabi Thali",
          description: "Complete meal with butter chicken/paneer, dal makhani, jeera rice, and 3 rotis",
          price: "₹250"
        },
        {
          name: "Vegetarian Special",
          description: "Shahi paneer, dal tadka, pulao, raita, and 3 rotis",
          price: "₹220"
        },
        {
          name: "Light Meal Combo",
          description: "Choice of curry with rice/2 rotis and dal",
          price: "₹180"
        }
      ]
    },
    {
      category: "Special Items",
      items: [
        {
          name: "North Indian Feast",
          description: "Chole bhature with pickle and onions",
          price: "₹180"
        },
        {
          name: "Kebab Platter",
          description: "Assorted veg/non-veg kebabs with mint chutney",
          price: "₹350"
        },
        {
          name: "Biryani Special",
          description: "Choice of veg/chicken biryani with raita",
          price: "₹280"
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
  title: 'Chef Anjali Broor - The Divine Hands',
  description: 'Experienced North Indian cuisine chef specializing in traditional Punjabi dishes and modern Indian fusion.'
};
