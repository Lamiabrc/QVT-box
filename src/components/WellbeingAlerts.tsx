
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Sparkles, Bell, Star } from "lucide-react";
import { useState, useEffect } from "react";

const WellbeingAlerts = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [dailyMotivation, setDailyMotivation] = useState("");

  const wellbeingTips = [
    {
      title: "💧 Hydratation",
      message: "N'oublie pas de boire de l'eau ! Ton cerveau en a besoin pour bien fonctionner ✨",
      type: "health",
      priority: "low"
    },
    {
      title: "🌱 Respiration",
      message: "Prends 3 grandes respirations profondes. Ça aide à réduire le stress instantanément !",
      type: "wellness",
      priority: "medium"
    },
    {
      title: "💪 Tu es fort(e) !",
      message: "Chaque défi que tu traverses te rend plus résilient(e). Tu as déjà surmonté 100% de tes mauvais jours !",
      type: "motivation",
      priority: "high"
    },
    {
      title: "🌙 Sommeil",
      message: "Il est bientôt l'heure de dormir. Un bon sommeil = un mental au top demain ! 😴",
      type: "sleep",
      priority: "medium"
    },
    {
      title: "🎯 Petit objectif",
      message: "Fixe-toi un petit objectif pour aujourd'hui. Même tout petit compte ! 🏆",
      type: "goal",
      priority: "low"
    }
  ];

  const dailyMotivations = [
    "Tu es unique et c'est ta force ! 💎",
    "Chaque nouvelle journée est une chance de grandir 🌱",
    "Tes émotions sont valides, écoute-les 💙",
    "Tu mérites d'être heureux/heureuse 🌈",
    "Crois en toi, tu es capable de grandes choses ! ⭐"
  ];

  useEffect(() => {
    // Change tip every 10 seconds
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % wellbeingTips.length);
    }, 10000);

    // Set daily motivation
    const today = new Date().getDate();
    setDailyMotivation(dailyMotivations[today % dailyMotivations.length]);

    return () => clearInterval(tipInterval);
  }, []);

  const currentTipData = wellbeingTips[currentTip];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "from-red-500 to-pink-500";
      case "medium": return "from-orange-500 to-yellow-500";
      case "low": return "from-blue-500 to-cyan-500";
      default: return "from-purple-500 to-indigo-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Daily Motivation */}
      <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-400/30">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <Star className="w-8 h-8 text-yellow-400 mr-2 animate-pulse" />
            <h3 className="text-xl font-bold text-white">Motivation du jour</h3>
          </div>
          <p className="text-lg text-white font-semibold">{dailyMotivation}</p>
        </CardContent>
      </Card>

      {/* Rotating Wellbeing Tips */}
      <Card className={`bg-gradient-to-r ${getPriorityColor(currentTipData.priority)}/10 border-2 border-white/20 transition-all duration-500`}>
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Bell className="w-5 h-5 mr-2 text-yellow-400" />
            {currentTipData.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white mb-4">{currentTipData.message}</p>
          <div className="flex justify-between items-center">
            <Badge className={`bg-gradient-to-r ${getPriorityColor(currentTipData.priority)} text-white`}>
              Conseil bien-être
            </Badge>
            <div className="flex space-x-1">
              {wellbeingTips.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTip ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Wellness Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 rounded-2xl p-4 h-auto">
          <div className="text-center">
            <Heart className="w-6 h-6 mx-auto mb-2" />
            <span className="block text-sm">Check-in rapide</span>
          </div>
        </Button>
        
        <Button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 rounded-2xl p-4 h-auto">
          <div className="text-center">
            <Brain className="w-6 h-6 mx-auto mb-2" />
            <span className="block text-sm">Exercice mental</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default WellbeingAlerts;
