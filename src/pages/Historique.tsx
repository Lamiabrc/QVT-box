
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Package, Star, Calendar, TrendingUp, MessageSquare } from "lucide-react";

const Historique = () => {
  const navigate = useNavigate();

  const boxHistory = [
    {
      id: 1,
      title: "Box Anti-Stress Premium",
      date: "2024-05-15",
      status: "Livrée",
      feedback: 4.5,
      comment: "Très utile, surtout la balle anti-stress !",
      items: ["Balle anti-stress", "Infusion relaxante", "Guide méditation"]
    },
    {
      id: 2,
      title: "Kit Énergie & Motivation",
      date: "2024-04-20",
      status: "Utilisée",
      feedback: 5,
      comment: "Le smoothie était délicieux et le carnet de gratitude m'aide beaucoup.",
      items: ["Smoothie énergisant", "Carnet gratitude", "Plant bureau"]
    },
    {
      id: 3,
      title: "Box Cohésion d'Équipe",
      date: "2024-03-10",
      status: "Terminée",
      feedback: 3.5,
      comment: "Bien mais pas adapté à notre équipe distante.",
      items: ["Jeux collaboratifs", "Goûter partagé", "Activités créatives"]
    }
  ];

  const questionnaires = [
    {
      id: 1,
      date: "2024-05-25",
      score: "8.6/15",
      type: "QVT Entreprise",
      status: "Complété",
      interpretation: "Bon niveau général"
    },
    {
      id: 2,
      date: "2024-04-15",
      score: "7.2/15",
      type: "QVT Entreprise",
      status: "Complété",
      interpretation: "Quelques points d'amélioration"
    },
    {
      id: 3,
      date: "2024-03-01",
      score: "6.8/15",
      type: "QVT Entreprise",
      status: "Complété",
      interpretation: "Attention requise"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Livrée": return "bg-green-100 text-green-800";
      case "Utilisée": return "bg-blue-100 text-blue-800";
      case "Terminée": return "bg-gray-100 text-gray-800";
      case "Complété": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
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
              <Calendar className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-bold text-primary">Mon Historique</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Votre Parcours QVT 📊
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez l'ensemble de vos évaluations, recommandations et retours d'expérience 
            pour suivre votre évolution bien-être.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{boxHistory.length}</div>
              <p className="text-sm text-muted-foreground">Box reçues</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-600">4.3/5</div>
              <p className="text-sm text-muted-foreground">Satisfaction moyenne</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">+1.8</div>
              <p className="text-sm text-muted-foreground">Progression QVT</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{questionnaires.length}</div>
              <p className="text-sm text-muted-foreground">Évaluations complétées</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="boxes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="boxes">Box & Recommandations</TabsTrigger>
            <TabsTrigger value="evaluations">Évaluations QVT</TabsTrigger>
          </TabsList>

          {/* Box History */}
          <TabsContent value="boxes" className="space-y-6">
            {boxHistory.map((box, index) => (
              <Card key={box.id} className="transition-all duration-300 hover:shadow-lg animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">{box.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(box.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <Badge className={getStatusColor(box.status)}>
                          {box.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {renderStars(box.feedback)}
                      </div>
                      <p className="text-sm text-muted-foreground">{box.feedback}/5</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Items */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Contenu :</h4>
                      <div className="flex flex-wrap gap-2">
                        {box.items.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Feedback */}
                    {box.comment && (
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-sm italic">"{box.comment}"</p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="rounded-2xl">
                        Recommander à nouveau
                      </Button>
                      <Button size="sm" variant="ghost" className="rounded-2xl">
                        Modifier l'avis
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Questionnaire History */}
          <TabsContent value="evaluations" className="space-y-6">
            {questionnaires.map((questionnaire, index) => (
              <Card key={questionnaire.id} className="transition-all duration-300 hover:shadow-lg animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">Évaluation QVT</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(questionnaire.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <Badge variant="outline">{questionnaire.type}</Badge>
                        <Badge className={getStatusColor(questionnaire.status)}>
                          {questionnaire.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {questionnaire.score}
                      </div>
                      <p className="text-sm text-muted-foreground">{questionnaire.interpretation}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="rounded-2xl">
                      Voir le détail
                    </Button>
                    <Button size="sm" variant="ghost" className="rounded-2xl">
                      Comparer avec précédent
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Continuez votre parcours bien-être</h3>
              <p className="text-muted-foreground mb-6">
                Votre évolution est positive ! Continuez avec une nouvelle évaluation ou découvrez 
                nos dernières recommandations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={() => navigate('/entreprise/questionnaire')} className="rounded-2xl bg-primary">
                  Nouvelle évaluation
                </Button>
                <Button onClick={() => navigate('/recommandations')} variant="outline" className="rounded-2xl">
                  Voir les recommandations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Historique;
