import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import PlatformSelector from "@/components/platform/PlatformSelector";
import { PlatformProvider } from "@/hooks/usePlatform";

const Index = () => {
  return (
    <PlatformProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              QVT Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              La plateforme française de référence pour améliorer la qualité de vie au travail et en famille
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🤖 Intelligence Artificielle
              </span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                📊 Analytics Avancés
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                🇫🇷 Made in France
              </span>
            </div>
          </div>
        </section>

        {/* Platform Selector */}
        <section className="py-16">
          <PlatformSelector />
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Une technologie, deux univers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Notre plateforme s'adapte à vos besoins spécifiques grâce à un système de segments intelligent
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personnalisé</h3>
                <p className="text-gray-600">
                  Chaque univers propose une expérience sur-mesure selon votre contexte
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Évolutif</h3>
                <p className="text-gray-600">
                  Activation et désactivation des fonctionnalités selon vos besoins
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Performant</h3>
                <p className="text-gray-600">
                  Une seule infrastructure pour deux expériences utilisateur optimales
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PlatformProvider>
  );
};

export default Index;
