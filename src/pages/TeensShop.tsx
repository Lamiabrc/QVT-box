
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Star, Heart, Gift, Crown, Sparkles } from "lucide-react";

const TeensShop = () => {
  const navigate = useNavigate();

  const shopCategories = [
    {
      title: "🎁 Box Personnalisation",
      description: "Customise ta box mensuelle",
      items: [
        { name: "Thème Artistique", price: 50, image: "🎨", popular: true },
        { name: "Thème Gaming", price: 50, image: "🎮", popular: false },
        { name: "Thème Beauté", price: 50, image: "💄", popular: true },
        { name: "Thème Sport", price: 50, image: "⚽", popular: false }
      ]
    },
    {
      title: "👑 Avatars Premium",
      description: "Styles exclusifs pour ton avatar",
      items: [
        { name: "Style Streetwear", price: 30, image: "👕", popular: true },
        { name: "Look Kawaii", price: 25, image: "🦄", popular: false },
        { name: "Mode Vintage", price: 35, image: "🕶️", popular: false },
        { name: "Style Futuriste", price: 40, image: "🤖", popular: true }
      ]
    },
    {
      title: "🎉 Cadeaux Occasions",
      description: "Pour toutes les célébrations",
      items: [
        { name: "Anniversaire Mega", price: 100, image: "🎂", popular: true },
        { name: "Réussite Examen", price: 75, image: "🎓", popular: false },
        { name: "Fête des Mères", price: 60, image: "💐", popular: true },
        { name: "Saint-Valentin", price: 45, image: "💝", popular: false }
      ]
    },
    {
      title: "✨ Accessoires Virtuels",
      description: "Décore ton espace virtuel",
      items: [
        { name: "Chambre Cocooning", price: 80, image: "🛏️", popular: false },
        { name: "Studio Musique", price: 120, image: "🎵", popular: true },
        { name: "Jardin Zen", price: 90, image: "🌸", popular: false },
        { name: "Gaming Setup", price: 150, image: "⚡", popular: true }
      ]
    }
  ];

  const userPoints = 847;
  const wishlist = ["Style Streetwear", "Anniversaire Mega", "Studio Musique"];

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
              <ShoppingBag className="w-6 h-6 text-pink-400" />
              <h1 className="text-2xl font-black text-white">BOUTIQUE</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-6">
            🛍️ TEENS SHOP
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Dépense tes points bien-être et personnalise ton expérience ! ✨
          </p>
          
          {/* Points Display */}
          <Card className="max-w-md mx-auto bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-400/30 mb-8">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-black text-yellow-400 mb-2">{userPoints} Points</div>
              <p className="text-gray-300">Disponibles pour tes achats</p>
            </CardContent>
          </Card>
        </div>

        {/* Shop Categories */}
        {shopCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
              <p className="text-gray-300">{category.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item, index) => (
                <Card 
                  key={index} 
                  className="group bg-black/40 backdrop-blur-sm border-2 border-white/20 hover:border-pink-400/60 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative"
                >
                  {item.popular && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <Badge className="bg-pink-500 text-white px-3 py-1 rounded-full">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Populaire
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{item.image}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                    
                    <div className="flex items-center justify-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-xl font-bold text-yellow-400">{item.price}</span>
                      <span className="text-gray-300 ml-1">points</span>
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        className={`w-full rounded-2xl ${
                          userPoints >= item.price 
                            ? 'bg-pink-500 hover:bg-pink-600' 
                            : 'bg-gray-600 cursor-not-allowed'
                        }`}
                        disabled={userPoints < item.price}
                      >
                        {userPoints >= item.price ? 'Acheter' : 'Pas assez de points'}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className={`w-full rounded-2xl border-gray-400 hover:bg-white/10 ${
                          wishlist.includes(item.name) ? 'text-pink-400 border-pink-400' : 'text-white'
                        }`}
                      >
                        <Heart className={`w-4 h-4 mr-2 ${wishlist.includes(item.name) ? 'fill-current' : ''}`} />
                        {wishlist.includes(item.name) ? 'Dans la wishlist' : 'Ajouter à la wishlist'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Wishlist Section */}
        <Card className="mb-8 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-2 border-pink-400/30">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Heart className="w-6 h-6 mr-3 text-pink-400" />
              💖 Ma Wishlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {wishlist.map((item, index) => (
                <div key={index} className="bg-black/20 rounded-2xl p-4 text-center">
                  <h4 className="font-bold text-white mb-2">{item}</h4>
                  <Button variant="outline" className="w-full text-pink-400 border-pink-400 hover:bg-pink-400/10 rounded-2xl">
                    Voir l'article
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Special Offers */}
        <Card className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border-2 border-purple-400/30">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Gift className="w-6 h-6 mr-3 text-purple-400" />
              🎁 Offres Spéciales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/20 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-white mb-2">Pack Anniversaire</h3>
                <p className="text-gray-300 mb-4">Box spéciale + avatar + décoration</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="line-through text-gray-500 mr-2">200 points</span>
                  <span className="text-2xl font-bold text-green-400">150 points</span>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 rounded-2xl">
                  Offre limitée !
                </Button>
              </div>
              
              <div className="bg-black/20 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Flash Sale</h3>
                <p className="text-gray-300 mb-4">-30% sur tous les avatars</p>
                <div className="text-lg text-yellow-400 mb-4">Encore 2h 15min</div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 rounded-2xl">
                  Profiter maintenant
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeensShop;
