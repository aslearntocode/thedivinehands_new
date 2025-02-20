import Image from 'next/image';
import Link from 'next/link';

interface ChefCardProps {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  rating: number;
  location: string;
}

const ChefCard = ({ id, name, specialty, imageUrl, rating, location }: ChefCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{specialty}</p>
        
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i}
              className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
        </div>
        
        <p className="text-gray-500 text-sm mb-4">
          <i className="fas fa-map-marker-alt mr-2"></i>
          {location}
        </p>
        
        <Link 
          href={`/chef/${id}`}
          className="block w-full text-center bg-yellow-400 text-gray-800 py-2 rounded-md hover:bg-yellow-500 transition-colors"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default ChefCard; 