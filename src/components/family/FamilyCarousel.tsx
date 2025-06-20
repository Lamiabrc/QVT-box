
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
}

const FamilyCarousel = () => {
  const slides: CarouselSlide[] = [
    {
      id: '1',
      title: 'Connexion Familiale',
      description: 'Restez connectés avec vos proches grâce à notre plateforme bienveillante',
      image: '/images/bulle-famille.jpg',
      gradient: 'from-pink-400 via-purple-400 to-indigo-400'
    },
    {
      id: '2',
      title: 'Espace Personnel',
      description: 'Un environnement sécurisé pour exprimer ses émotions en toute confidentialité',
      image: '/images/espace-ado.png',
      gradient: 'from-blue-400 via-teal-400 to-green-400'
    },
    {
      id: '3',
      title: 'Accompagnement Expert',
      description: 'Des professionnels qualifiés pour vous guider dans votre parcours bien-être',
      image: '/images/equipe-bien-etre.png',
      gradient: 'from-orange-400 via-red-400 to-pink-400'
    },
    {
      id: '4',
      title: 'Communication Authentique',
      description: 'Des outils pour faciliter le dialogue et renforcer les liens familiaux',
      image: '/images/famille-connectee.png',
      gradient: 'from-emerald-400 via-cyan-400 to-blue-400'
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 overflow-hidden shadow-2xl">
                  <CardContent className="p-0">
                    <div className={`relative h-80 bg-gradient-to-r ${slide.gradient} flex items-center justify-between`}>
                      {/* Contenu textuel */}
                      <div className="flex-1 p-8 text-white">
                        <motion.h3 
                          className="text-3xl font-bold mb-4"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {slide.title}
                        </motion.h3>
                        <motion.p 
                          className="text-lg opacity-90 leading-relaxed"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {slide.description}
                        </motion.p>
                      </div>
                      
                      {/* Image */}
                      <div className="flex-1 h-full relative">
                        <motion.img
                          src={slide.image}
                          alt={slide.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {/* Overlay gradient pour améliorer la lisibilité */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/80 hover:bg-white shadow-lg" />
        <CarouselNext className="right-4 bg-white/80 hover:bg-white shadow-lg" />
      </Carousel>
      
      {/* Indicateurs */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-gray-300"
            whileHover={{ scale: 1.2 }}
            animate={{ backgroundColor: index === 0 ? '#3B82F6' : '#D1D5DB' }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default FamilyCarousel;
