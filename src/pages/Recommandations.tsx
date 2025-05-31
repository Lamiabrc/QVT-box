
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Gift, Lightbulb, Heart, Zap, Coffee, Users } from "lucide-react";

const Recommandations = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      id: 1,
      type: "box",
      title: "Box Anti-Stress Premium",
      description: "Une sélection d'objets et d'activités pour réduire le stress au quotidien.",
      tags: ["stress", "relaxation"],
      priority: "Haute",
      icon: <Heart className="w-6 h-6" />,
      items: ["Balle anti-stress", "Infusion relaxante", "Guide de méditation", "Coussin ergonomique"],
      color: "border-red-200 bg-red-50"
    },
    {
      id: 2,
      type: "activite",
      title: "Session de Team Building",
      description: "Activité collaborative pour renforcer la cohésion d'équipe.",
      tags: ["cohésion", "team"],
      priority: "Moyenne",
      icon: <Users className="w-6 h-6" />,
      items: ["Escape Game", "Atelier créatif", "Déjeuner d'équipe", "Débriefing collectif"],
      color: "border-blue-200 bg-blue-50"
    },
    {
      id: 3,
      type: "box",
      title: "Kit Énergie & Motivation",
      description: "Pour retrouver dynamisme et motivation au travail.",
      tags: ["énergie", "motivation"],
      priority: "Moyenne",
      icon: <Zap className="w-6 h-6" />,
      items: ["Smoothie énergisant", "Carnet de gratitude", "Plant bureau", "Snacks healthy"],
      color: "border-yellow-200 bg-yellow-50"
    },
    {
      id: 4,
      type: "conseil",
      title: "Programme de Micro-Pauses",
      description: "Intégrez des pauses de 5 minutes toutes les heures pour optimiser votre concentration.",
      tags: ["productivité", "pause"],
      priority: "Basse",
      icon: <Coffee className="w-6 h-6" />,
      items: ["Exercices de respiration", "Étirements bureau", "Marche courte", "Hydratation"],
      color: "border-green-200 bg-green-50"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Haute": return "bg-red-100 text-red-800";
      case "Moyenne": return "bg-yellow-100 text-yellow-800";
      case "Basse": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "box": return <Gift className="w-4 h-4" />;
      case "activite": return <Users className="w-4 h-4" />;
      case "conseil": return <Lightbulb className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-accent/10">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Lightbulb className="w-5 h-5 text-accent-foreground" />
              <h1 className="text-xl font-bold text-accent-foreground">Recommandations IA</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Vos Recommandations Personnalisées 🎯
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Basées sur votre dernière évaluation QVT, notre IA a sélectionné ces solutions pour améliorer 
            votre bien-être. Chaque recommandation est adaptée à votre profil et vos besoins spécifiques.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">8.6/15</div>
              <p className="text-sm text-muted-foreground">Votre dernier score QVT</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-secondary">{recommendations.length}</div>
              <p className="text-sm text-muted-foreground">Recommandations disponibles</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-accent-foreground">85%</div>
              <p className="text-sm text-muted-foreground">Taux de satisfaction moyen</p>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations List */}
        <div className="space-y-6">
          {recommendations.map((recommendation, index) => (
            <Card key={recommendation.id} className={`transition-all duration-300 hover:shadow-lg ${recommendation.color} border-2 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-xl shadow-sm">
                      {recommendation.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{recommendation.title}</CardTitle>
                      <p className="text-muted-foreground">{recommendation.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={getPriorityColor(recommendation.priority)}>
                      {recommendation.priority}
                    </Badge>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      {getTypeIcon(recommendation.type)}
                      <span className="capitalize">{recommendation.type}</span>
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {recommendation.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Items */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Contenu inclus :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {recommendation.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button className="rounded-2xl bg-primary">
                      Commander cette recommandation
                    </Button>
                    <Button variant="outline" className="rounded-2xl">
                      En savoir plus
                    </Button>
                    <Button variant="ghost" className="rounded-2xl">
                      Pas intéressé
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Besoin de conseils personnalisés ?</h3>
              <p className="text-muted-foreground mb-6">
                Nos experts bien-être sont disponibles pour vous accompagner dans le choix 
                et la mise en place de vos solutions QVT.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="rounded-2xl bg-primary">
                  Prendre rendez-vous
                </Button>
                <Button onClick={() => navigate('/historique')} variant="outline" className="rounded-2xl">
                  Voir mon historique
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Recommandations;
