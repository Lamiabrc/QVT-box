
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Sparkles, Heart } from 'lucide-react';

const BoxCatalog = () => {
  const boxes = [
    {
      id: 'starter',
      name: 'Box Découverte Kawaii',
      price: '14.99€/mois',
      description: 'Parfait pour commencer ton voyage zen !',
      features: ['3-4 produits kawaii', 'Journal manga', 'Méditation guidée'],
      color: 'from-pink-100 to-purple-100',
      border: 'border-pink-300',
      popular: false
    },
    {
      id: 'premium',
      name: 'Box Premium Anime',
      price: '24.99€/mois',
      description: 'L\'expérience complète pour les vrais otakus !',
      features: ['6-8 produits premium', 'Objets collector', 'Contenu exclusif', 'Livraison express'],
      color: 'from-purple-100 to-blue-100',
      border: 'border-purple-300',
      popular: true
    },
    {
      id: 'family',
      name: 'Box Famille Zen',
      price: '34.99€/mois',
      description: 'Parfait pour partager le zen en famille !',
      features: ['2 box ados', '1 guide parent', 'Activités famille', 'Support premium'],
      color: 'from-blue-100 to-green-100',
      border: 'border-blue-300',
      popular: false
    }
  ];

  return (
    <Card className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 border-2 border-pink-300">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          <Gift className="h-6 w-6 text-pink-600" />
          📦 Tes Box Mensuelles Kawaii ✨
        </CardTitle>
        <CardDescription className="text-center text-gray-700">
          Reçois automatiquement ta box personnalisée chaque mois selon ton forfait !
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`bg-gradient-to-br ${box.color} rounded-xl p-6 border-2 ${box.border} relative hover:shadow-lg transition-all`}
            >
              {box.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-yellow-900 font-bold">
                    <Sparkles className="h-3 w-3 mr-1" />
                    POPULAIRE
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{box.name}</h3>
                <div className="text-2xl font-black text-purple-600 mb-2">{box.price}</div>
                <p className="text-sm text-gray-600">{box.description}</p>
              </div>
              
              <ul className="space-y-2 mb-4">
                {box.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <Heart className="h-3 w-3 text-pink-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${box.popular ? 'bg-purple-500 hover:bg-purple-600' : 'bg-pink-500 hover:bg-pink-600'} text-white font-bold`}
              >
                {box.popular ? '🌟 Choisir Premium' : '✨ Choisir cette box'}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            🎁 Ton forfait inclut : Livraison gratuite • Support client • Personnalisation • Exclusivités
          </p>
          <Badge className="bg-green-100 text-green-700">
            ✅ Sans engagement • Résilie quand tu veux
          </Badge>
        </div>import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Sparkles, Heart } from 'lucide-react';

// Import des données externes (remplir boxesData.ts avec vos 30 objets)
import { boxes } from '@/data/boxesData';

const BoxCatalog: React.FC = () => {
  return (
    <Card className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 border-2 border-pink-300">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          <Gift className="h-6 w-6 text-pink-600" />
          📦 Tes Box Mensuelles Kawaii ✨
        </CardTitle>
        <CardDescription className="text-center text-gray-700">
          Reçois automatiquement ta box personnalisée chaque mois selon ton forfait !
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`bg-gradient-to-br ${box.color} rounded-xl p-6 border-2 ${box.border} relative hover:shadow-lg transition-all`}
            >
              {box.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-yellow-900 font-bold">
                    <Sparkles className="h-3 w-3 mr-1" />
                    POPULAIRE
                  </Badge>
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{box.name}</h3>
                <div className="text-2xl font-black text-purple-600 mb-2">{box.price}</div>
                <p className="text-sm text-gray-600">{box.description}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {box.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <Heart className="h-3 w-3 text-pink-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${box.popular
                  ? 'bg-purple-500 hover:bg-purple-600'
                  : 'bg-pink-500 hover:bg-pink-600'
                } text-white font-bold`}
              >
                {box.popular ? '🌟 Choisir Premium' : '✨ Choisir cette box'}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            🎁 Ton forfait inclut : Livraison gratuite • Support client • Personnalisation • Exclusivités
          </p>
          <Badge className="bg-green-100 text-green-700">
            ✅ Sans engagement • Résilie quand tu veux
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoxCatalog;

      </CardContent>
    </Card>
  );
};

export default BoxCatalog;
