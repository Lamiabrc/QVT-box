
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Heart, Eye, Lock, Users, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

const TeensParentalAccess = () => {
  const navigate = useNavigate();
  const [familyCode, setFamilyCode] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const parentFeatures = [
    {
      icon: Heart,
      title: "Suivi Bien-être Respectueux",
      description: "Visualisez l'évolution du bien-être de votre ado sans intrusion",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Communication Bienveillante",
      description: "Recevez des alertes et restez connecté avec respect",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Transparence Totale",
      description: "Votre ado sait exactement ce que vous voyez",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Vie Privée Protégée",
      description: "Les détails personnels restent confidentiels",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const accessLevels = [
    {
      level: "🟢 Données partagées",
      items: [
        "Humeur générale (sans détails)",
        "Niveau de bien-être global",
        "Fréquence des check-ins",
        "Alertes de sécurité uniquement"
      ]
    },
    {
      level: "🔒 Données privées",
      items: [
        "Contenu des messages personnels",
        "Détails des questionnaires",
        "Journal intime",
        "Conversations avec amis"
      ]
    }
  ];

  const handleConnectFamily = () => {
    if (familyCode.length >= 6) {
      setIsConnected(true);
      // TODO: Connect to family via Supabase
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400 rounded-full animate-ping"></div>
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
              <Shield className="w-6 h-6 text-blue-400" />
              <h1 className="text-2xl font-black text-white">ACCÈS PARENTAL</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mb-6">
            👨‍👩‍👧‍👦 CONNEXION FAMILLE
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Un pont de confiance entre toi et tes parents 🌉
          </p>
        </div>

        {!isConnected ? (
          <>
            {/* Connection Card */}
            <Card className="mb-12 bg-black/40 backdrop-blur-sm border-2 border-white/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-center">
                  🔗 Connecter tes parents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    Partage ton code famille avec tes parents pour qu'ils puissent accéder à ton dashboard bien-être
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-6 border-2 border-blue-400/30 mb-6">
                    <div className="text-3xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold text-white mb-2">Ton Code Famille</h3>
                    <div className="text-4xl font-mono font-black text-cyan-400 tracking-wider">
                      FAM-789-XYZ
                    </div>
                    <p className="text-sm text-gray-300 mt-2">
                      Partage ce code avec tes parents
                    </p>
                  </div>

                  <div className="text-left space-y-4">
                    <h4 className="font-bold text-white">📱 Comment faire ?</h4>
                    <ol className="space-y-2 text-gray-300">
                      <li>1. Donne ce code à tes parents</li>
                      <li>2. Ils créent leur compte parent avec ce code</li>
                      <li>3. Tu valides leur demande de connexion</li>
                      <li>4. Vous êtes connectés en toute sécurité ! ✅</li>
                    </ol>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-bold text-white mb-4 text-center">
                    🔐 Ou connecte-toi à un groupe famille existant
                  </h4>
                  <div className="flex space-x-3">
                    <Input
                      placeholder="Code famille de tes parents"
                      value={familyCode}
                      onChange={(e) => setFamilyCode(e.target.value.toUpperCase())}
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl"
                    />
                    <Button 
                      onClick={handleConnectFamily}
                      disabled={familyCode.length < 6}
                      className="bg-blue-500 hover:bg-blue-600 rounded-2xl px-8"
                    >
                      Rejoindre
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="mb-12 bg-green-500/10 border-2 border-green-400/30 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-300 mb-4">
                Famille connectée !
              </h3>
              <p className="text-gray-300 mb-6">
                Tes parents peuvent maintenant accéder à ton dashboard bien-être
              </p>
              <Button 
                onClick={() => navigate('/teens/dashboard-parent')}
                className="bg-green-500 hover:bg-green-600 rounded-2xl"
              >
                Voir le dashboard parent
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Parent Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {parentFeatures.map((feature, index) => (
            <Card key={index} className={`group bg-gradient-to-br ${feature.color}/10 border-2 border-white/20 hover:border-white/40 transition-all duration-300`}>
              <CardContent className="p-8">
                <feature.icon className={`w-16 h-16 mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Privacy Transparency */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {accessLevels.map((level, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  {level.level}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {level.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-gray-300">
                      <span className="text-lg">
                        {level.level.includes('🟢') ? '✅' : '🔒'}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Notice */}
        <Card className="bg-blue-500/10 border-2 border-blue-400/30">
          <CardContent className="p-8 text-center">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              🛡️ Transparence & Respect
            </h3>
            <div className="max-w-3xl mx-auto text-gray-200 space-y-4">
              <p>
                <strong>Tu gardes le contrôle :</strong> Tu peux voir exactement ce que tes parents voient, 
                modifier les paramètres de partage, et déconnecter l'accès à tout moment.
              </p>
              <p>
                <strong>Respect mutuel :</strong> Cet outil est conçu pour renforcer la confiance, 
                pas pour t'espionner. Tes parents s'engagent à respecter ton intimité.
              </p>
              <p>
                <strong>Communication ouverte :</strong> L'objectif est de faciliter les conversations 
                et le soutien, pas de créer de la surveillance.
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <Button 
                onClick={() => navigate('/teens/privacy-settings')}
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-2xl"
              >
                <Lock className="w-4 h-4 mr-2" />
                Paramètres de confidentialité
              </Button>
              <Button 
                onClick={() => navigate('/teens/family-space')}
                className="bg-blue-500 hover:bg-blue-600 rounded-2xl"
              >
                <Users className="w-4 h-4 mr-2" />
                Espace famille
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeensParentalAccess;
