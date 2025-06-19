import React from 'react';
import { motion } from 'framer-motion';

const ConceptQVT: React.FC = () => {
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
          <img
            src="/images/concept-hero.jpg"
            alt="Illustration phygitale QVT Box"
            className="w-full h-full object-cover opacity-20"
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

      {/* Innovations Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Nos piliers d’innovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Diagnostic Express',
              icon: '/images/icon-diagnostic.svg',
              desc: 'Questionnaire 2 minutes pour évaluer stress, fatigue et engagement.',
            },
            {
              title: 'Suivi Continu',
              icon: '/images/icon-suivi.svg',
              desc: 'Mood-tracker et QVTSCORE pour détecter les signaux faibles.',
            },
            {
              title: 'Box Mensuelle',
              icon: '/images/icon-box.svg',
              desc: '3–4 produits bien-être, ergonomie et nutrition anti-stress.',
            },
            {
              title: 'Recommandations IA',
              icon: '/images/icon-ia.svg',
              desc: 'Micro-exercices et pauses actives générés par une IA préventive.',
            },
            {
              title: 'Portail Multi-Profils',
              icon: '/images/icon-portal.svg',
              desc: 'Dashboards anonymisés pour RH et familles.',
            },
            {
              title: 'Engagement Durable',
              icon: '/images/icon-durable.svg',
              desc: 'Sourcing local, packaging recyclable, impact social positif.',
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 w-20 h-20">
                <img src={f.icon} alt={f.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-600 max-w-xs">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Inscription rapide', desc: 'Choix du segment et création du compte.' },
              { step: '2', title: 'Diagnostic instantané', desc: 'Questionnaire express et première évaluation.' },
              { step: '3', title: 'Réception de la Box', desc: 'Livraison mensuelle de vos outils.' },
              { step: '4', title: 'Suivi & Coaching', desc: 'Suivi quotidien et recommandations personnalisées.' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * i }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{s.step}</div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{s.title}</h4>
                <p className="text-slate-600 max-w-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Ils parlent de nous
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { quote: "Nous avons réduit l’absentéisme de 30% en 6 mois.", author: 'Marie, DRH PME' },
            { quote: "Un vrai lien recréé avec ma fille.", author: 'Julien, parent' },
          ].map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 * i }}
              className="border-l-4 border-blue-300 pl-6 italic text-slate-700"
            >
              <p className="mb-4">“{t.quote}”</p>
              <cite className="font-semibold text-slate-800">— {t.author}</cite>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-700 mb-6"
          >
            Transformez votre quotidien
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-lg text-blue-600 max-w-xl mx-auto"
          >
            Rejoignez-nous et intégrez des rituels bien-être concrets, à la maison comme au bureau.
          </motion.p>
          <motion.a
            href="/inscription"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Je participe
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
