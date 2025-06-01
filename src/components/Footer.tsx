
import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-gray-600 font-semibold">Conçu et développé en France</span>
          </div>
          <p className="text-gray-500">
            &copy; 2024 QVT Box - Intelligence Artificielle française pour la Qualité de Vie
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
