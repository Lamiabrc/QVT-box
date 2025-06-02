
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Heart, MessageCircle, Shield, AlertTriangle, Users, Lock, ArrowLeft } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";

const TeensPersonalSpace = () => {
  const navigate = useNavigate();
  const [personalThoughts, setPersonalThoughts] = useState("");
  const [parentMessage, setParentMessage] = useState("");

  const intimateTopics = [
    { icon: "💕", title: "Relations & Amour", description: "Questions sur les relations amoureuses" },
    { icon: "🌡️", title: "Changements Corps", description: "Comprendre les transformations" },
    { icon: "😰", title: "Pression Sociale", description: "Gérer la pression des autres" },
    { icon: "🚫", title: "Dire Non", description: "Apprendre à poser des limites" },
    { icon: "🧠", title: "Santé Mentale", description: "Anxiété, dépression, stress" },
    { icon: "🎭", title: "Identité", description: "Qui suis-je vraiment ?" }
  ];

  const alertSituations = [
    { level: "attention", icon: "⚠️", title: "Pression pour essayer des substances", urgent: false },
    { level: "urgent", icon: "🚨", title: "Pensées d'automutilation", urgent: true },
    { level: "attention", icon: "😰", title: "Anxiété intense récurrente", urgent: false },
    { level: "urgent", icon: "💔", title: "Harcèlement ou violence", urgent: true },
    { level: "attention", icon: "🌙", title: "Troubles du sommeil", urgent: false }
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
          <p className="text-gray-600">Ton safe space pour parler de tout, même ce qui te préoccupe</p>
          <div className="flex justify-center gap-2 mt-3">
            <Badge className="bg-green-100 text-green-700">
              <Shield className="h-3 w-3 mr-1" />
              100% Confidentiel
            </Badge>
            <Badge className="bg-blue-100 text-blue-700">
              <Heart className="h-3 w-3 mr-1" />
              Sans jugement
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="journal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="journal">Journal Perso</TabsTrigger>
            <TabsTrigger value="intimate">Vie Intime</TabsTrigger>
            <TabsTrigger value="alerts">Alertes</TabsTrigger>
            <TabsTrigger value="parents">Avec Parents</TabsTrigger>
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
                  <Button>Sauvegarder</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="intimate" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {intimateTopics.map((topic, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <span className="text-2xl">{topic.icon}</span>
                      {topic.title}
                    </CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Parler en toute sécurité
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertTriangle className="h-5 w-5" />
                  Situations qui m'inquiètent
                </CardTitle>
                <CardDescription>
                  Si tu vis une de ces situations, on peut alerter tes parents pour t'aider
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {alertSituations.map((situation, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    situation.urgent ? 'bg-red-50 border-red-400' : 'bg-yellow-50 border-yellow-400'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{situation.icon}</span>
                        <span className="font-medium">{situation.title}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant={situation.urgent ? "destructive" : "outline"}
                      >
                        {situation.urgent ? "Alerte Urgente" : "Signaler"}
                      </Button>
                    </div>
                  </div>
                ))}
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
                      <Button variant="outline" size="sm">Demander de l'aide</Button>
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
