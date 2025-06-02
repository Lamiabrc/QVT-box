
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { useSecureAuth } from "@/hooks/useSecureAuth";
import { Brain, Star, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const TeensAIEvaluation = () => {
  const navigate = useNavigate();
  const { user } = useSecureAuth();
  const [currentTest, setCurrentTest] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const tests = [
    {
      title: "Test d'Humeur 😊",
      description: "Évalue ton état émotionnel actuel",
      questions: [
        {
          question: "Comment décrirais-tu ton énergie aujourd'hui ?",
          options: ["Super énergique", "Plutôt bien", "Fatigue normale", "Vraiment épuisé"]
        },
        {
          question: "Ton niveau de stress cette semaine ?",
          options: ["Très stressé", "Un peu stressé", "Calme", "Très zen"]
        }
      ]
    },
    {
      title: "Test Anxiété 🌊",
      description: "Identifie tes niveaux d'anxiété",
      questions: [
        {
          question: "À quelle fréquence tu te sens anxieux ?",
          options: ["Tout le temps", "Souvent", "Parfois", "Rarement"]
        },
        {
          question: "Tes principales sources d'inquiétude ?",
          options: ["École/Études", "Relations", "Avenir", "Santé"]
        }
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (newAnswers.length >= 4) {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <Navigation 
          userType="teen"
          onBack={() => navigate('/teens')} 
        />
        
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Tes Résultats IA 🎯
            </h1>
            <p className="text-gray-600">Analyse personnalisée de ton bien-être mental</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Points Forts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Bonne conscience de tes émotions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Capacité à demander de l'aide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Résilience face aux défis</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertCircle className="h-5 w-5" />
                  Points d'Attention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Stress scolaire à surveiller</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Besoin de plus de temps pour soi</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Recommandations Personnalisées
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-700 mb-2">🧘‍♀️ Cette Semaine</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 10 min de méditation quotidienne</li>
                    <li>• Exercice de respiration avant les cours</li>
                    <li>• Journal de gratitude le soir</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">🎯 Ce Mois-ci</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Établir une routine de sommeil</li>
                    <li>• Planifier des activités sociales</li>
                    <li>• Explorer le métaverse zen</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Star className="mr-2 h-4 w-4" />
                  Commencer mon plan personnalisé
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = tests[Math.floor(answers.length / 2)]?.questions[answers.length % 2];
  const progress = (answers.length / 4) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Navigation 
        userType="teen"
        onBack={() => navigate('/teens')} 
      />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Évaluation IA 🧠
          </h1>
          <p className="text-gray-600">Tests adaptatifs pour mieux te comprendre</p>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-500 mt-2">Progression: {Math.round(progress)}%</p>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              {tests[Math.floor(answers.length / 2)]?.title}
            </CardTitle>
            <CardDescription>
              Question {(answers.length % 2) + 1} sur 2
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-medium mb-6 text-center">
              {currentQuestion?.question}
            </h3>
            <div className="space-y-3">
              {currentQuestion?.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full h-auto p-4 text-left justify-start"
                  onClick={() => handleAnswer(option)}
                >
                  <span className="mr-3 text-lg">
                    {['A', 'B', 'C', 'D'][index]}
                  </span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          {tests.map((test, index) => (
            <Card key={index} className={`${index === Math.floor(answers.length / 2) ? 'border-purple-300 bg-purple-50' : ''}`}>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-sm mb-2">{test.title}</h3>
                <Badge variant={index < Math.floor(answers.length / 2) ? "default" : "outline"}>
                  {index < Math.floor(answers.length / 2) ? "Terminé" : 
                   index === Math.floor(answers.length / 2) ? "En cours" : "À venir"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeensAIEvaluation;
