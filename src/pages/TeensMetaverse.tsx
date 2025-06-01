
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Gamepad2, Crown, Star, Zap, Trophy } from "lucide-react";

const TeensMetaverse = () => {
  const navigate = useNavigate();

  const metaverseSpaces = [
    {
      name: "Chill Lounge 🏖️",
      description: "Espace détente pour discuter et se relaxer",
      users: 24,
      activity: "Méditation guidée",
      color: "from-blue-500 to-cyan-500",
      mood: "zen"
    },
    {
      name: "Creative Studio 🎨",
      description: "Atelier créatif collaboratif",
      users: 18,
      activity: "Jam session musicale",
      color: "from-pink-500 to-purple-500",
      mood: "créatif"
    },
    {
      name: "Study Hall 📚",
      description: "Espace d'étude collaborative",
      users: 32,
      activity: "Groupe de révision maths",
      color: "from-green-500 to-emerald-500",
      mood: "studieux"
    },
    {
      name: "Gaming Arena 🎮",
      description: "Compétitions et jeux en équipe",
      users: 45,
      activity: "Tournoi en cours",
      color: "from-orange-500 to-red-500",
      mood: "compétitif"
    },
    {
      name: "Wellness Center 🧘",
      description: "Bien-être et développement personnel",
      users: 28,
      activity: "Atelier confiance en soi",
      color: "from-purple-500 to-indigo-500",
      mood: "épanouissant"
    },
    {
      name: "Adventure Zone 🏔️",
      description: "Explorations virtuelles et défis",
      users: 36,
      activity: "Exploration de l'Antarctique",
      color: "from-cyan-500 to-blue-500",
      mood: "aventureux"
    }
  ];

  const userStats = [
    { label: "Niveau", value: "23", icon: "⚡", color: "text-yellow-400" },
    { label: "XP", value: "12,847", icon: "⭐", color: "text-blue-400" },
    { label: "Amis", value: "156", icon: "👥", color: "text-green-400" },
    { label: "Badges", value: "42", icon: "🏆", color: "text-purple-400" }
  ];

  const achievements = [
    { name: "Explorateur", icon: "🗺️", progress: 85 },
    { name: "Social Butterfly", icon: "🦋", progress: 92 },
    { name: "Créateur", icon: "🎨", progress: 67 },
    { name: "Mentor", icon: "🌟", progress: 78 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-400 rounded-full animate-pulse"></div>
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
              <Gamepad2 className="w-6 h-6 text-cyan-400" />
              <h1 className="text-2xl font-black text-white">MÉTAVERSE</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mb-6">
            🌌 ENTER THE METAVERSE
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Connecte-toi, explore, apprends et grandis dans un monde virtuel bienveillant ! 🚀
          </p>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-cyan-500/20 text-cyan-300 px-6 py-2 text-lg">#Explorer</Badge>
            <Badge className="bg-purple-500/20 text-purple-300 px-6 py-2 text-lg">#Créer</Badge>
            <Badge className="bg-pink-500/20 text-pink-300 px-6 py-2 text-lg">#Connecter</Badge>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {userStats.map((stat, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className={`text-2xl font-black ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-sm text-gray-300 font-semibold">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Avatar */}
        <Card className="mb-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-400/30">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              👤 Ton Avatar - Alex le Créatif
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-content text-6xl mx-auto shadow-2xl shadow-purple-500/30">
                🦄
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xl animate-bounce">
                👑
              </div>
            </div>
            <Button className="bg-purple-500 hover:bg-purple-600 rounded-2xl px-8">
              Personnaliser Avatar
            </Button>
          </CardContent>
        </Card>

        {/* Metaverse Spaces */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🌍 Espaces Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metaverseSpaces.map((space, index) => (
              <Card 
                key={index} 
                className={`group bg-gradient-to-br ${space.color}/10 border-2 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center justify-between">
                    {space.name}
                    <Badge className="bg-green-500/20 text-green-300">
                      <Users className="w-3 h-3 mr-1" />
                      {space.users}
                    </Badge>
                  </CardTitle>
                  <p className="text-gray-300">{space.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-300">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      <span>Activité : {space.activity}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Crown className="w-4 h-4 mr-2 text-purple-400" />
                      <span>Ambiance : {space.mood}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl">
                    Rejoindre l'espace
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
              🏆 Tes Progrès
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold flex items-center">
                      <span className="text-2xl mr-2">{achievement.icon}</span>
                      {achievement.name}
                    </span>
                    <span className="text-gray-300">{achievement.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="group bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">👥 Mes Amis</h3>
              <p className="text-gray-300 mb-4">Voir qui est en ligne et organiser des activités</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-2xl">
                Voir mes amis
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-8 text-center">
              <Star className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">⭐ Événements</h3>
              <p className="text-gray-300 mb-4">Ateliers, concours et événements spéciaux</p>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 rounded-2xl">
                Voir les événements
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-8 text-center">
              <Gamepad2 className="w-16 h-16 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">🎮 Mini-Jeux</h3>
              <p className="text-gray-300 mb-4">Jeux éducatifs et challenges amusants</p>
              <Button className="w-full bg-green-500 hover:bg-green-600 rounded-2xl">
                Jouer maintenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeensMetaverse;
