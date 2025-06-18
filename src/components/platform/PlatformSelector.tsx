
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Users, ArrowRight, CheckCircle } from "lucide-react";
import { PLATFORM_CONFIGS } from "@/config/platform";
import { usePlatform } from "@/hooks/usePlatform";

const PlatformSelector = () => {
  const navigate = useNavigate();
  const { setSegment } = usePlatform();

  const handleSegmentSelection = (segment: 'enterprise' | 'family_teen') => {
    const config = PLATFORM_CONFIGS[segment];
    if (config.enabled) {
      setSegment(segment);
      navigate(config.routes.home);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Choisissez votre univers QVT
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une plateforme, deux univers adaptés à vos besoins spécifiques.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Enterprise Card */}
        <Card className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-primary/50 ${PLATFORM_CONFIGS.enterprise.theme.gradient} hover:from-blue-100 hover:to-indigo-100 ${!PLATFORM_CONFIGS.enterprise.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏢 {PLATFORM_CONFIGS.enterprise.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {PLATFORM_CONFIGS.enterprise.description}
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
                onClick={() => handleSegmentSelection('enterprise')}
                disabled={!PLATFORM_CONFIGS.enterprise.enabled}
              >
                Découvrir QVT Box
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Family Teen Card */}
        <Card className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-secondary/50 ${PLATFORM_CONFIGS.family_teen.theme.gradient} hover:from-pink-100 hover:to-purple-100 ${!PLATFORM_CONFIGS.family_teen.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👨‍👩‍👧‍👦 {PLATFORM_CONFIGS.family_teen.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {PLATFORM_CONFIGS.family_teen.description}
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
                onClick={() => handleSegmentSelection('family_teen')}
                disabled={!PLATFORM_CONFIGS.family_teen.enabled}
              >
                Découvrir QVTeen Box
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {(!PLATFORM_CONFIGS.enterprise.enabled || !PLATFORM_CONFIGS.family_teen.enabled) && (
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Certains univers sont temporairement indisponibles
          </p>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
