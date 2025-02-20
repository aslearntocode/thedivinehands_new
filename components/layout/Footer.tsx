import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-yellow-400 text-xl mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-yellow-400">Careers</Link></li>
            <li><Link href="/terms" className="hover:text-yellow-400">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-yellow-400 text-xl mb-4">Connect With Us</h3>
          <a 
            href="https://www.instagram.com/the.divine.hands" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        <div>
          <h3 className="text-yellow-400 text-xl mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <i className="fas fa-phone"></i> +91 91360 33288
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-envelope"></i> thedivinehands3@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt"></i> Mumbai, Maharashtra
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 pt-5 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} The Divine Hands. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 