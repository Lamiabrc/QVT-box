
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";

const TeensQuickAlert = () => {
  const navigate = useNavigate();
  const [selectedAlert, setSelectedAlert] = useState<string>("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");

  const alertTypes = [
    { 
      type: "party", 
      emoji: "🎉", 
      label: "Je suis en soirée", 
      color: "from-purple-500 to-pink-500",
      description: "Partage ta soirée avec tes parents"
    },
    { 
      type: "with_friends", 
      emoji: "👥", 
      label: "Avec des amis", 
      color: "from-blue-500 to-cyan-500",
      description: "Tu passes du temps avec tes potes"
    },
    { 
      type: "happy", 
      emoji: "😄", 
      label: "Super moment", 
      color: "from-green-500 to-emerald-500",
      description: "Partage ta joie en temps réel"
    },
    { 
      type: "need_help", 
      emoji: "🆘", 
      label: "J'ai besoin d'aide", 
      color: "from-orange-500 to-red-500",
      description: "Signal important pour les parents"
    },
    { 
      type: "lost", 
      emoji: "🗺️", 
      label: "Je suis perdu", 
      color: "from-yellow-500 to-orange-500",
      description: "Demande d'aide pour localisation"
    },
    { 
      type: "danger", 
      emoji: "🚨", 
      label: "URGENCE", 
      color: "from-red-500 to-red-700",
      description: "Alerte prioritaire immédiate"
    }
  ];

  const handleSendAlert = () => {
    if (!selectedAlert) return;
    
    console.log("Sending alert:", {
      type: selectedAlert,
      message,
      location,
      timestamp: new Date()
    });
    
    // TODO: Save to Supabase and send notification
    navigate('/teens');
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        },
        (error) => {
          console.error("Erreur de géolocalisation:", error);
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-400 rounded-full animate-ping"></div>
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
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                🚨
              </div>
              <h1 className="text-2xl font-black text-white">ALERTE RAPIDE</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 mb-6">
            🚨 SIGNAL EXPRESS
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Envoie un message rapide à tes parents en un clic ! ⚡
          </p>
        </div>

        {/* Alert Types */}
        <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              🎯 Choisis ton type de signal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {alertTypes.map((alert) => (
                <button
                  key={alert.type}
                  onClick={() => setSelectedAlert(alert.type)}
                  className={`p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedAlert === alert.type
                      ? `bg-gradient-to-r ${alert.color} border-white shadow-2xl scale-105`
                      : 'bg-white/10 border-white/30 hover:border-white/50'
                  }`}
                >
                  <div className="text-4xl mb-3">{alert.emoji}</div>
                  <h3 className={`font-bold text-lg mb-2 ${
                    selectedAlert === alert.type ? 'text-white' : 'text-gray-300'
                  }`}>
                    {alert.label}
                  </h3>
                  <p className={`text-sm ${
                    selectedAlert === alert.type ? 'text-white/80' : 'text-gray-400'
                  }`}>
                    {alert.description}
                  </p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedAlert && (
          <>
            {/* Message Details */}
            <Card className="mb-8 bg-black/40 backdrop-blur-sm border-2 border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  💬 Ajoute des détails (optionnel)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Message personnalisé</label>
                  <Textarea
                    placeholder="Ajoute des détails si tu veux... 😊"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Localisation
                  </label>
                  <div className="flex space-x-3">
                    <Input
                      placeholder="Où es-tu ? (optionnel)"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl"
                    />
                    <Button
                      onClick={getCurrentLocation}
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 rounded-2xl"
                    >
                      📍 GPS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card className="mb-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-2 border-blue-400/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  👀 Aperçu de ton message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/10 rounded-2xl p-6 border-2 border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">
                      {alertTypes.find(a => a.type === selectedAlert)?.emoji}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {alertTypes.find(a => a.type === selectedAlert)?.label}
                      </h3>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date().toLocaleTimeString('fr-FR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {message && (
                    <p className="text-white mb-3">💬 {message}</p>
                  )}
                  
                  {location && (
                    <p className="text-blue-300 text-sm">
                      📍 {location}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Send Button */}
            <div className="text-center">
              <Button 
                onClick={handleSendAlert}
                className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white rounded-3xl text-xl font-bold shadow-2xl shadow-red-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <Send className="w-6 h-6 mr-3" />
                Envoyer l'alerte ! 🚀
              </Button>
              
              <p className="text-gray-300 mt-4">
                ⚡ Tes parents recevront une notification instantanée
              </p>
            </div>
          </>
        )}

        {/* Emergency Contact */}
        <Card className="mt-12 bg-red-500/10 border-2 border-red-400/30">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-4">🆘</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Urgence réelle ?
            </h3>
            <p className="text-gray-300 mb-4">
              En cas d'urgence médicale ou de danger immédiat
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-2xl">
              <Phone className="w-4 h-4 mr-2" />
              Appeler le 15 / 112
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeensQuickAlert;
