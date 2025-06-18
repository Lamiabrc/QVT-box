
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Users, User, LogOut, Shield } from 'lucide-react';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';

const Header = () => {
  const { user, isAdmin } = useSecureAuth();
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est lamia.brechet@outlook.fr
  const isSuperAdmin = user?.email === 'lamia.brechet@outlook.fr';

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo-qvt.png" 
              alt="QVT Box Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">QVT Box</h1>
              <p className="text-sm text-gray-600">Qualité de Vie au Travail</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/entreprise" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Building2 className="h-4 w-4" />
              <span>Entreprise</span>
            </Link>
            <Link 
              to="/teens" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>Famille</span>
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {isSuperAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm" className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100">
                      <Shield className="h-4 w-4 mr-2" />
                      Admin Principal
                    </Button>
                  </Link>
                )}
                {isAdmin && !isSuperAdmin && (
                  <Link to="/entreprise/admin-dashboard">
                    <Button variant="outline" size="sm">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Déconnexion</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/entreprise/login">
                  <Button variant="outline" size="sm">
                    Connexion
                  </Button>
                </Link>
                <Link to="/entreprise/register">
                  <Button size="sm">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
