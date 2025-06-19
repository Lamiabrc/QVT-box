import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ConceptQVT = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex flex-col">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/images/concept-hero.jpg"
            alt="Illustration phygitale QVT Box"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </motion.div>
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-800 leading-tight"
          >
            Réinventer le bien-être,<br />du bureau au foyer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-slate-600"
          >
            QVT Box propose une expérience phygitale inédite : une box mensuelle 100% française associée à une application IA éthique,
            pour prévenir le stress au travail comme à la maison.
          </motion.p>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Nos piliers d’innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Diagnostic Express',
              icon: '/images/icon-diagnostic.svg',
              description:
                'Un questionnaire de 2 minutes pour évaluer stress, fatigue et engagement, accessible à tout moment.',
            },
            {
              title: 'Suivi Continu',
              icon: '/images/icon-suivi.svg',
              description:
                'Mood-tracker et QVTSCORE pour détecter les signaux faibles et rester proactif.',
            },
            {
              title: 'Box Mensuelle',
              icon: '/images/icon-box.svg',
              description:
                '3 à 4 produits bien-être, ergonomie et nutrition anti-stress, livrés chez vous ou au bureau.',
            },
            {
              title: 'Recommandations IA',
              icon: '/images/icon-ia.svg',
              description:
                'Micro-exercices, défis et pauses actives générés par une IA préventive made in France.',
            },
            {
              title: 'Portail RH & Famille',
              icon: '/images/icon-portal.svg',
              description:
                'Tableaux de bord anonymisés et multi-profils, pour piloter la qualité de vie des équipes et des familles.',
            },
            {
              title: 'Approche Durable',
              icon: '/images/icon-durable.svg',
              description:
                'Produits locaux, packaging recyclable, engagement social et éthique garantis.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 w-20 h-20 relative">
                <Image src={item.icon} alt={item.title} layout="fill" objectFit="contain" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 max-w-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Inscription rapide',
                desc: 'En quelques clics, précisez votre profil (entreprise ou famille).',
              },
              {
                step: '2',
                title: 'Diagnostic instantané',
                desc: 'Complétez le questionnaire express et obtenez vos premiers insights.',
              },
              {
                step: '3',
                title: 'Réception de la Box',
                desc: 'Recevez chaque mois vos outils bien-être et ergonomie.',
              },
              {
                step: '4',
                title: 'Suivi & recommandations',
                desc: 'Suivez votre évolution et réalisez des micro-exercices quotidiens.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * idx }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-slate-600 max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Ils ont adopté QVT Box</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              quote: "Grâce à QVT Box, notre équipe a réduit son taux d'absentéisme de 30% en 6 mois.",
              author: 'Marie, DRH d'une PME
',
            },
            {
              quote: "Ma fille et moi avons renoué le dialogue grâce aux défis parent-ado.",
              author: 'Julien, parent d'ados',
            },
          ].map((testi, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 * idx }}
              className="border-l-4 border-blue-300 pl-6 italic text-slate-700"
            >
              <p className="mb-4">“{testi.quote}”</p>
              <cite className="font-semibold text-slate-800">— {testi.author}</cite>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-700 mb-6"
          >
            Passez à l’action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-lg text-blue-600 max-w-xl mx-auto"
          >
            Rejoignez la communauté QVT Box et transformez votre quotidien avec des rituels bien-être concrets.
          </motion.p>
          <motion.a
            href="/inscription"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            M’inscrire
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-t from-slate-200 to-transparent py-6">
        <div className="container mx-auto px-6 text-center text-slate-500">
          © {new Date().getFullYear()} QVT Box. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default ConceptQVT;
