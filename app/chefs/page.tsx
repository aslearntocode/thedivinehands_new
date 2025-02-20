import Image from 'next/image';
import Link from 'next/link';

const chefs = [
  {
    id: 'urmila',
    name: 'Chef Urmila Saud',
    specialty: 'Multi Cuisine',
    imageUrl: '/images/chef_urmila.png',
    profileLink: '/chef/urmila',
    isProfileReady: true
  },
  {
    id: 'anjali',
    name: 'Chef Anjali Broor',
    specialty: 'Multi Cuisine',
    imageUrl: '/images/Anjali_Broor.jpeg',
    profileLink: '/chef/anjali',
    isProfileReady: true
  },
  {
    id: 'ruchita',
    name: 'Chef Ruchita',
    specialty: 'Healthy Treats',
    imageUrl: '/images/placeholder-chef.png',
    profileLink: '/chef/ruchita',
    isProfileReady: true
  },
  {
    id: 'nani',
    name: "Chef Nani's Kitchen",
    specialty: 'American BBQ',
    imageUrl: '/images/placeholder-chef.png',
    profileLink: '/chef/nani',
    isProfileReady: false
  },
  {
    id: 'priya',
    name: 'Chef Priya Patel',
    specialty: 'Indian Cuisine',
    imageUrl: '/images/placeholder-chef.png',
    profileLink: '/chef/priya',
    isProfileReady: false
  }
];

export default function ChefsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Our Featured Chefs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chefs.map((chef) => (
          <div key={chef.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src={chef.imageUrl}
                alt={chef.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={chef.id === 'urmila' || chef.id === 'anjali'}
              />
            </div>
            
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{chef.name}</h2>
              <p className="text-gray-600 mb-4">Specialty: {chef.specialty}</p>
              
              {chef.isProfileReady ? (
                <Link 
                  href={chef.profileLink}
                  className="block w-full text-center bg-yellow-400 text-gray-800 py-2 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  View Profile and Menu
                </Link>
              ) : (
                <button 
                  disabled
                  className="block w-full text-center bg-gray-300 text-gray-600 py-2 rounded-md cursor-not-allowed"
                >
                  Profile Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 