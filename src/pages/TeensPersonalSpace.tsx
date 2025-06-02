
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Heart, MessageCircle, Shield, Users, Lock, ArrowLeft, Star, Settings, Palette, Camera, Music, Calendar, Award } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";

const TeensPersonalSpace = () => {
  const navigate = useNavigate();
  const [personalThoughts, setPersonalThoughts] = useState("");
  const [parentMessage, setParentMessage] = useState("");

  const personalFeatures = [
    { icon: "📔", title: "Mon Journal", description: "Écris tes pensées quotidiennes", path: "/teens/journal" },
    { icon: "🎨", title: "Customisation", description: "Personnalise ton espace", path: "/teens/customization" },
    { icon: "🎵", title: "Ma Playlist", description: "Musiques qui te font du bien", path: "/teens/playlist" },
    { icon: "🏆", title: "Mes Achievements", description: "Tes réussites et progrès", path: "/teens/achievements" },
    { icon: "📸", title: "Mes Souvenirs", description: "Photos et moments importants", path: "/teens/memories" },
    { icon: "⚙️", title: "Paramètres Privés", description: "Confidentialité et sécurité", path: "/teens/privacy-settings" }
  ];

  const quickStats = [
    { label: "Check-ins cette semaine", value: "5/7", color: "text-green-600" },
    { label: "Points bien-être", value: "245", color: "text-purple-600" },
    { label: "Jours de journaling", value: "12", color: "text-blue-600" },
    { label: "Humeur moyenne", value: "😊", color: "text-yellow-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <TeensHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Mon Espace Personnel 🌸
          </h1>
          <p className="text-gray-600">Ton univers privé, tes outils de bien-être et tes réussites</p>
          <div className="flex justify-center gap-2 mt-3">
            <Badge className="bg-green-100 text-green-700">
              <Shield className="h-3 w-3 mr-1" />
              100% Privé
            </Badge>
            <Badge className="bg-blue-100 text-blue-700">
              <Star className="h-3 w-3 mr-1" />
              Tes réussites
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="journal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="journal">Journal Perso</TabsTrigger>
            <TabsTrigger value="features">Mes Outils</TabsTrigger>
            <TabsTrigger value="achievements">Réussites</TabsTrigger>
            <TabsTrigger value="parents">Communication</TabsTrigger>
          </TabsList>

          <TabsContent value="journal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Mon Journal Secret
                </CardTitle>
                <CardDescription>
                  Écris tout ce qui te passe par la tête. C'est TON espace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Aujourd'hui j'ai ressenti... Ce qui me préoccupe c'est... Je suis fier/fière de... 💭"
                  value={personalThoughts}
                  onChange={(e) => setPersonalThoughts(e.target.value)}
                  className="min-h-40 mb-4"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Badge variant="outline">#thoughts</Badge>
                    <Badge variant="outline">#feelings</Badge>
                    <Badge variant="outline">#dreams</Badge>
                  </div>
                  <Button onClick={() => navigate('/teens/journal')}>
                    Ouvrir mon journal complet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {personalFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => navigate(feature.path)}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <span className="text-2xl">{feature.icon}</span>
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Accéder
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Mes Réussites et Progrès
                </CardTitle>
                <CardDescription>
                  Célèbre tes accomplissements et ton évolution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🏆 Check-in Champion</h4>
                    <p className="text-sm text-green-600">5 check-ins consécutifs cette semaine!</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">📝 Écrivain en herbe</h4>
                    <p className="text-sm text-purple-600">12 jours de journaling ce mois-ci</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">💪 Gestion du stress</h4>
                    <p className="text-sm text-blue-600">Techniques de relaxation maîtrisées</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">🌟 Confiance en soi</h4>
                    <p className="text-sm text-yellow-600">Progression notable en assertivité</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="parents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Communication avec mes Parents
                </CardTitle>
                <CardDescription>
                  Un espace pour échanger avec tes parents quand tu en as envie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium mb-2">Message de Maman - Il y a 2h</p>
                    <p className="text-blue-600">"Salut ma chérie ! J'ai vu que tu as fait ton check-in aujourd'hui. Je suis fière de toi ! 💕 N'hésite pas si tu veux qu'on discute."</p>
                  </div>
                  
                  <Textarea
                    placeholder="Écris un message à tes parents... Ils recevront une notification douce 📱"
                    value={parentMessage}
                    onChange={(e) => setParentMessage(e.target.value)}
                    className="min-h-32"
                  />
                  
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Lock className="h-4 w-4 mr-1" />
                        Privé
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => navigate('/teens/family-space')}>
                        Espace famille
                      </Button>
                    </div>
                    <Button>Envoyer Message</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeensPersonalSpace;
