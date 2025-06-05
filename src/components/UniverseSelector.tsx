
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Users, ArrowRight, CheckCircle } from "lucide-react";

const UniverseSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Choisissez votre univers
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          QVT Box s'adapte à vos besoins spécifiques. 
          Sélectionnez l'univers qui vous correspond pour une expérience personnalisée.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Entreprise Card */}
        <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-primary/50 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏢 Espace Entreprise
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Solution complète pour les RH, managers et salariés. 
                Mesurez et améliorez la QVT grâce à l'IA.
              </p>

              <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>📊 Dashboard RH avec analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>📝 Questionnaires QVT intelligents</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>🎯 Recommandations IA personnalisées</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>📦 Box bien-être françaises</span>
                </li>
              </ul>

              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl shadow-lg" 
                onClick={() => navigate('/entreprise')}
              >
                Découvrir l'espace Entreprise
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Famille Card */}
        <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-secondary/50 bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👨‍👩‍👧‍👦 Espace Famille
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Accompagnement des adolescents et de leurs parents 
                vers un meilleur bien-être familial.
              </p>

              <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>🎮 Interface ludique pour ados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>🛡️ Dashboard parent sécurisé</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>📦 Box familiales adaptées</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>🔒 Respect total de la vie privée</span>
                </li>
              </ul>

              <Button 
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg" 
                onClick={() => navigate('/famille')}
              >
                Découvrir l'espace Famille
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UniverseSelector;
