
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, ArrowLeft } from 'lucide-react';

const Famille = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
      <header className="border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-pink-400" />
              <h1 className="text-xl font-bold text-white">QVT FAMILLE</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Univers Famille
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Accompagnement et bien-être pour toute la famille
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20 hover:border-pink-400/50 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Heart className="w-6 h-6 mr-3 text-pink-400" />
                Espace Teens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Un espace dédié aux adolescents pour exprimer leurs émotions et accéder à des ressources adaptées.
              </p>
              <Button 
                onClick={() => navigate('/teens')}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              >
                Accéder à l'espace Teens
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20 hover:border-purple-400/50 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-400" />
                Espace Parents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Des outils et ressources pour accompagner votre rôle de parent dans le bien-être familial.
              </p>
              <Button 
                onClick={() => navigate('/family/shop-v3')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Accéder à l'espace Parents
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Famille;
