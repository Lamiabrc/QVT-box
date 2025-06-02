import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Heart, MapPin, Users, Lightbulb, Award } from 'lucide-react';
const NosValeurs = () => {
  const valeurs = [{
    icon: <MapPin className="w-8 h-8 text-white" />,
    title: "🇫🇷 French Tech",
    description: "Fiers de notre origine française, nous développons nos solutions en France avec un savoir-faire local reconnu.",
    gradient: "from-blue-500 to-blue-600"
  }, {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "🛡️ Sécurité & Confidentialité",
    description: "Protection maximale des données personnelles avec un hébergement 100% français et une conformité RGPD stricte.",
    gradient: "from-green-500 to-green-600"
  }, {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "❤️ Bienveillance",
    description: "Approche humaine et éthique centrée sur le bien-être et l'épanouissement de chaque individu.",
    gradient: "from-pink-500 to-pink-600"
  }, {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "👥 Inclusion",
    description: "Solutions accessibles à tous, respectueuses de la diversité et adaptées aux besoins de chaque famille et entreprise.",
    gradient: "from-purple-500 to-purple-600"
  }, {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "💡 Innovation",
    description: "Recherche constante d'amélioration grâce aux dernières avancées en intelligence artificielle et bien-être.",
    gradient: "from-orange-500 to-orange-600"
  }, {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "🏆 Excellence Française",
    description: "Engagement éthique local avec du 100% fabriqué en France, partenariat avec des fabricants et fournisseurs français engagés et éthiques.",
    gradient: "from-indigo-500 to-indigo-600"
  }];
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nos Valeurs
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Découvrez les principes fondamentaux qui guident QVT Box dans sa mission 
                d'amélioration du bien-être au travail et en famille.
              </p>
            </div>

            {/* Valeurs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {valeurs.map((valeur, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="">
                        {valeur.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {valeur.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {valeur.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Engagement Section */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary/20 mb-12">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Notre Engagement
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
                    Chez QVT Box, nous nous engageons à respecter ces valeurs dans chacune de nos actions. 
                    Que ce soit dans le développement de nos algorithmes d'IA, la conception de nos box 
                    bien-être, ou l'accompagnement de nos utilisateurs, nous plaçons l'humain au cœur 
                    de notre démarche.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-primary mb-2">🎯 Transparence</h4>
                      <p className="text-sm text-gray-600">Communication claire sur nos méthodes et objectifs</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-primary mb-2">🤝 Partenariat</h4>
                      <p className="text-sm text-gray-600">Collaboration étroite avec nos clients et utilisateurs</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-primary mb-2">🌱 Durabilité</h4>
                      <p className="text-sm text-gray-600">Solutions pérennes pour un impact positif durable</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Partagez-vous nos valeurs ?
              </h3>
              <p className="text-gray-600 mb-6">
                Rejoignez-nous dans cette démarche d'amélioration du bien-être au travail et en famille.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl shadow-lg" onClick={() => window.location.href = '/entreprise'}>
                  Découvrir nos solutions
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl" onClick={() => window.location.href = '/qui-sommes-nous'}>
                  En savoir plus sur nous
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default NosValeurs;