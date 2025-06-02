
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Users, Gamepad2, Heart, Sparkles, Globe, Star } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";
import { useState } from "react";

const TeensMetaverse = () => {
  const navigate = useNavigate();
  const [selectedWorld, setSelectedWorld] = useState<string | null>(null);

  const metaverseWorlds = [
    {
      id: "zen-garden",
      name: "Jardin Zen",
      emoji: "🌸",
      description: "Espace de méditation et relaxation avec ta famille",
      players: 12,
      color: "from-green-500 to-emerald-600",
      features: ["Méditation guidée", "Sons de la nature", "Activités famille"]
    },
    {
      id: "creativity-studio",
      name: "Studio Créatif",
      emoji: "🎨",
      description: "Crée, dessine et exprime-toi librement",
      players: 8,
      color: "from-pink-500 to-purple-600",
      features: ["Dessin 3D", "Musique collaborative", "Galerie d'art"]
    },
    {
      id: "adventure-island",
      name: "Île Aventure",
      emoji: "🏝️",
      description: "Exploration et mini-jeux avec tes proches",
      players: 15,
      color: "from-blue-500 to-cyan-600",
      features: ["Chasse au trésor", "Défis famille", "Construction"]
    },
    {
      id: "safe-talk",
      name: "Cercle de Parole",
      emoji: "💬",
      description: "Espace d'échange sécurisé et bienveillant",
      players: 6,
      color: "from-orange-500 to-red-600",
      features: ["Discussions guidées", "Partage émotions", "Support peer"]
    }
  ];

  const recentActivities = [
    { world: "Jardin Zen", activity: "Séance méditation", time: "Il y a 2h", participants: "Toi, Maman, Papa" },
    { world: "Studio Créatif", activity: "Création collaborative", time: "Hier", participants: "Toi, Emma, Jules" },
    { world: "Île Aventure", activity: "Chasse au trésor", time: "Il y a 3 jours", participants: "Famille complète" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      <TeensHeader />
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mb-6">
            🌌 MÉTAVERSE
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore des mondes virtuels avec ta famille et tes amis ! 🚀
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">47</div>
              <p className="text-gray-300">Amis connectés</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">12h</div>
              <p className="text-gray-300">Temps cette semaine</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">3</div>
              <p className="text-gray-300">Nouveaux badges</p>
            </div>
          </div>
        </div>

        {/* Metaverse Worlds */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {metaverseWorlds.map((world, index) => (
            <Card 
              key={world.id}
              className={`group bg-black/40 backdrop-blur-sm border-2 border-white/20 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                selectedWorld === world.id ? 'ring-4 ring-cyan-400/50 scale-105' : ''
              }`}
              onClick={() => setSelectedWorld(world.id)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${world.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg`}>
                    {world.emoji}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-400 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-semibold">{world.players} en ligne</span>
                    </div>
                    <Badge className="bg-cyan-500/20 text-cyan-300">Disponible</Badge>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{world.name}</h3>
                <p className="text-gray-300 mb-6">{world.description}</p>
                
                <div className="space-y-2 mb-6">
                  {world.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button className={`flex-1 bg-gradient-to-r ${world.color} hover:opacity-90 text-white rounded-2xl font-bold`}>
                    <Globe className="w-4 h-4 mr-2" />
                    Entrer
                  </Button>
                  <Button variant="outline" className="border-gray-400 text-gray-300 hover:bg-white/10 rounded-2xl">
                    <Users className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-white mb-2">Inviter la Famille</h3>
              <p className="text-gray-300 mb-4">Connecte tes parents et proches</p>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 rounded-2xl">
                Inviter
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">Mini-Jeux</h3>
              <p className="text-gray-300 mb-4">Défis et activités ludiques</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-2xl">
                Jouer
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-white mb-2">Événements</h3>
              <p className="text-gray-300 mb-4">Activités programmées</p>
              <Button className="w-full bg-green-500 hover:bg-green-600 rounded-2xl">
                Voir
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-yellow-400" />
              🕐 Activités récentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white">{activity.activity}</h4>
                    <p className="text-gray-300 text-sm">
                      {activity.world} • {activity.participants}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeensMetaverse;
