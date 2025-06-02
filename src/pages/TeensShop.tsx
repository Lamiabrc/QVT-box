
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import BoxCatalog from "@/components/BoxCatalog";
import { ShoppingCart, Heart, Star, Package, Zap, Gift, Play, Eye, Download, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeensShop = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<string[]>([]);

  const physicalProducts = [
    {
      id: "journal-bien-etre",
      name: "Journal de Bien-être Manga",
      price: "19.99€",
      description: "Carnet français avec style manga kawaii",
      image: "📖",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
      brand: "Atelier Zen Paris",
      madeIn: "Fabriqué à Lyon",
      tags: ["#kawaii", "#manga", "#zen", "#français"]
    },
    {
      id: "bracelet-pierre",
      name: "Bracelet Pierres Naturelles Anime",
      price: "24.99€",
      description: "Améthyste et quartz rose, style anime",
      image: "💎",
      imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop",
      brand: "Bijoux Naturels",
      madeIn: "Artisan de Provence",
      tags: ["#anime", "#pierres", "#naturel", "#provence"]
    },
    {
      id: "tisane-relaxante",
      name: "Tisane Anti-Stress Sakura",
      price: "12.99€",
      description: "Mélange camomille, lavande française, arôme sakura",
      image: "🍃",
      imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop",
      brand: "Herboristerie Moderne",
      madeIn: "Cultivé en Drôme",
      tags: ["#sakura", "#bio", "#zen", "#france"]
    },
    {
      id: "huile-lavande",
      name: "Huile Essentielle Lavande Studio Ghibli",
      price: "15.99€",
      description: "100% pure, packaging style Ghibli",
      image: "🌿",
      imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop",
      brand: "Provence Nature",
      madeIn: "Distillé en Provence",
      tags: ["#ghibli", "#lavande", "#pure", "#provence"]
    },
    {
      id: "peluche-totoro",
      name: "Peluche Anti-Stress Totoro",
      price: "29.99€",
      description: "Peluche française inspirée Totoro pour câlins",
      image: "🧸",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      brand: "Douceur France",
      madeIn: "Confectionné en Normandie",
      tags: ["#totoro", "#peluche", "#antistress", "#kawaii"]
    },
    {
      id: "lampe-ambiance",
      name: "Lampe d'Ambiance Anime",
      price: "34.99€",
      description: "Lampe LED avec motifs manga pour chambre",
      image: "💡",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      brand: "Lumière Manga",
      madeIn: "Assemblé en France",
      tags: ["#led", "#manga", "#ambiance", "#chambre"]
    }
  ];

  const virtualProducts = [
    {
      id: "meditation-pack",
      name: "Pack Méditations Guidées Anime",
      price: "9.99€",
      description: "15 séances avec voix française style anime",
      image: "🧘‍♀️",
      videoUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      brand: "Mindful France",
      duration: "3 mois d'accès",
      tags: ["#méditation", "#anime", "#voix", "#zen"]
    },
    {
      id: "yoga-videos",
      name: "Cours Yoga Anti-Stress Manga",
      price: "14.99€",
      description: "Professeure française, animations manga",
      image: "🧘‍♂️",
      videoUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop",
      brand: "Yoga Doux",
      duration: "10 séances HD",
      tags: ["#yoga", "#manga", "#antistress", "#hd"]
    },
    {
      id: "playlist-relaxation",
      name: "Playlist Relaxation Studio Ghibli",
      price: "4.99€",
      description: "Musiques créées par compositeurs français style Ghibli",
      image: "🎵",
      videoUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
      brand: "Harmonie Sonore",
      duration: "50 titres exclusifs",
      tags: ["#ghibli", "#musique", "#relaxation", "#exclusif"]
    },
    {
      id: "wallpaper-pack",
      name: "Pack Fonds d'Écran Zen Anime",
      price: "2.99€",
      description: "100 fonds d'écran HD style anime zen",
      image: "🎨",
      videoUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      brand: "Art Digital France",
      duration: "100 designs HD",
      tags: ["#wallpaper", "#anime", "#zen", "#hd"]
    },
    {
      id: "manga-stories",
      name: "Histoires Manga Bien-être",
      price: "7.99€",
      description: "Mangas français sur la santé mentale des ados",
      image: "📚",
      videoUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      brand: "Manga Thérapie",
      duration: "12 chapitres",
      tags: ["#manga", "#thérapie", "#ados", "#français"]
    }
  ];

  const rewards = [
    { name: "Badge Otaku Master", icon: "🏆", points: 500, image: "🎌" },
    { name: "Avatar Kawaii Premium", icon: "✨", points: 300, image: "😊" },
    { name: "Collection Fonds Ghibli", icon: "🎨", points: 200, image: "🌸" },
    { name: "Stickers Emoji Manga", icon: "😊", points: 150, image: "💕" },
    { name: "Playlist Lofi Exclusive", icon: "🎵", points: 400, image: "🎧" },
    { name: "Thème Totoro Interface", icon: "🎯", points: 350, image: "🐱" }
  ];

  const trendingTags = [
    "#kawaii", "#anime", "#manga", "#zen", "#ghibli", "#totoro", "#sakura", 
    "#lofi", "#aesthetic", "#cozy", "#mindfulness", "#selfcare", "#chill", 
    "#pastel", "#soft", "#dreamy", "#peaceful", "#healing", "#comfort"
  ];

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
    alert("Produit ajouté au panier ! 🛒✨\n\nCe produit sera livré avec ta prochaine box mensuelle ou en livraison express selon ton forfait !");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation userType="teen" onBack={() => navigate('/')} />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Boutique Anime & Zen 🇫🇷✨
          </h1>
          <p className="text-gray-600 mb-4">Tes box mensuelles + produits bonus pour ton bien-être, style manga kawaii !</p>
          <div className="flex justify-center gap-2 flex-wrap mb-4">
            <Badge className="bg-pink-100 text-pink-700">🇫🇷 100% Made in France</Badge>
            <Badge className="bg-purple-100 text-purple-700">🌸 Style Anime/Manga</Badge>
            <Badge className="bg-blue-100 text-blue-700">♻️ Éco-responsable</Badge>
            <Badge className="bg-green-100 text-green-700">🛒 Panier: {cart.length}</Badge>
          </div>
          
          {/* Information importante sur le système */}
          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Info className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-blue-800">Comment ça marche ? 📦</span>
              </div>
              <p className="text-sm text-blue-700">
                Tu reçois <strong>automatiquement 1 box personnalisée par mois</strong> selon ton forfait. 
                En plus, tu peux commander des produits bonus ici qui seront ajoutés à ta box ou livrés séparément !
              </p>
            </CardContent>
          </Card>
          
          {/* Tags tendances */}
          <div className="bg-white/70 rounded-xl p-4 mb-6">
            <h3 className="font-bold text-gray-700 mb-3">🔥 Tags Tendances</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {trendingTags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-pink-100 transition-colors text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Section Box Mensuelles */}
        <div className="mb-8">
          <BoxCatalog />
        </div>

        {/* Section produits bonus */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-orange-100 to-pink-100 border-2 border-orange-300">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                <ShoppingCart className="h-6 w-6 text-orange-600" />
                🛍️ Produits Bonus - Commande à tout moment !
              </CardTitle>
              <CardDescription className="text-center text-gray-700">
                Ces produits s'ajoutent à tes box mensuelles ! Commande quand tu veux, selon ton forfait tu peux même avoir la livraison express ⚡
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Récompenses disponibles */}
        <Card className="mb-8 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 border-2 border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center">
              <Gift className="h-6 w-6 text-pink-600" />
              🎁 Tes Récompenses Kawaii Disponibles ✨
            </CardTitle>
            <CardDescription className="text-center text-gray-700">
              Utilise tes Energy Points pour débloquer des cadeaux anime exclusifs !
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {rewards.map((reward, index) => (
                <div key={index} className="bg-white/80 rounded-xl p-4 text-center hover:bg-white transition-colors cursor-pointer border-2 border-pink-200 hover:border-pink-300">
                  <div className="text-3xl mb-2">{reward.image}</div>
                  <div className="text-xl mb-1">{reward.icon}</div>
                  <p className="font-medium text-sm mb-2">{reward.name}</p>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">
                    {reward.points} points
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Produits Physiques */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Package className="h-7 w-7 text-pink-600" />
              🎁 Produits Physiques Kawaii
            </h2>
            <div className="space-y-6">
              {physicalProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-xl transition-all border-2 border-pink-200 hover:border-pink-300 bg-white/90">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-24 h-24 object-cover rounded-xl border-2 border-pink-200"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <div className="flex gap-2 mb-3 flex-wrap">
                          <Badge variant="outline" className="text-xs bg-pink-50">{product.brand}</Badge>
                          <Badge className="bg-blue-100 text-blue-700 text-xs">{product.madeIn}</Badge>
                        </div>
                        <div className="flex gap-1 mb-3 flex-wrap">
                          {product.tags.map((tag, idx) => (
                            <Badge key={idx} className="bg-purple-100 text-purple-700 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xl text-green-600">{product.price}</span>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => addToCart(product.id)}
                              className="bg-pink-500 hover:bg-pink-600 text-white"
                            >
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Ajouter
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Produits Virtuels */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Zap className="h-7 w-7 text-purple-600" />
              ⚡ Contenu Numérique Anime
            </h2>
            <div className="space-y-6">
              {virtualProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-xl transition-all border-2 border-purple-200 hover:border-purple-300 bg-white/90">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 relative">
                        <img 
                          src={product.videoUrl} 
                          alt={product.name}
                          className="w-24 h-24 object-cover rounded-xl border-2 border-purple-200"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-8 w-8 text-white bg-purple-600 rounded-full p-2" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <div className="flex gap-2 mb-3 flex-wrap">
                          <Badge variant="outline" className="text-xs bg-purple-50">{product.brand}</Badge>
                          <Badge className="bg-purple-100 text-purple-700 text-xs">{product.duration}</Badge>
                        </div>
                        <div className="flex gap-1 mb-3 flex-wrap">
                          {product.tags.map((tag, idx) => (
                            <Badge key={idx} className="bg-pink-100 text-pink-700 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xl text-purple-600">{product.price}</span>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                              <Eye className="h-4 w-4 mr-1" />
                              Aperçu
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => addToCart(product.id)}
                              className="bg-purple-600 hover:bg-purple-700 text-white"
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Acheter
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Avis clients avec avatars manga */}
        <Card className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200">
          <CardHeader>
            <CardTitle className="text-center">🌟 Avis de notre communauté kawaii 💕</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 p-6 rounded-xl border border-pink-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl">
                    😊
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <span className="font-medium">Marie, 16 ans</span>
                  </div>
                </div>
                <p className="text-sm">"Le journal manga m'aide vraiment à gérer mon stress ! Le style kawaii me fait sourire tous les jours 🌸"</p>
                <div className="flex gap-1 mt-2">
                  <Badge className="bg-pink-100 text-pink-700 text-xs">#kawaii</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">#zen</Badge>
                </div>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    😎
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <span className="font-medium">Lucas, 17 ans</span>
                  </div>
                </div>
                <p className="text-sm">"Les méditations avec voix anime sont parfaites avant les examens ! Plus jamais stressé ⚡"</p>
                <div className="flex gap-1 mt-2">
                  <Badge className="bg-blue-100 text-blue-700 text-xs">#anime</Badge>
                  <Badge className="bg-green-100 text-green-700 text-xs">#zen</Badge>
                </div>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">
                    🥰
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(4)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <span className="font-medium">Léa, 15 ans</span>
                  </div>
                </div>
                <p className="text-sm">"Qualité française + style manga = parfait ! Ma peluche Totoro est mon anti-stress préféré 🧸"</p>
                <div className="flex gap-1 mt-2">
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs">#totoro</Badge>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">#france</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeensShop;
