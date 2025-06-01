
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Calendar, ShoppingBag, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <ProtectedRoute requireSimulator={true}>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-gradient-to-br from-qvt-light to-white py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-qvt-primary">Tableau de Bord QVT</h1>
              <p className="text-qvt-muted mt-2">
                Suivez votre bien-être au travail et accédez à vos outils
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Score QVT</CardTitle>
                  <TrendingUp className="h-4 w-4 text-qvt-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.5/10</div>
                  <p className="text-xs text-muted-foreground">
                    +2% depuis hier
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Évaluations</CardTitle>
                  <Calendar className="h-4 w-4 text-qvt-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    Ce mois-ci
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Produits Commandés</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-qvt-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    En cours de livraison
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Progression</CardTitle>
                  <BarChart3 className="h-4 w-4 text-qvt-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground">
                    Objectifs atteints
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Actions Rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={() => navigate('/simulator')}
                    className="w-full qvt-gradient text-white"
                  >
                    Nouvelle Évaluation QVT
                  </Button>
                  <Button 
                    onClick={() => navigate('/shop')}
                    variant="outline" 
                    className="w-full"
                  >
                    Parcourir la Boutique
                  </Button>
                  <Button 
                    onClick={() => navigate('/orders')}
                    variant="outline" 
                    className="w-full"
                  >
                    Voir mes Commandes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommandations du Jour</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900">Pause Méditation</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Prenez 10 minutes pour une pause méditation guidée
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900">Hydratation</h4>
                      <p className="text-sm text-green-700 mt-1">
                        N'oubliez pas de boire de l'eau régulièrement
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
