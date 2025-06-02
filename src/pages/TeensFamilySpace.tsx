
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { Heart, Users, Gift, MessageCircle, Star, Crown, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeensFamilySpace = () => {
  const navigate = useNavigate();
  const [selectedGift, setSelectedGift] = useState<string | null>(null);

  const familyMembers = [
    {
      name: "Léa",
      role: "Grande sœur",
      age: 17,
      avatar: "👩‍🦱",
      mood: "😊",
      points: 1432,
      streak: 7,
      status: "En ligne",
      approved: true
    },
    {
      name: "Jules",
      role: "Petit frère",
      age: 14,
      avatar: "👦",
      mood: "😎",
      points: 892,
      streak: 3,
      status: "Hors ligne",
      approved: true
    },
    {
      name: "Papa",
      role: "Parent",
      age: 45,
      avatar: "👨",
      mood: "😌",
      points: 234,
      streak: 12,
      status: "En ligne",
      approved: true
    },
    {
      name: "Maman",
      role: "Parent",
      age: 43,
      avatar: "👩",
      mood: "💕",
      points: 567,
      streak: 15,
      status: "En ligne",
      approved: true
    }
  ];

  const virtualGifts = [
    { id: "hug", name: "Câlin virtuel", emoji: "🤗", cost: 50, description: "Envoie de l'amour !" },
    { id: "highfive", name: "High Five", emoji: "🙏", cost: 25, description: "Pour féliciter !" },
    { id: "cookie", name: "Cookie virtuel", emoji: "🍪", cost: 75, description: "Pour faire plaisir" },
    { id: "flower", name: "Bouquet", emoji: "💐", cost: 100, description: "Pour dire merci" },
    { id: "trophy", name: "Trophée", emoji: "🏆", cost: 150, description: "Tu es le/la meilleur(e) !" },
    { id: "rainbow", name: "Arc-en-ciel", emoji: "🌈", cost: 200, description: "Pour illuminer sa journée" }
  ];

  const familyChallenges = [
    {
      title: "Défi Famille Zen",
      description: "Méditer ensemble 10 minutes",
      participants: ["Léa", "Jules", "Papa"],
      reward: "100 points chacun + Soirée ciné",
      status: "En cours",
      emoji: "🧘‍♀️"
    },
    {
      title: "Week-end Digital Detox",
      description: "Passer le samedi sans écrans",
      participants: ["Toute la famille"],
      reward: "Sortie parc d'attractions",
      status: "Bientôt",
      emoji: "📱❌"
    },
    {
      title: "Gratitude Challenge",
      description: "Partager 3 choses positives par jour",
      participants: ["Léa", "Maman"],
      reward: "Badge spécial famille",
      status: "Terminé",
      emoji: "🙏"
    }
  ];

  const sendGift = (gift: typeof virtualGifts[0], recipient: string) => {
    setSelectedGift(gift.id);
    setTimeout(() => setSelectedGift(null), 2000);
    alert(`🎁 "${gift.name}" envoyé à ${recipient} !\n\n${gift.description}\n\n💎 -${gift.cost} points`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Navigation userType="teen" onBack={() => navigate('/teens')} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            ESPACE FAMILLE PRIVÉ 👨‍👩‍👧‍👦
          </h1>
          <div className="bg-green-100 p-4 rounded-xl border-4 border-green-300 mb-4">
            <div className="flex items-center justify-center gap-2 text-green-800">
              <Shield className="h-6 w-6" />
              <span className="font-black">ESPACE 100% SÉCURISÉ & PRIVÉ</span>
              <Shield className="h-6 w-6" />
            </div>
            <p className="text-sm text-green-700 mt-2">
              Seuls les membres approuvés par tes parents peuvent accéder à cet espace
            </p>
          </div>
        </div>

        <Tabs defaultValue="family" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="family" className="font-bold">👥 MA FAMILLE</TabsTrigger>
            <TabsTrigger value="gifts" className="font-bold">🎁 CADEAUX</TabsTrigger>
            <TabsTrigger value="challenges" className="font-bold">🏆 DÉFIS FAMILLE</TabsTrigger>
          </TabsList>

          <TabsContent value="family">
            <div className="grid md:grid-cols-2 gap-6">
              {familyMembers.map((member, index) => (
                <Card key={index} className="border-4 border-purple-200 bg-gradient-to-br from-white to-purple-50">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-2">{member.avatar}</div>
                    <CardTitle className="text-2xl font-black text-purple-800">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-purple-600">
                      {member.role} • {member.age} ans
                    </CardDescription>
                    <div className="flex justify-center gap-2 mt-2">
                      <Badge className={`${member.status === 'En ligne' ? 'bg-green-400' : 'bg-gray-400'} text-white font-bold`}>
                        {member.status}
                      </Badge>
                      <Badge className="bg-yellow-400 text-black font-bold">
                        {member.points} pts
                      </Badge>
                      <Badge className="bg-green-400 text-white font-bold">
                        ✓ Approuvé
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="flex justify-around">
                      <div>
                        <div className="text-3xl">{member.mood}</div>
                        <p className="text-sm font-medium text-gray-600">Mood</p>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-orange-500">{member.streak}</div>
                        <p className="text-sm font-medium text-gray-600">Jours de suite</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-500 hover:bg-blue-600 font-bold">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Message
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 font-bold"
                        onClick={() => sendGift(virtualGifts[0], member.name)}
                      >
                        <Gift className="mr-2 h-4 w-4" />
                        Cadeau
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gifts">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-4 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-yellow-800 flex items-center gap-2">
                    <Gift className="h-8 w-8" />
                    CADEAUX VIRTUELS FAMILLE
                  </CardTitle>
                  <CardDescription className="text-yellow-700 font-medium">
                    Offre des cadeaux virtuels avec tes points à ta famille !
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {virtualGifts.map((gift) => (
                      <Button
                        key={gift.id}
                        variant="outline"
                        className="h-20 flex-col bg-white hover:bg-yellow-100 border-2 border-yellow-300"
                        onClick={() => sendGift(gift, "Léa")}
                      >
                        <span className="text-2xl mb-1">{gift.emoji}</span>
                        <span className="text-xs font-bold">{gift.name}</span>
                        <Badge className="bg-yellow-400 text-black text-xs">
                          {gift.cost} pts
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-4 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-green-800 flex items-center gap-2">
                    <Crown className="h-8 w-8" />
                    SUGGESTIONS PARENTS
                  </CardTitle>
                  <CardDescription className="text-green-700 font-medium">
                    Ce que tes parents peuvent t'offrir
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border-2 border-green-300">
                    <h4 className="font-bold text-green-800 mb-2">🎮 Récompenses Suggérées</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• 1h de jeu en plus le week-end</li>
                      <li>• Sortie au cinéma en famille</li>
                      <li>• Argent de poche bonus</li>
                      <li>• Soirée pizza en famille</li>
                      <li>• Nouveau livre/manga</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border-2 border-green-300">
                    <h4 className="font-bold text-green-800 mb-2">💝 Objets de Soutien</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• Kit de relaxation (bougies, thé)</li>
                      <li>• Carnet de gratitude personnalisé</li>
                      <li>• Playlist détente partagée</li>
                      <li>• Cours de yoga/méditation</li>
                      <li>• Box surprise bien-être</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="challenges">
            <div className="space-y-6">
              {familyChallenges.map((challenge, index) => (
                <Card key={index} className="border-4 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{challenge.emoji}</span>
                        <div>
                          <CardTitle className="text-xl font-black text-blue-800">
                            {challenge.title}
                          </CardTitle>
                          <CardDescription className="text-blue-600 font-medium">
                            {challenge.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge 
                        className={`font-bold ${
                          challenge.status === 'En cours' ? 'bg-orange-400' :
                          challenge.status === 'Terminé' ? 'bg-green-400' : 'bg-blue-400'
                        } text-white`}
                      >
                        {challenge.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-blue-700 mb-1">
                          Participants: {challenge.participants.join(", ")}
                        </p>
                        <p className="text-sm font-bold text-green-600">
                          Récompense: {challenge.reward}
                        </p>
                      </div>
                      <Button 
                        className="bg-blue-500 hover:bg-blue-600 font-bold"
                        disabled={challenge.status === 'Terminé'}
                      >
                        {challenge.status === 'En cours' ? 'Continuer' :
                         challenge.status === 'Terminé' ? 'Terminé ✓' : 'Rejoindre'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeensFamilySpace;
