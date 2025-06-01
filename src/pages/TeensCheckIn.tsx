
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Brain, Moon, Users, GraduationCap, Home, Send } from "lucide-react";
import { useState } from "react";

const TeensCheckIn = () => {
  const navigate = useNavigate();
  const [mood, setMood] = useState<string>("");
  const [stressLevel, setStressLevel] = useState([3]);
  const [sleepQuality, setSleepQuality] = useState([3]);
  const [socialInteraction, setSocialInteraction] = useState([3]);
  const [academicPressure, setAcademicPressure] = useState([3]);
  const [familyRelationship, setFamilyRelationship] = useState([3]);
  const [personalNotes, setPersonalNotes] = useState("");

  const moods = [
    { emoji: "😄", label: "Super bien", value: "very_happy", color: "from-green-400 to-emerald-500" },
    { emoji: "😊", label: "Bien", value: "happy", color: "from-blue-400 to-cyan-500" },
    { emoji: "😐", label: "Neutre", value: "neutral", color: "from-gray-400 to-gray-500" },
    { emoji: "😔", label: "Pas top", value: "sad", color: "from-orange-400 to-red-500" },
    { emoji: "😰", label: "Difficile", value: "anxious", color: "from-red-400 to-red-600" }
  ];

  const handleSubmit = () => {
    console.log("Check-in data:", {
      mood,
      stressLevel: stressLevel[0],
      sleepQuality: sleepQuality[0],
      socialInteraction: socialInteraction[0],
      academicPressure: academicPressure[0],
      familyRelationship: familyRelationship[0],
      personalNotes
    });
    // TODO: Save to Supabase
    navigate('/teens');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background elements */}
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
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
              <h1 className="text-2xl font-black text-white">CHECK-IN QUOTIDIEN</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-6">
            Comment ça va aujourd'hui ? 💝
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Prends 2 minutes pour faire le point sur ta journée ! 🌟
          </p>
          <Badge className="bg-pink-500/20 text-pink-300 px-6 py-2 text-lg">
            🔥 Streak de 12 jours !
          </Badge>
        </div>

        {/* Mood Selection */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              🎭 Comment te sens-tu aujourd'hui ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {moods.map((moodOption) => (
                <button
                  key={moodOption.value}
                  onClick={() => setMood(moodOption.value)}
                  className={`p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    mood === moodOption.value
                      ? `bg-gradient-to-r ${moodOption.color} border-white shadow-2xl scale-105`
                      : 'bg-white/10 border-white/30 hover:border-white/50'
                  }`}
                >
                  <div className="text-5xl mb-3">{moodOption.emoji}</div>
                  <p className={`font-bold ${mood === moodOption.value ? 'text-white' : 'text-gray-300'}`}>
                    {moodOption.label}
                  </p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sliders */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Brain className="w-6 h-6 mr-3 text-purple-400" />
                Niveau de stress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Slider
                  value={stressLevel}
                  onValueChange={setStressLevel}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-300">
                  <span>😌 Zen</span>
                  <span className="font-bold text-lg text-white">{stressLevel[0]}/5</span>
                  <span>😱 Stressé</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Moon className="w-6 h-6 mr-3 text-blue-400" />
                Qualité du sommeil
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Slider
                  value={sleepQuality}
                  onValueChange={setSleepQuality}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-300">
                  <span>😴 Nul</span>
                  <span className="font-bold text-lg text-white">{sleepQuality[0]}/5</span>
                  <span>✨ Parfait</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <Users className="w-6 h-6 mr-3 text-green-400" />
                Relations sociales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Slider
                  value={socialInteraction}
                  onValueChange={setSocialInteraction}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-300">
                  <span>😞 Isolé</span>
                  <span className="font-bold text-lg text-white">{socialInteraction[0]}/5</span>
                  <span>🥳 Connecté</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-yellow-400" />
                Pression scolaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Slider
                  value={academicPressure}
                  onValueChange={setAcademicPressure}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-300">
                  <span>😎 Cool</span>
                  <span className="font-bold text-lg text-white">{academicPressure[0]}/5</span>
                  <span>😵 Intense</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Family Relationship */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white flex items-center">
              <Home className="w-6 h-6 mr-3 text-pink-400" />
              Relations familiales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Slider
                value={familyRelationship}
                onValueChange={setFamilyRelationship}
                max={5}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-300">
                <span>😤 Tendu</span>
                <span className="font-bold text-lg text-white">{familyRelationship[0]}/5</span>
                <span>🥰 Harmony</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Notes */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">
              📝 Tes pensées du jour (optionnel)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Raconte-nous ta journée, tes émotions, tes découvertes... Tout ce que tu as envie de partager ! 💭"
              value={personalNotes}
              onChange={(e) => setPersonalNotes(e.target.value)}
              className="min-h-32 bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl"
            />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center">
          <Button 
            onClick={handleSubmit}
            disabled={!mood}
            className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-3xl text-xl font-bold shadow-2xl shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
          >
            <Send className="w-6 h-6 mr-3" />
            Valider mon check-in ! 🚀
          </Button>
          
          {!mood && (
            <p className="text-yellow-400 mt-4 font-semibold">
              ⚡ Choisis ton humeur pour continuer !
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeensCheckIn;
