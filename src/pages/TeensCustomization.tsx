
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Palette, Shirt, Sparkles, Crown } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";
import { useState } from "react";

const TeensCustomization = () => {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState("🦄");
  const [selectedTheme, setSelectedTheme] = useState("purple");

  const avatars = ["🦄", "🐱", "🦊", "🐸", "🦖", "🚀", "⭐", "🌈"];
  const themes = [
    { name: "Purple Magic", color: "purple", bg: "from-purple-500 to-pink-500" },
    { name: "Ocean Blue", color: "blue", bg: "from-blue-500 to-cyan-500" },
    { name: "Sunset Orange", color: "orange", bg: "from-orange-500 to-red-500" },
    { name: "Forest Green", color: "green", bg: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900">
      <TeensHeader />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-6">
            🎨 CUSTOMISATION
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Personnalise ton univers comme tu le veux ! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Avatar Selection */}
          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Crown className="w-6 h-6 mr-3 text-yellow-400" />
                🦄 Mon Avatar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {avatars.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAvatar(avatar)}
                    className={`p-6 rounded-3xl text-4xl transition-all duration-300 ${
                      selectedAvatar === avatar
                        ? 'bg-pink-500 scale-110'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center text-6xl mx-auto mb-4 shadow-2xl">
                  {selectedAvatar}
                </div>
                <p className="text-white">Ton avatar actuel</p>
              </div>
            </CardContent>
          </Card>

          {/* Theme Selection */}
          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Palette className="w-6 h-6 mr-3 text-pink-400" />
                🌈 Mon Thème
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {themes.map((theme, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTheme(theme.color)}
                    className={`w-full p-4 rounded-2xl transition-all duration-300 ${
                      selectedTheme === theme.color
                        ? 'scale-105 ring-4 ring-white/50'
                        : 'hover:scale-102'
                    }`}
                  >
                    <div className={`bg-gradient-to-r ${theme.bg} p-6 rounded-2xl text-white`}>
                      <h3 className="font-bold text-lg">{theme.name}</h3>
                      <p className="opacity-80">Ambiance {theme.name.toLowerCase()}</p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl">
            <Sparkles className="w-6 h-6 mr-3" />
            Sauvegarder mes préférences ! ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeensCustomization;
