
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/1398cdff-61cf-4c6c-a073-6f67536dd04b.png" 
                alt="QVT Box Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-lg font-bold text-primary">QVT Box</h3>
            </div>
            <p className="text-gray-600 text-sm">
              L'intelligence artificielle française au service de votre qualité de vie au travail et en famille.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/entreprise" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Espace Entreprise
                </Link>
              </li>
              <li>
                <Link to="/teens" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Espace Famille
                </Link>
              </li>
            </ul>
          </div>

          {/* Valeurs */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Nos Valeurs</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-600">100% Française</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-gray-600">RGPD Compliant</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-gray-600">Éthique & Bienveillant</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 QVT Box - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
