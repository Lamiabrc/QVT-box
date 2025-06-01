
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Users, Star } from "lucide-react";
import { useState } from "react";

const TeensCalendar = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      date: "2024-12-28",
      time: "14:00",
      title: "Atelier Créatif - Street Art",
      type: "workshop",
      location: "Métaverse - Creative Studio",
      participants: 12,
      color: "from-pink-500 to-purple-500",
      icon: "🎨"
    },
    {
      date: "2024-12-28",
      time: "16:30",
      title: "Check-in Bien-être",
      type: "checkin",
      location: "Personnel",
      participants: 1,
      color: "from-green-500 to-emerald-500",
      icon: "💚"
    },
    {
      date: "2024-12-29",
      time: "15:00",
      title: "Session Gaming en Équipe",
      type: "gaming",
      location: "Métaverse - Gaming Arena",
      participants: 8,
      color: "from-orange-500 to-red-500",
      icon: "🎮"
    },
    {
      date: "2024-12-30",
      time: "18:00",
      title: "Livraison Box Mensuelle",
      type: "delivery",
      location: "À domicile",
      participants: 1,
      color: "from-blue-500 to-cyan-500",
      icon: "📦"
    },
    {
      date: "2024-12-31",
      time: "20:00",
      title: "Réveillon Virtuel 🎉",
      type: "celebration",
      location: "Métaverse - Chill Lounge",
      participants: 50,
      color: "from-yellow-500 to-orange-500",
      icon: "🎊"
    },
    {
      date: "2025-01-02",
      time: "10:00",
      title: "Atelier Développement Personnel",
      type: "workshop",
      location: "Métaverse - Wellness Center",
      participants: 15,
      color: "from-purple-500 to-indigo-500",
      icon: "🧘"
    }
  ];

  const todayEvents = events.filter(event => {
    const today = new Date().toISOString().split('T')[0];
    return event.date === today;
  });

  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    return eventDate > today;
  }).slice(0, 3);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-pink-500/20 text-pink-300';
      case 'checkin': return 'bg-green-500/20 text-green-300';
      case 'gaming': return 'bg-orange-500/20 text-orange-300';
      case 'delivery': return 'bg-blue-500/20 text-blue-300';
      case 'celebration': return 'bg-yellow-500/20 text-yellow-300';
      default: return 'bg-purple-500/20 text-purple-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background */}
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
              <CalendarIcon className="w-6 h-6 text-blue-400" />
              <h1 className="text-2xl font-black text-white">MON CALENDRIER</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mb-6">
            📅 MON PLANNING
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Organise tes activités, check-ins et moments bien-être ! ⏰
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  📅 Calendrier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border-0"
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-400/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">📊 Cette Semaine</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Check-ins</span>
                    <span className="text-green-400 font-bold">6/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Ateliers</span>
                    <span className="text-blue-400 font-bold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Points gagnés</span>
                    <span className="text-yellow-400 font-bold">+127</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Events */}
            <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-green-400" />
                  🌟 Aujourd'hui
                </CardTitle>
              </CardHeader>
              <CardContent>
                {todayEvents.length > 0 ? (
                  <div className="space-y-4">
                    {todayEvents.map((event, index) => (
                      <div 
                        key={index} 
                        className={`bg-gradient-to-r ${event.color}/10 border-2 border-white/20 rounded-2xl p-4 hover:border-white/40 transition-all duration-300`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-3xl">{event.icon}</div>
                            <div>
                              <h4 className="text-lg font-bold text-white">{event.title}</h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-300 mt-1">
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {event.time}
                                </span>
                                <span className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {event.location}
                                </span>
                                <span className="flex items-center">
                                  <Users className="w-3 h-3 mr-1" />
                                  {event.participants}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge className={getEventTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                        </div>
                        <Button className="w-full mt-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl">
                          Rejoindre maintenant
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🌸</div>
                    <p className="text-gray-300">Aucun événement aujourd'hui</p>
                    <p className="text-gray-400 text-sm">Profite de cette journée libre !</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Star className="w-6 h-6 mr-3 text-yellow-400" />
                  🚀 À Venir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={index} 
                      className={`bg-gradient-to-r ${event.color}/10 border-2 border-white/20 rounded-2xl p-4 hover:border-white/40 transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{event.icon}</div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{event.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-300 mt-1">
                              <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                              <span className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {event.time}
                              </span>
                              <span className="flex items-center">
                                <Users className="w-3 h-3 mr-1" />
                                {event.participants}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      <div className="flex space-x-3 mt-3">
                        <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-2xl">
                          Participer
                        </Button>
                        <Button variant="outline" className="border-gray-400 text-gray-300 hover:bg-white/10 rounded-2xl">
                          Rappel
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="group bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-8 text-center">
              <CalendarIcon className="w-16 h-16 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">📅 Planifier Check-in</h3>
              <p className="text-gray-300 mb-4">Programme tes moments bien-être</p>
              <Button className="w-full bg-green-500 hover:bg-green-600 rounded-2xl">
                Planifier
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">👥 Créer Événement</h3>
              <p className="text-gray-300 mb-4">Organise une activité avec tes amis</p>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 rounded-2xl">
                Créer
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer">
            <CardContent className="p-8 text-center">
              <Star className="w-16 h-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">⭐ Mes Favoris</h3>
              <p className="text-gray-300 mb-4">Accès rapide à tes activités préférées</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-2xl">
                Voir favoris
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeensCalendar;
