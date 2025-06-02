
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { useSecureAuth } from "@/hooks/useSecureAuth";
import { CalendarDays, Gift, Heart, Star, Users, CalendarPlus } from "lucide-react";

const Calendar = () => {
  const navigate = useNavigate();
  const { user } = useSecureAuth();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      date: "2024-01-15",
      title: "Anniversaire de Léa",
      type: "birthday",
      description: "17 ans aujourd'hui ! 🎂",
      participants: ["famille"]
    },
    {
      date: "2024-01-20",
      title: "Séance méditation en famille",
      type: "activity",
      description: "20 minutes de relaxation ensemble",
      participants: ["parent", "teen"]
    },
    {
      date: "2024-01-25",
      title: "Saint-Paul (Papa)",
      type: "nameday",
      description: "Bonne fête Papa !",
      participants: ["famille"]
    },
    {
      date: "2024-02-14",
      title: "Saint-Valentin",
      type: "holiday",
      description: "Journée de l'amour et de l'amitié",
      participants: ["famille"]
    }
  ];

  const parentTeenActivities = [
    {
      title: "Atelier Cuisine Anti-Stress",
      duration: "1h30",
      description: "Préparez ensemble des recettes apaisantes",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      difficulty: "Facile",
      benefits: ["Communication", "Créativité", "Détente"]
    },
    {
      title: "Balade Photo Nature",
      duration: "2h",
      description: "Explorez la nature et capturez de beaux moments",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
      difficulty: "Facile",
      benefits: ["Connexion nature", "Partage", "Créativité"]
    },
    {
      title: "Séance Yoga Parent-Ado",
      duration: "45min",
      description: "Relaxation et étirements en duo",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
      difficulty: "Modéré",
      benefits: ["Relaxation", "Complicité", "Bien-être"]
    },
    {
      title: "Atelier Art-Thérapie",
      duration: "1h",
      description: "Exprimez vos émotions à travers l'art",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
      difficulty: "Facile",
      benefits: ["Expression", "Créativité", "Communication"]
    }
  ];

  const parentTips = [
    {
      title: "Comment reconnaître les signes de stress chez votre ado",
      category: "Observation",
      description: "Apprenez à identifier les signaux d'alarme précoces",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      readTime: "5 min"
    },
    {
      title: "L'art de l'écoute active avec votre adolescent",
      category: "Communication",
      description: "Techniques pour créer un dialogue ouvert et bienveillant",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400",
      readTime: "7 min"
    },
    {
      title: "Créer un environnement propice au bien-être",
      category: "Environnement",
      description: "Aménager l'espace familial pour favoriser la sérénité",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      readTime: "6 min"
    },
    {
      title: "Gérer ses propres émotions pour mieux accompagner",
      category: "Auto-soin",
      description: "Prendre soin de soi pour être un meilleur parent",
      image: "https://images.unsplash.com/photo-1494790108755-2616c14b2be6?w=400",
      readTime: "8 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Navigation 
        userType="teen"
        onBack={() => navigate('/teens')} 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            AGENDA FAMILLE 📅
          </h1>
          <p className="text-xl text-gray-600">
            Anniversaires, fêtes et moments de partage en famille
          </p>
        </div>

        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="calendar" className="font-bold">📅 AGENDA</TabsTrigger>
            <TabsTrigger value="activities" className="font-bold">🎯 ACTIVITÉS</TabsTrigger>
            <TabsTrigger value="tips" className="font-bold">💡 CONSEILS</TabsTrigger>
            <TabsTrigger value="interactions" className="font-bold">💝 INTERACTIONS</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-1 border-4 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <CalendarDays className="h-6 w-6" />
                    Calendrier
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 border-4 border-pink-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-pink-800">
                    <Star className="h-6 w-6" />
                    Événements à venir
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border-2 border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{event.title}</h4>
                        <Badge className={`${
                          event.type === 'birthday' ? 'bg-pink-400' :
                          event.type === 'activity' ? 'bg-blue-400' :
                          event.type === 'nameday' ? 'bg-green-400' : 'bg-red-400'
                        } text-white font-bold`}>
                          {event.type === 'birthday' ? '🎂 Anniversaire' :
                           event.type === 'activity' ? '🎯 Activité' :
                           event.type === 'nameday' ? '🌟 Fête' : '🎉 Fête'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <p className="text-sm text-gray-500">📅 {event.date}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activities">
            <div className="grid md:grid-cols-2 gap-6">
              {parentTeenActivities.map((activity, index) => (
                <Card key={index} className="border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-black font-bold">
                        {activity.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-black text-blue-800">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2 flex-wrap">
                      {activity.benefits.map((benefit, idx) => (
                        <Badge key={idx} className="bg-green-400 text-white text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="font-bold">
                        {activity.difficulty}
                      </Badge>
                      <Button className="bg-blue-500 hover:bg-blue-600 font-bold">
                        <CalendarPlus className="mr-2 h-4 w-4" />
                        Planifier
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-6">
              {parentTips.map((tip, index) => (
                <Card key={index} className="border-4 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={tip.image} 
                      alt={tip.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white font-bold">
                        {tip.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-black text-green-800">
                      {tip.title}
                    </CardTitle>
                    <CardDescription className="text-green-600 font-medium">
                      {tip.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="font-bold">
                        📖 {tip.readTime}
                      </Badge>
                      <Button className="bg-green-500 hover:bg-green-600 font-bold">
                        Lire l'article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interactions">
            <div className="space-y-8">
              <Card className="border-4 border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-red-800 flex items-center gap-2">
                    <Heart className="h-8 w-8" />
                    CHALLENGES PARENT-ADO
                  </CardTitle>
                  <CardDescription className="text-red-700 font-medium">
                    Renforcez vos liens à travers des défis amusants
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border-2 border-red-300 text-center">
                    <div className="text-4xl mb-2">🎨</div>
                    <h4 className="font-bold text-red-800 mb-2">Défi Créatif</h4>
                    <p className="text-sm text-red-600">Créer ensemble une œuvre d'art en 30 min</p>
                    <Button className="mt-3 bg-red-400 hover:bg-red-500 text-white">
                      Accepter
                    </Button>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-2 border-red-300 text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <h4 className="font-bold text-red-800 mb-2">Photo Challenge</h4>
                    <p className="text-sm text-red-600">Prendre 10 photos sur le thème "bonheur"</p>
                    <Button className="mt-3 bg-red-400 hover:bg-red-500 text-white">
                      Accepter
                    </Button>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-2 border-red-300 text-center">
                    <div className="text-4xl mb-2">🍳</div>
                    <h4 className="font-bold text-red-800 mb-2">Cuisine Express</h4>
                    <p className="text-sm text-red-600">Préparer un plat surprise en duo</p>
                    <Button className="mt-3 bg-red-400 hover:bg-red-500 text-white">
                      Accepter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-4 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-purple-800 flex items-center gap-2">
                    <Users className="h-8 w-8" />
                    MOMENTS DE PARTAGE
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-purple-800">💭 Questions du jour</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg border-2 border-purple-300">
                        <p className="text-sm font-medium">"Quelle a été ta plus belle découverte cette semaine ?"</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border-2 border-purple-300">
                        <p className="text-sm font-medium">"Si tu pouvais changer une chose dans le monde, ce serait quoi ?"</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-purple-800">🎯 Objectifs communs</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg border-2 border-purple-300">
                        <p className="text-sm font-medium">📚 Lire ensemble 15 min/jour</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border-2 border-purple-300">
                        <p className="text-sm font-medium">🚶‍♀️ Marcher 30 min ensemble</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-purple-600 h-2 rounded-full w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Calendar;
