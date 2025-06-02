
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, User, Palette, Settings, Star, Trophy, Music, BookOpen } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";
import WellbeingAlerts from "@/components/WellbeingAlerts";

const TeensPersonalSpace = () => {
  const navigate = useNavigate();

  const personalStats = [
    { label: "Jours de streak", value: "12", icon: "🔥", color: "from-red-500 to-orange-500" },
    { label: "Points bien-être", value: "847", icon: "⭐", color: "from-yellow-500 to-orange-500" },
    { label: "Humeur moyenne", value: "8.2/10", icon: "😊", color: "from-green-500 to-emerald-500" },
    { label: "Niveau", value: "Ninja 🥷", icon: "🎯", color: "from-purple-500 to-indigo-500" }
  ];

  const achievements = [
    { name: "Première semaine complète", icon: "🏆", completed: true },
    { name: "Communicateur pro", icon: "💬", completed: true },
    { name: "Zen master", icon: "🧘", completed: false },
    { name: "Famille connectée", icon: "👨‍👩‍👧‍👦", completed: true },
    { name: "Créatif du mois", icon: "🎨", completed: false },
    { name: "Aventurier", icon: "🗺️", completed: false }
  ];

  const personalityTraits = [
    { trait: "Créatif", level: 85, color: "bg-pink-500" },
    { trait: "Sociable", level: 70, color: "bg-blue-500" },
    { trait: "Aventurier", level: 60, color: "bg-green-500" },
    { trait: "Empathique", level: 90, color: "bg-purple-500" },
    { trait: "Curieux", level: 80, color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      <TeensHeader />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center text-6xl mx-auto shadow-2xl shadow-pink-500/30">
              🦄
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
              ⭐
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-4">
            Salut Alex ! 👋
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Voici ton espace personnel pour suivre ton évolution ! 🚀
          </p>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-pink-500/20 text-pink-300 px-6 py-2 text-lg">#CreativeGenius</Badge>
            <Badge className="bg-purple-500/20 text-purple-300 px-6 py-2 text-lg">#FamilyFirst</Badge>
            <Badge className="bg-cyan-500/20 text-cyan-300 px-6 py-2 text-lg">#WellBeingChampion</Badge>
          </div>
        </div>

        {/* Wellbeing Alerts */}
        <div className="mb-12">
          <WellbeingAlerts />
        </div>

        {/* Personal Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {personalStats.map((stat, index) => (
            <Card key={index} className={`group bg-gradient-to-br ${stat.color}/10 border-2 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2`}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-sm text-gray-300 font-semibold">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements & Personality */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Achievements */}
          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
                Mes Achievements 🏆
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-2xl border-2 ${
                      achievement.completed 
                        ? 'bg-green-500/10 border-green-400/30' 
                        : 'bg-gray-500/10 border-gray-400/30'
                    } text-center transition-all duration-300 hover:scale-105`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <p className={`text-sm font-semibold ${
                      achievement.completed ? 'text-green-300' : 'text-gray-400'
                    }`}>
                      {achievement.name}
                    </p>
                    {achievement.completed && (
                      <Badge className="bg-green-500/20 text-green-300 mt-2">Débloqué!</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Personality Traits */}
          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Palette className="w-6 h-6 mr-3 text-pink-400" />
                Ma Personnalité 🎨
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {personalityTraits.map((trait, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{trait.trait}</span>
                      <span className="text-gray-300">{trait.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3">
                      <div 
                        className={`${trait.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${trait.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="group bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 cursor-pointer"
                onClick={() => navigate('/teens/customization')}>
            <CardContent className="p-8 text-center">
              <Palette className="w-16 h-16 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">🎨 Personnaliser</h3>
              <p className="text-gray-300 mb-4">Customise ton avatar, tes couleurs et ton style !</p>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 rounded-2xl">
                Customiser
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300 cursor-pointer"
                onClick={() => navigate('/teens/journal')}>
            <CardContent className="p-8 text-center">
              <BookOpen className="w-16 h-16 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">📖 Mon Journal</h3>
              <p className="text-gray-300 mb-4">Écris tes pensées, tes rêves et tes découvertes !</p>
              <Button className="w-full bg-green-500 hover:bg-green-600 rounded-2xl">
                Écrire
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer"
                onClick={() => navigate('/teens/playlist')}>
            <CardContent className="p-8 text-center">
              <Music className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">🎵 Ma Playlist</h3>
              <p className="text-gray-300 mb-4">Crée ta playlist bien-être et partage tes vibes !</p>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 rounded-2xl">
                Écouter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeensPersonalSpace;
