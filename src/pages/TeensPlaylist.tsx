
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Music, Heart, Play, Plus, Share } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";
import { useState } from "react";

const TeensPlaylist = () => {
  const navigate = useNavigate();
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);

  const playlists = [
    {
      name: "Détente & Chill",
      songs: 12,
      emoji: "🌙",
      color: "from-blue-500 to-purple-600",
      mood: "Relaxant"
    },
    {
      name: "Motivation Power",
      songs: 8,
      emoji: "⚡",
      color: "from-orange-500 to-red-600",
      mood: "Énergisant"
    },
    {
      name: "Émotions & Feelings",
      songs: 15,
      emoji: "💙",
      color: "from-pink-500 to-purple-600",
      mood: "Émotionnel"
    },
    {
      name: "Study Vibes",
      songs: 20,
      emoji: "📚",
      color: "from-green-500 to-teal-600",
      mood: "Concentration"
    }
  ];

  const currentSongs = [
    { title: "Breathe Me", artist: "Sia", mood: "Calme", duration: "4:23" },
    { title: "Weightless", artist: "Marconi Union", mood: "Relaxation", duration: "8:08" },
    { title: "River", artist: "Leon Bridges", mood: "Apaisement", duration: "3:15" },
    { title: "Mad World", artist: "Tears for Fears", mood: "Réflexif", duration: "3:39" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900">
      <TeensHeader />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mb-6">
            🎵 MA PLAYLIST
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Musique thérapeutique pour ton bien-être mental 🎧
          </p>
        </div>

        {/* Current Playing */}
        <Card className="mb-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30">
          <CardContent className="p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 animate-pulse">
              🎵
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">En cours de lecture</h3>
            <p className="text-xl text-purple-200 mb-1">Breathe Me - Sia</p>
            <p className="text-gray-300 mb-6">Playlist: Détente & Chill 🌙</p>
            
            <div className="flex justify-center space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700 rounded-full w-16 h-16">
                <Play className="w-8 h-8" />
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-400/10 rounded-full w-16 h-16">
                <Heart className="w-8 h-8" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Playlists */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {playlists.map((playlist, index) => (
            <Card 
              key={index} 
              className="group bg-black/40 backdrop-blur-sm border-2 border-white/20 hover:border-purple-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${playlist.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {playlist.emoji}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{playlist.name}</h3>
                <p className="text-gray-300 text-sm mb-1">{playlist.songs} morceaux</p>
                <Badge className={`bg-gradient-to-r ${playlist.color} text-white mb-4`}>
                  {playlist.mood}
                </Badge>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-2xl">
                  <Play className="w-4 h-4 mr-2" />
                  Écouter
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Song List */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Music className="w-6 h-6 mr-3 text-pink-400" />
              🎧 Morceaux recommandés pour toi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentSongs.map((song, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/10 rounded-2xl hover:bg-white/15 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-4">
                    <Button 
                      size="sm" 
                      className="bg-pink-500 hover:bg-pink-600 rounded-full w-10 h-10 p-0 group-hover:scale-110 transition-transform"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                    <div>
                      <h4 className="font-semibold text-white">{song.title}</h4>
                      <p className="text-gray-300 text-sm">{song.artist}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-blue-500/20 text-blue-300 mb-1">
                      {song.mood}
                    </Badge>
                    <p className="text-gray-400 text-sm">{song.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Create Playlist */}
        <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-400/30">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎶</div>
            <h3 className="text-2xl font-bold text-white mb-4">Crée ta propre playlist !</h3>
            <p className="text-gray-300 mb-6">
              Mélange tes morceaux préférés avec notre sélection bien-être
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-green-500 hover:bg-green-600 rounded-2xl">
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle Playlist
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-2xl">
                <Share className="w-4 h-4 mr-2" />
                Partager
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeensPlaylist;
