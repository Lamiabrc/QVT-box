
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, Users, Target } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const Simulator = () => {
  const navigate = useNavigate();
  const [budgetPerEmployee, setBudgetPerEmployee] = useState([100]);
  const [teamSize, setTeamSize] = useState([20]);
  const [frequency, setFrequency] = useState([2]);

  const simulatedData = [
    { month: 'Mois 1', qvt: 6.5, productivity: 75, satisfaction: 68 },
    { month: 'Mois 2', qvt: 7.2, productivity: 82, satisfaction: 74 },
    { month: 'Mois 3', qvt: 7.8, productivity: 87, satisfaction: 81 },
    { month: 'Mois 4', qvt: 8.1, productivity: 89, satisfaction: 85 },
    { month: 'Mois 5', qvt: 8.4, productivity: 91, satisfaction: 88 },
    { month: 'Mois 6', qvt: 8.7, productivity: 93, satisfaction: 90 }
  ];

  const monthlyBudget = budgetPerEmployee[0] * teamSize[0];
  const annualBudget = monthlyBudget * 12;
  const projectedROI = (budgetPerEmployee[0] * 0.35 * teamSize[0] * 12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/entreprise')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Simulateur QVT</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres de Simulation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Budget par employé/mois: {budgetPerEmployee[0]}€
                  </label>
                  <Slider
                    value={budgetPerEmployee}
                    onValueChange={setBudgetPerEmployee}
                    max={300}
                    min={50}
                    step={10}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Taille de l'équipe: {teamSize[0]} personnes
                  </label>
                  <Slider
                    value={teamSize}
                    onValueChange={setTeamSize}
                    max={100}
                    min={5}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Fréquence box/mois: {frequency[0]}
                  </label>
                  <Slider
                    value={frequency}
                    onValueChange={setFrequency}
                    max={4}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estimation Budgétaire</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Budget mensuel:</span>
                  <span className="font-bold text-primary">{monthlyBudget}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Budget annuel:</span>
                  <span className="font-bold text-secondary">{annualBudget}€</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI projeté:</span>
                  <span className="font-bold text-green-600">{projectedROI}€</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Score QVT Projeté</CardTitle>
                  <Target className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">8.7/10</div>
                  <p className="text-xs text-muted-foreground">+2.2 vs baseline</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Productivité</CardTitle>
                  <TrendingUp className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">+18%</div>
                  <p className="text-xs text-muted-foreground">Amélioration estimée</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
                  <Users className="h-4 w-4 text-accent-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent-foreground">90%</div>
                  <p className="text-xs text-muted-foreground">Taux de satisfaction</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Évolution Projetée sur 6 Mois</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={simulatedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="qvt" stroke="#005B5F" strokeWidth={2} name="Score QVT" />
                    <Line type="monotone" dataKey="productivity" stroke="#78A085" strokeWidth={2} name="Productivité" />
                    <Line type="monotone" dataKey="satisfaction" stroke="#8B5FBF" strokeWidth={2} name="Satisfaction" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommandations IA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800">✅ Configuration Optimale</h4>
                    <p className="text-green-700">Votre configuration actuelle est bien équilibrée pour votre équipe.</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800">💡 Suggestion</h4>
                    <p className="text-blue-700">Augmenter la fréquence à 3 box/mois pourrait améliorer l'engagement de +15%.</p>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-semibold text-orange-800">⚠️ Point d'attention</h4>
                    <p className="text-orange-700">Surveiller l'adoption des box lors des 2 premiers mois.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="flex-1" onClick={() => navigate('/entreprise/orders')}>
                <Target className="w-4 h-4 mr-2" />
                Lancer cette configuration
              </Button>
              <Button variant="outline" className="flex-1">
                <BarChart3 className="w-4 h-4 mr-2" />
                Sauvegarder simulation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
