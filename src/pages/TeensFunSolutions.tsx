
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Gamepad2, Brain, Heart, Star, Zap, Target, Trophy, Clock, Users } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";

const TeensFunSolutions = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const funActivities = [
    {
      icon: "🧠",
      title: "Brain Training",
      subtitle: "Entraîne ton cerveau",
      description: "Mini-jeux pour améliorer concentration et mémoire",
      difficulty: "Facile",
      duration: "5-10 min",
      points: 10,
      color: "from-purple-500 to-indigo-500",
      category: "mental"
    },
    {
      icon: "🧘‍♀️",
      title: "Zen Moment",
      subtitle: "Relaxation guidée",
      description: "Exercices de respiration et méditation pour ados",
      difficulty: "Débutant",
      duration: "3-15 min",
      points: 15,
      color: "from-green-500 to-emerald-500",
      category: "wellbeing"
    },
    {
      icon: "🎨",
      title: "Art Thérapie",
      subtitle: "Expression créative",
      description: "Dessine, colorie et exprime tes émotions",
      difficulty: "Libre",
      duration: "10-30 min",
      points: 20,
      color: "from-pink-500 to-rose-500",
      category: "creative"
    },
    {
      icon: "🎯",
      title: "Défi Quotidien",
      subtitle: "Challenge personnel",
      description: "Petits défis pour sortir de ta zone de confort",
      difficulty: "Variable",
      duration: "Toute la journée",
      points: 25,
      color: "from-orange-500 to-red-500",
      category: "challenge"
    },
    {
      icon: "💭",
      title: "Thought Bubble",
      subtitle: "Gestion des pensées",
      description: "Exercices pour gérer stress et pensées négatives",
      difficulty: "Moyen",
      duration: "5-20 min",
      points: 15,
      color: "from-blue-500 to-cyan-500",
      category: "mental"
    },
    {
      icon: "🎪",
      title: "Mood Booster",
      subtitle: "Remonte-moral",
      description: "Activités pour retrouver le sourire instantanément",
      difficulty: "Facile",
      duration: "2-10 min",
      points: 10,
      color: "from-yellow-500 to-orange-500",
      category: "mood"
    }
  ];

  const weeklyChallenge = {
    title: "Challenge de la semaine",
    description: "Dis 3 compliments sincères à des personnes différentes",
    progress: 1,
    total: 3,
    reward: 50,
    icon: "🌟"
  };

  const achievements = [
    { name: "Premier pas", description: "Première activité complétée", unlocked: true },
    { name: "Zen Master", description: "10 sessions de méditation", unlocked: true },
    { name: "Artiste en herbe", description: "5 créations artistiques", unlocked: false },
    { name: "Challenge Hunter", description: "Tous les défis d'une semaine", unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
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
              <Gamepad2 className="w-6 h-6 text-pink-400" />
              <h1 className="text-2xl font-black text-white">SOLUTIONS FUN</h1>
            </div>
            <Badge className="bg-yellow-500/20 text-yellow-300 px-4 py-2">
              <Star className="w-4 h-4 mr-1" />
              245 pts
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-6">
            🎮 Fun & Bien-être
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Améliore ton bien-être en t'amusant ! Jeux, défis et activités pensés pour toi
          </p>
        </div>

        {/* Weekly Challenge */}
        <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-400/30 mb-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span className="flex items-center gap-3">
                <span className="text-3xl">{weeklyChallenge.icon}</span>
                {weeklyChallenge.title}
              </span>
              <Badge className="bg-yellow-500/20 text-yellow-300">
                {weeklyChallenge.reward} pts
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200 mb-4">{weeklyChallenge.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all"
                  style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.total) * 100}%` }}
                ></div>
              </div>
              <span className="text-white font-semibold">
                {weeklyChallenge.progress}/{weeklyChallenge.total}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {funActivities.map((activity, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-to-br ${activity.color}/10 border-2 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
              onClick={() => setSelectedGame(activity.title)}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{activity.icon}</div>
                <CardTitle className="text-xl font-bold text-white">
                  {activity.title}
                </CardTitle>
                <p className="text-sm text-gray-300">{activity.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{activity.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.duration}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Target className="w-3 h-3 mr-1" />
                    {activity.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    {activity.points} pts
                  </Badge>
                </div>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0 rounded-2xl">
                  Commencer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <Card className="bg-black/30 border-2 border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-400" />
              Mes Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl border-2 ${
                    achievement.unlocked 
                      ? 'bg-yellow-500/10 border-yellow-400/30' 
                      : 'bg-gray-800/50 border-gray-600/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`font-semibold ${
                        achievement.unlocked ? 'text-yellow-300' : 'text-gray-400'
                      }`}>
                        {achievement.name}
                      </h4>
                      <p className={`text-sm ${
                        achievement.unlocked ? 'text-yellow-200' : 'text-gray-500'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                    <div className={`text-2xl ${
                      achievement.unlocked ? '' : 'grayscale opacity-50'
                    }`}>
                      🏆
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-400/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-400" />
                Activités en Famille
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Découvre des activités à faire avec tes parents pour renforcer vos liens !
              </p>
              <Button 
                className="w-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-200 border-blue-400"
                onClick={() => navigate('/teens/family-space')}
              >
                Explorer activités famille
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <Brain className="w-6 h-6 text-green-400" />
                Suivi Progrès
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Vois ton évolution et tes améliorations au fil du temps
              </p>
              <Button 
                className="w-full bg-green-500/20 hover:bg-green-500/40 text-green-200 border-green-400"
                onClick={() => navigate('/teens/personal-space')}
              >
                Voir mes statistiques
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeensFunSolutions;
