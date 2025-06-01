
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Heart, Shield, Users, ArrowLeft } from "lucide-react";
import { useState } from "react";

const Auth = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'teen' | 'parent' | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [familyCode, setFamilyCode] = useState("");

  const handleAuth = () => {
    // TODO: Implement actual authentication with Supabase
    if (userType === 'teen') {
      navigate('/teens');
    } else {
      navigate('/teens/dashboard-parent');
    }
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-6">
              QVTeensbox
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Ton compagnon bien-être digital ! 🌟
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Qui es-tu ? 🤔
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Teen Option */}
              <Card 
                className="group bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setUserType('teen')}
              >
                <CardContent className="p-12 text-center">
                  <div className="text-8xl mb-6">🦄</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Je suis un Ado</h3>
                  <p className="text-gray-300 mb-6">
                    J'ai entre 13 et 18 ans et je veux prendre soin de mon bien-être, 
                    me connecter avec mes amis et ma famille !
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-pink-300">
                      <span className="text-lg mr-3">✨</span>
                      Check-ins quotidiens personnalisés
                    </div>
                    <div className="flex items-center text-purple-300">
                      <span className="text-lg mr-3">🎮</span>
                      Métaverse et activités fun
                    </div>
                    <div className="flex items-center text-cyan-300">
                      <span className="text-lg mr-3">🛍️</span>
                      Boutique et récompenses
                    </div>
                    <div className="flex items-center text-green-300">
                      <span className="text-lg mr-3">🔒</span>
                      Espace intimité sécurisé
                    </div>
                  </div>
                  <Button className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl text-lg py-3">
                    C'est moi ! 🚀
                  </Button>
                </CardContent>
              </Card>

              {/* Parent Option */}
              <Card 
                className="group bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setUserType('parent')}
              >
                <CardContent className="p-12 text-center">
                  <div className="text-8xl mb-6">👨‍👩‍👧‍👦</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Je suis un Parent</h3>
                  <p className="text-gray-300 mb-6">
                    Je veux accompagner mon ado dans son bien-être tout en respectant 
                    son intimité et son autonomie.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-blue-300">
                      <span className="text-lg mr-3">📊</span>
                      Suivi bien-être respectueux
                    </div>
                    <div className="flex items-center text-green-300">
                      <span className="text-lg mr-3">💬</span>
                      Communication bienveillante
                    </div>
                    <div className="flex items-center text-purple-300">
                      <span className="text-lg mr-3">🎁</span>
                      Gestion des box et cadeaux
                    </div>
                    <div className="flex items-center text-yellow-300">
                      <span className="text-lg mr-3">🛡️</span>
                      Vie privée protégée
                    </div>
                  </div>
                  <Button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl text-lg py-3">
                    C'est moi ! 👍
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              🌟 Pourquoi QVTeensbox ?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-black/20 rounded-2xl p-6">
                <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">Bien-être Authentique</h4>
                <p className="text-gray-300 text-sm">Un accompagnement sur-mesure pour chaque ado</p>
              </div>
              <div className="bg-black/20 rounded-2xl p-6">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">Respect & Confiance</h4>
                <p className="text-gray-300 text-sm">Vie privée protégée, communication transparente</p>
              </div>
              <div className="bg-black/20 rounded-2xl p-6">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">Lien Familial</h4>
                <p className="text-gray-300 text-sm">Renforce les relations parent-ado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setUserType(null)}
            className="mb-8 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au choix
          </Button>

          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">
                {userType === 'teen' ? '🦄 Espace Ado' : '👨‍👩‍👧‍👦 Espace Parent'}
              </CardTitle>
              <p className="text-gray-300 text-center">
                {isLogin ? 'Connecte-toi à ton compte' : 'Crée ton compte'}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Ton email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl"
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Ton mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl"
                />
              </div>

              {!isLogin && (
                <div>
                  <Input
                    type="password"
                    placeholder="Confirme ton mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl"
                  />
                </div>
              )}

              {!isLogin && userType === 'parent' && (
                <div>
                  <Input
                    type="text"
                    placeholder="Code famille (optionnel)"
                    value={familyCode}
                    onChange={(e) => setFamilyCode(e.target.value.toUpperCase())}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-2xl"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Si ton ado a déjà un compte, entre son code famille
                  </p>
                </div>
              )}

              <Button 
                onClick={handleAuth}
                className={`w-full rounded-2xl text-lg py-3 ${
                  userType === 'teen' 
                    ? 'bg-pink-500 hover:bg-pink-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isLogin ? 'Se connecter' : 'Créer mon compte'} 
                {userType === 'teen' ? ' 🚀' : ' 👍'}
              </Button>

              <div className="text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {isLogin ? "Pas encore de compte ? Inscris-toi" : "Déjà un compte ? Connecte-toi"}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
