import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    sujet: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici, vous ajouteriez la logique d'envoi
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Une question ? Un projet ? Notre équipe est là pour vous accompagner 
                dans votre démarche de bien-être.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulaire de contact */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Envoyez-nous un message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <Input id="nom" name="nom" type="text" required value={formData.nom} onChange={handleChange} placeholder="Votre nom" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="votre@email.com" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise / Organisation
                      </label>
                      <Input id="entreprise" name="entreprise" type="text" value={formData.entreprise} onChange={handleChange} placeholder="Nom de votre entreprise" />
                    </div>

                    <div>
                      <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <Input id="sujet" name="sujet" type="text" required value={formData.sujet} onChange={handleChange} placeholder="Objet de votre demande" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Décrivez votre projet ou votre question..." rows={6} />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 rounded-xl shadow-lg">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Informations de contact */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Informations de contact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <a href="mailto:contact@qvtbox.fr" className="text-primary hover:text-primary/80">contact@qvtbox.com</a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Téléphone</p>
                          <a href="tel:+33123456789" className="text-primary hover:text-primary/80">+33 2 23 24 28 45</a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Adresse</p>
                          <p className="text-gray-600">
                            123 Avenue Innovation<br />
                            75001 Paris, France
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Horaires d'ouverture
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-gray-900">Lundi - Vendredi</p>
                          <p className="text-gray-600">9h00 - 18h00</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">Weekend</p>
                          <p className="text-gray-600">Fermé</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      💬 Besoin d'aide immédiate ?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Consultez notre FAQ ou nos guides d'utilisation pour trouver 
                      rapidement les réponses à vos questions.
                    </p>
                    <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                      Voir la FAQ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Contact;