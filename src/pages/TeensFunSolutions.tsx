
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Zap, Play, Star, ArrowLeft } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";

const TeensFunSolutions = () => {
  const navigate = useNavigate();
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);

  const activities = [
    {
      id: "breathing",
      title: "Respiration Magique",
      description: "Exercice de respiration guidé de 5 minutes",
      icon: "🌸",
      category: "Relaxation",
      duration: "5 min",
      points: 50,
      color: "from-pink-400 to-rose-500"
    },
    {
      id: "journal",
      title: "Journal de Gratitude",
      description: "Note 3 choses positives de ta journée",
      icon: "📝",
      category: "Écriture",
      duration: "10 min",
      points: 75,
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: "music",
      title: "Playlist Bien-être",
      description: "Crée ta playlist détente personnalisée",
      icon: "🎵",
      category: "Musique",
      duration: "15 min",
      points: 100,
      color: "from-purple-400 to-indigo-500"
    },
    {
      id: "art",
      title: "Art-thérapie Express",
      description: "Dessine tes émotions librement",
      icon: "🎨",
      category: "Créatif",
      duration: "20 min",
      points: 125,
      color: "from-orange-400 to-red-500"
    },
    {
      id: "movement",
      title: "Yoga Flow",
      description: "Séance de yoga douce pour débutants",
      icon: "🧘‍♀️",
      category: "Mouvement",
      duration: "15 min",
      points: 100,
      color: "from-green-400 to-emerald-500"
    },
    {
      id: "mindfulness",
      title: "Méditation Guidée",
      description: "Méditation avec guide vocal apaisant",
      icon: "🌙",
      category: "Méditation",
      duration: "12 min",
      points: 90,
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const challenges = [
    {
      title: "Défi 7 Jours Zen",
      description: "Médite 5 minutes par jour pendant 7 jours",
      progress: 3,
      total: 7,
      reward: "Badge Maître Zen + 500 points"
    },
    {
      title: "Gratitude Week",
      description: "Écris dans ton journal chaque jour cette semaine",
      progress: 5,
      total: 7,
      reward: "Accès playlist exclusive + 300 points"
    }
  ];

  const startActivity = (activityId: string) => {
    const activity = activities.find(a => a.id === activityId);
    if (!activity) return;

    setCompletedActivities(prev => [...prev, activityId]);
    
    // Simulation de l'activité
    alert(`🎯 "${activity.title}" commencée !\n\n${activity.description}\n\n⚡ Tu vas gagner ${activity.points} Energy Points !`);
    
    // Retirer de la liste après 2 secondes pour simuler la complétion
    setTimeout(() => {
      setCompletedActivities(prev => prev.filter(id => id !== activityId));
      alert(`✅ "${activity.title}" terminée !\n\n🎉 +${activity.points} Energy Points gagnés !`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50">
      <TeensHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/teens')}
            className="text-purple-600 hover:bg-purple-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au dashboard
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4">
            SOLUTIONS FUN 🎮
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des activités ludiques pour booster ton bien-être mental !
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge className="bg-cyan-100 text-cyan-700">
              <Zap className="h-3 w-3 mr-1" />
              Gagne des Energy Points
            </Badge>
            <Badge className="bg-purple-100 text-purple-700">
              <Star className="h-3 w-3 mr-1" />
              Débloque des récompenses
            </Badge>
          </div>
        </div>

        {/* Défis en cours */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            🏆 Tes Défis en Cours
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-4 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-xl font-black text-yellow-800">
                    {challenge.title}
                  </CardTitle>
                  <CardDescription className="text-yellow-700 font-medium">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-700">Progression</span>
                      <span className="text-sm font-bold text-gray-700">{challenge.progress}/{challenge.total}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all"
                        style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border-2 border-yellow-300">
                    <p className="text-sm font-bold text-yellow-800">🎁 Récompense</p>
                    <p className="text-sm text-yellow-700">{challenge.reward}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activités disponibles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            🌟 Activités Bien-être
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => {
              const isCompleted = completedActivities.includes(activity.id);
              
              return (
                <Card 
                  key={activity.id}
                  className={`border-4 border-gray-200 hover:border-gray-300 transition-all ${
                    isCompleted ? 'opacity-50' : 'hover:scale-105'
                  }`}
                >
                  <CardHeader className={`bg-gradient-to-r ${activity.color} text-white text-center`}>
                    <div className="text-4xl mb-2">{activity.icon}</div>
                    <CardTitle className="text-xl font-black">{activity.title}</CardTitle>
                    <CardDescription className="text-white/90 font-medium">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary" className="font-bold">
                        {activity.category}
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-700 font-bold">
                        {activity.duration}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold text-gray-600">Récompense:</span>
                      <Badge className="bg-yellow-100 text-yellow-700 font-bold">
                        <Zap className="h-3 w-3 mr-1" />
                        {activity.points} pts
                      </Badge>
                    </div>
                    
                    <Button 
                      className={`w-full font-bold ${
                        isCompleted ? 'bg-green-500 hover:bg-green-600' : `bg-gradient-to-r ${activity.color} hover:opacity-90`
                      } text-white`}
                      onClick={() => startActivity(activity.id)}
                      disabled={isCompleted}
                    >
                      {isCompleted ? (
                        <>✓ En cours...</>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Commencer
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensFunSolutions;
