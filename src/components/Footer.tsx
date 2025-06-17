
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🍓 Strawberry Oasis</h3>
            <p className="text-gray-400 mb-4">
              Premium Egyptian strawberries exported worldwide with certified excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/farm" className="block text-gray-400 hover:text-white transition-colors">
                Our Farm
              </Link>
              <Link to="/quality" className="block text-gray-400 hover:text-white transition-colors">
                Quality
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <Link to="/export" className="block text-gray-400 hover:text-white transition-colors">
                Export Information
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div>
                <p>📞 +20 155 483 3334</p>
                <p>📞 +20 100 388 7243</p>
              </div>
              <div>
                <p>📧 ahmedelafifi@strawberryoasis.com</p>
                <p>📧 Mohamed.fahmy@strawberryoasis.com</p>
              </div>
              <p>📍 <a href="https://maps.app.goo.gl/b5RoWeXWRueUGMrV8" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">View Location</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Strawberry Oasis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
