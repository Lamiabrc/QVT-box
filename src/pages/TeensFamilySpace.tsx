
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Users, MessageCircle, Gift, Calendar, Star, Camera } from "lucide-react";

const TeensFamilySpace = () => {
  const navigate = useNavigate();

  const familyMembers = [
    {
      name: "Maman 💖",
      avatar: "👩‍💼",
      status: "en ligne",
      mood: "😊",
      lastActivity: "Il y a 2h"
    },
    {
      name: "Papa 🧔",
      avatar: "👨‍💼", 
      status: "occupé",
      mood: "😴",
      lastActivity: "Il y a 5h"
    },
    {
      name: "Ma sœur 👧",
      avatar: "👧",
      status: "en ligne",
      mood: "🎮",
      lastActivity: "Il y a 30min"
    }
  ];

  const familyMessages = [
    {
      from: "Maman",
      message: "Tu rentres à quelle heure ce soir ? 🏠",
      time: "14:30",
      type: "question"
    },
    {
      from: "Papa",
      message: "Super fier de tes notes ! 🎉",
      time: "12:15",
      type: "encouragement"
    },
    {
      from: "Ma sœur",
      message: "On fait une partie plus tard ? 🎮",
      time: "11:45",
      type: "fun"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-orange-500 rounded-full animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/teens')}
              className="flex items-center space-x-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-pink-400" />
              <h1 className="text-2xl font-black text-white">ESPACE FAMILLE</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-6">
            👨‍👩‍👧‍👦 MA TRIBU
          </h1>
          <p className="text-xl text-white mb-8">
            Ton espace safe pour rester connecté avec ta famille 💕
          </p>
        </div>

        {/* Family Members Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {familyMembers.map((member, index) => (
            <Card key={index} className="group bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Badge className={member.status === 'en ligne' ? 'bg-green-500/20 text-green-300' : 'bg-orange-500/20 text-orange-300'}>
                    {member.status}
                  </Badge>
                  <span className="text-2xl">{member.mood}</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">{member.lastActivity}</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600 flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
                    <Gift className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Family Messages */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <MessageCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Messages Famille 💬
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {familyMessages.map((msg, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {msg.from[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-white">{msg.from}</span>
                      <span className="text-xs text-gray-400">{msg.time}</span>
                      <Badge className={
                        msg.type === 'encouragement' ? 'bg-green-500/20 text-green-300' :
                        msg.type === 'question' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-purple-500/20 text-purple-300'
                      }>
                        {msg.type}
                      </Badge>
                    </div>
                    <p className="text-gray-200">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-2xl py-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              Envoyer un message à la famille
            </Button>
          </CardContent>
        </Card>

        {/* Family Activities */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-green-400" />
                Activités Famille 🎯
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-white">🎬 Soirée film - Vendredi</span>
                  <Badge className="bg-green-500/20 text-green-300">Confirmé</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-white">🍕 Pizza dimanche midi</span>
                  <Badge className="bg-yellow-500/20 text-yellow-300">En attente</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-white">🎮 Tournoi jeux vidéo</span>
                  <Badge className="bg-purple-500/20 text-purple-300">Proposé</Badge>
                </div>
              </div>
              <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 rounded-2xl">
                Proposer une activité
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-400/30 hover:border-orange-400/60 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Camera className="w-6 h-6 mr-3 text-orange-400" />
                Souvenirs Famille 📸
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  📷
                </div>
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  🎂
                </div>
                <div className="aspect-square bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  🏖️
                </div>
                <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  🎄
                </div>
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  🍰
                </div>
                <div className="aspect-square bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  ➕
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-2xl">
                <Camera className="w-4 h-4 mr-2" />
                Ajouter une photo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeensFamilySpace;
