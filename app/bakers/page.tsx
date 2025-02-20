import Image from 'next/image';
import Link from 'next/link';

const bakers = [
  {
    id: 'juhi-kastiya',
    name: 'Baker Juhi Kastiya',
    specialty: 'Stuffed eggless breads',
    imageUrl: '/images/Juhi_Kastiya.jpg',
    fallbackImage: 'https://placehold.co/400x400?text=Baker+Juhi',
    profileLink: '/baker/juhi-kastiya',
    isProfileReady: true
  },
  {
    id: 'coming-soon-1',
    name: 'Coming Soon',
    specialty: 'TBA',
    imageUrl: 'https://placehold.co/200x200?text=Coming+Soon',
    description: 'New baker joining our team soon!',
    profileLink: '#',
    isProfileReady: false
  },
  {
    id: 'coming-soon-2',
    name: 'Coming Soon',
    specialty: 'TBA',
    imageUrl: 'https://placehold.co/200x200?text=Coming+Soon',
    description: 'New baker joining our team soon!',
    profileLink: '#',
    isProfileReady: false
  }
];

export default function BakersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Our Featured Bakers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bakers.map((baker) => (
          <div key={baker.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src={baker.imageUrl}
                alt={baker.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={baker.id === 'juhi-kastiya'}
              />
            </div>
            
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{baker.name}</h2>
              <p className="text-gray-600 mb-4">Specialty: {baker.specialty}</p>
              
              {baker.isProfileReady ? (
                <Link 
                  href={baker.profileLink}
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