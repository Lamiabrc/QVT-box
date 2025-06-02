
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, User, Settings, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const TeensHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors de la déconnexion",
        variant: "destructive"
      });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 border-b border-white/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo et titre */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/teens')}
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🌟</span>
            </div>
            <h1 className="text-2xl font-black text-white">TEENS SPACE</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/teens')}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <Home className="w-4 h-4 mr-2" />
              Accueil
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/teens/metaverse')}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              🌌 Métaverse
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/teens/shop')}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              🛍️ Boutique
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/teens/calendar')}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              📅 Calendrier
            </Button>
          </nav>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              onClick={() => navigate('/profil')}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <User className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TeensHeader;
