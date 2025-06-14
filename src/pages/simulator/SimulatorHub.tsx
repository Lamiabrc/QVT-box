
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Heart, ArrowRight, Star, Clock, CheckCircle } from "lucide-react";

const SimulatorHub = () => {
  const navigate = useNavigate();

  const simulatorTypes = [
    {
      id: 'entreprise',
      title: 'Simulateur Entreprise',
      description: 'Évaluez la qualité de vie au travail dans votre organisation',
      icon: Building2,
      color: 'bg-blue-500',
      features: ['Évaluation individuelle', 'Analyse d\'équipe', 'Dashboard manager'],
      route: '/entreprise/simulator',
      badge: 'Professionnel'
    },
    {
      id: 'famille',
      title: 'Simulateur Famille',
      description: 'Explorez les dynamiques familiales de manière interactive',
      icon: Heart,
      color: 'bg-pink-500',
      features: ['Questions ludiques', 'Animations interactives', 'Résultats personnalisés'],
      route: '/famille/simulator',
      badge: 'Familial'
    },
    {
      id: 'teens',
      title: 'Simulateur Teens',
      description: 'Évaluation du bien-être pour les adolescents',
      icon: Users,
      color: 'bg-purple-500',
      features: ['Interface jeune', 'Questions adaptées', 'Suivi parental'],
      route: '/teens/questionnaire',
      badge: 'Jeunes'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hub des Simulateurs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le simulateur qui correspond à vos besoins. Chaque simulateur 
            est spécialement conçu pour son contexte d'utilisation.
          </p>
        </div>

        {/* Simulators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {simulatorTypes.map((simulator) => {
            const IconComponent = simulator.icon;
            return (
              <Card key={simulator.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`absolute top-0 right-0 w-20 h-20 ${simulator.color} opacity-10 rounded-full -mr-10 -mt-10`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg ${simulator.color} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary">{simulator.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {simulator.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {simulator.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-800">Fonctionnalités :</h4>
                    <ul className="space-y-1">
                      {simulator.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button 
                      onClick={() => navigate(simulator.route)}
                      className={`w-full ${simulator.color} hover:opacity-90 text-white`}
                    >
                      <span>Accéder au simulateur</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Statistiques des Simulateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Évaluations complétées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8 min</div>
              <div className="text-gray-600">Durée moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Entreprises</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Pourquoi nos simulateurs ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Scientifiquement validés</h4>
                  <p className="text-sm text-gray-600">Basés sur des recherches reconnues</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Personnalisés</h4>
                  <p className="text-sm text-gray-600">Adaptés à chaque contexte d'usage</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Confidentiels</h4>
                  <p className="text-sm text-gray-600">Vos données restent privées</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                Comment ça marche ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Choisissez votre simulateur</h4>
                  <p className="text-sm text-gray-600">Sélectionnez celui qui correspond à vos besoins</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Répondez aux questions</h4>
                  <p className="text-sm text-gray-600">Prenez 5-10 minutes pour compléter l'évaluation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold">Obtenez vos résultats</h4>
                  <p className="text-sm text-gray-600">Recevez des recommandations personnalisées</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SimulatorHub;
