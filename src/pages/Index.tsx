
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Building2, Heart, Star, CheckCircle, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

function Index() {
  const navigate = useNavigate();
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Animate logo on load
    if (logoRef.current) {
      logoRef.current.style.transform = 'scale(1.2)';
    }
  }, []);

  const universes = [
    {
      title: "QVT FAMILLE",
      description: "Solutions bien-être pour toute la famille",
      image: "/images/bulle-famille.jpg",
      route: "/famille",
      color: "from-pink-500 to-purple-500",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "QVT TEENS",
      description: "Accompagnement spécialisé pour adolescents",
      image: "/images/bulle-ado.jpg",
      route: "/teens",
      color: "from-purple-500 to-indigo-500",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "QVT ENTREPRISE",
      description: "Qualité de vie au travail pour vos équipes",
      image: "/images/bulle-boutique-entreprise.jpg",
      route: "/entreprise",
      color: "from-blue-500 to-teal-500",
      icon: <Building2 className="w-6 h-6" />
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Évaluation Intelligente",
      description: "IA pour analyser le bien-être"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Solutions Personnalisées",
      description: "Recommandations adaptées"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Accompagnement Expert",
      description: "Suivi professionnel continu"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.img
              ref={logoRef}
              src="/images/logo-qvt.png"
              alt="QVT Logo"
              className="w-48 h-48 mx-auto mb-8 object-contain transition-transform duration-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            
            <motion.h1 
              className="text-6xl font-bold text-gray-900 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              QVT <span className="text-blue-600">Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Plateforme innovante d'accompagnement pour le bien-être et la qualité de vie
            </motion.p>

            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Découvrir nos solutions
              </Button>
              <Button variant="outline" size="lg">
                En savoir plus
              </Button>
            </motion.div>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Universe Selection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre univers
            </h2>
            <p className="text-xl text-gray-600">
              Solutions personnalisées pour chaque contexte de vie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {universes.map((universe, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  className="overflow-hidden hover:shadow-xl transition-all cursor-pointer border-2 hover:border-blue-500"
                  onClick={() => navigate(universe.route)}
                >
                  <div className={`h-2 bg-gradient-to-r ${universe.color}`} />
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {universe.icon}
                      <CardTitle className="text-2xl">{universe.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={universe.image} 
                      alt={universe.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-600 mb-6">{universe.description}</p>
                    <Button className="w-full group">
                      Accéder
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à améliorer votre qualité de vie ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'utilisateurs qui ont transformé leur bien-être
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              Commencer maintenant
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Découvrir le concept
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
