import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Heart, Smile, Star } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";
import { useState } from "react";
const TeensJournal = () => {
  const navigate = useNavigate();
  const [mood, setMood] = useState("");
  const [entry, setEntry] = useState("");
  const [gratitude, setGratitude] = useState("");
  const moods = [{
    emoji: "😄",
    label: "Super bien",
    value: "super"
  }, {
    emoji: "😊",
    label: "Bien",
    value: "good"
  }, {
    emoji: "😐",
    label: "Neutre",
    value: "neutral"
  }, {
    emoji: "😔",
    label: "Pas terrible",
    value: "sad"
  }, {
    emoji: "😢",
    label: "Difficile",
    value: "hard"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900">
      <TeensHeader />
      
      <div className="container mx-auto px-4 py-8 relative z-10 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-6">
            📖 MON JOURNAL
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Un espace safe pour exprimer tes pensées et émotions 💭
          </p>
        </div>

        {/* Mood Selector */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              😊 Comment tu te sens aujourd'hui ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              {moods.map(moodOption => <button key={moodOption.value} onClick={() => setMood(moodOption.value)} className={`p-4 rounded-3xl text-center transition-all duration-300 ${mood === moodOption.value ? 'bg-pink-500 scale-110 shadow-lg' : 'bg-white/10 hover:bg-white/20'}`}>
                  <div className="text-4xl mb-2">{moodOption.emoji}</div>
                  <p className="text-white text-sm font-semibold">{moodOption.label}</p>
                </button>)}
            </div>
          </CardContent>
        </Card>

        {/* Journal Entry */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
              ✍️ Raconte ta journée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="Qu'est-ce qui s'est passé aujourd'hui ? Comment tu t'es senti ? Qu'est-ce qui t'a marqué ? Écris tout ce qui te passe par la tête... 😊" value={entry} onChange={e => setEntry(e.target.value)} className="min-h-[200px] bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl text-lg" />
          </CardContent>
        </Card>

        {/* Gratitude Section */}
        <Card className="mb-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-400/30">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-slate-700">
              <Star className="w-6 h-6 mr-3 text-yellow-400" />
              🙏 Gratitude du jour
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Pour quoi es-tu reconnaissant aujourd'hui ? 💛" value={gratitude} onChange={e => setGratitude(e.target.value)} className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl text-lg p-4" />
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl">
            <Heart className="w-6 h-6 mr-3" />
            Sauvegarder mon entrée ! 💾
          </Button>
          
          <p className="text-gray-300 mt-4">
            ✨ Tes écrits restent 100% privés et sécurisés
          </p>
        </div>

        {/* Recent Entries */}
        <Card className="mt-12 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">
              📚 Mes dernières entrées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Hier - 😊 Bien</span>
                  <span className="text-gray-400 text-sm">19h30</span>
                </div>
                <p className="text-gray-300">Bonne journée au lycée, j'ai réussi mon contrôle de maths ! 🎉</p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Il y a 2 jours - 😄 Super bien</span>
                  <span className="text-gray-400 text-sm">20h15</span>
                </div>
                <p className="text-gray-300">Sortie géniale avec mes amis ! On a regardé un film trop bien 🍿</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default TeensJournal;