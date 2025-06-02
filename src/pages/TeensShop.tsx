import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import BoxCatalog from "@/components/BoxCatalog";
import { ShoppingCart, Heart, Star, Gift, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeensShop = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<string[]>([]);

  // Produits physiques Made in France avec prix augmentés de 15 %
  const physicalProducts = [
    {
      id: "savon-saponifie",
      name: "Savon Saponifié à Froid",
      price: "6.33€", // 5.50 * 1.15 = 6.325 → 6.33
      description: "Savon naturel 100% bio, fabriqué en Provence.",
      imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop",
      brand: "Comme Avant",
      madeIn: "Fabriqué en Provence",
      tags: ["#bio", "#naturel", "#provence", "#madeinfrance"],
      link: "https://www.comme-avant.bio/produit-savon-saponifie-a-froid/"
    },
    {
      id: "bracelet-pierre-naturelle",
      name: "Bracelet Pierres Naturelles",
      price: "28.64€", // 24.90 * 1.15 = 28.635 → 28.64
      description: "Bracelet en améthyste et quartz rose, confection artisanale française.",
      imageUrl: "https://images.unsplash.com/photo-1530704634924-56220606f5c4?w=300&h=300&fit=crop",
      brand: "Atelier Pierres de France",
      madeIn: "Fabriqué en Île-de-France",
      tags: ["#pierres", "#artisanat", "#france", "#zen"],
      link: "https://efrancais.fr/product/bracelet-pierres-naturelles/"
    },
    {
      id: "tisane-relax-sakura",
      name: "Tisane Relax Sakura",
      price: "13.80€", // 12.00 * 1.15 = 13.8 → 13.80
      description: "Infusion camomille & lavande bio, arôme de fleurs de cerisier.",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      brand: "Herboristerie Moderne",
      madeIn: "Cultivé en Drôme",
      tags: ["#tisane", "#bio", "#zen", "#madeinfrance"],
      link: "https://www.lesitedumadeinfrance.fr/produit/tisane-relax-sakura/"
    },
    {
      id: "huile-lavande-provence",
      name: "Huile Essentielle de Lavande",
      price: "18.29€", // 15.90 * 1.15 = 18.285 → 18.29
      description: "100% pure, distillée en Provence, apaisante et relaxante.",
      imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop",
      brand: "Provence Nature",
      madeIn: "Distillé en Provence",
      tags: ["#lavande", "#pure", "#provence", "#madeinfrance"],
      link: "https://www.lesitedumadeinfrance.fr/produit/huile-essentielle-lavande/"
    },
    {
      id: "lampe-ambiance-led",
      name: "Lampe d'Ambiance LED",
      price: "40.14€", // 34.90 * 1.15 = 40.135 → 40.14
      description: "Lampe artisanale en bois et verre fabriquée en région Auvergne-Rhône-Alpes.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      brand: "Luminaire France",
      madeIn: "Conçue en Auvergne-Rhône-Alpes",
      tags: ["#led", "#artisanat", "#france", "#zen"],
      link: "https://www.lesitedumadeinfrance.fr/produit/lampe-ambiance-led/"
    }
  ];

  // Produits numériques / services Made in France avec prix augmentés de 15 %
  const virtualProducts = [
    {
      id: "meditation-guidée",
      name: "Pack Méditations Guidées",
      price: "11.49€", // 9.99 * 1.15 = 11.4885 → 11.49
      description: "Accès à 15 séances de méditation guidée en français.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      brand: "Mindful France",
      duration: "3 mois d'accès",
      tags: ["#méditation", "#bienêtre", "#français", "#madeinfrance"],
      link: "https://www.efrancais.fr/product/pack-meditations-guidees/"
    },
    {
      id: "yoga-anti-stress",
      name: "Cours de Yoga Anti-Stress",
      price: "17.24€", // 14.99 * 1.15 = 17.2385 → 17.24
      description: "10 séances de yoga vidéo, professeur français, accessible en ligne.",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop",
      brand: "Yoga Doux",
      duration: "10 séances HD",
      tags: ["#yoga", "#zen", "#madeinfrance", "#bienêtre"],
      link: "https://www.efrancais.fr/product/cours-yoga-anti-stress/"
    },
    {
      id: "playlist-lofi",
      name: "Playlist Relaxation Lofi",
      price: "5.74€", // 4.99 * 1.15 = 5.7385 → 5.74
      description: "50 titres exclusifs créés par compositeurs français.",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
      brand: "Harmonie Sonore",
      duration: "Accès à vie",
      tags: ["#lofi", "#musique", "#relaxation", "#madeinfrance"],
      link: "https://www.lesitedumadeinfrance.fr/produit/playlist-lofi-relax/"
    },
    {
      id: "fonds-ecran-zen",
      name: "Pack Fonds d'Écran Zen",
      price: "3.44€", // 2.99 * 1.15 = 3.4385 → 3.44
      description: "100 designs HD réalisés par artistes français.",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      brand: "Art Digital France",
      duration: "100 wallpapers HD",
      tags: ["#wallpaper", "#zen", "#madeinfrance", "#hd"],
      link: "https://www.lesitedumadeinfrance.fr/produit/pack-fonds-ecran-zen/"
    }
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
            Boutique Made in France & Zen 🇫🇷✨
          </h1>
          <p className="text-gray-600 mb-4">
            Découvre des produits français pour ton bien-être, sélectionnés avec soin.
          </p>
          <div className="flex justify-center gap-2 flex-wrap mb-4">
            <Badge className="bg-pink-100 text-pink-700">🇫🇷 100% Fabrication Française</Badge>
            <Badge className="bg-green-100 text-green-700">♻️ Éco-responsable</Badge>
            <Badge className="bg-purple-100 text-purple-700">🌸 Zen & Bien-être</Badge>
            <Badge className="bg-blue-100 text-blue-700">🛒 Panier: {cart.length}</Badge>
          </div>

          {/* Info système */}
          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Info className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-blue-800">Comment ça marche ? 📦</span>
              </div>
              <p className="text-sm text-blue-700">
                Tu ajoutes ton produit au panier et il sera livré avec ta prochaine box QVT/QVTeen ou en express selon ton forfait.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Section Box Mensuelles (inchangée) */}
        <div className="mb-8">
          <BoxCatalog />
        </div>

        {/* Section Produits Bonus Physiques */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-orange-100 to-pink-100 border-2 border-orange-300">
            <CardHeader>
              <CardTitle className="text-center flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-orange-600" />
                🛍️ Produits Bonus Physiques
              </CardTitle>
              <CardDescription className="text-center text-gray-700">
                Ces articles français se commandent à tout moment et s’ajoutent à ta box !
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Produits Physiques */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {physicalProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-xl transition-all border-2 border-pink-200 hover:border-pink-300 bg-white/90"
            >
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
                      <Badge variant="outline" className="text-xs bg-pink-50">
                        {product.brand}
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">
                        {product.madeIn}
                      </Badge>
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
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                            Voir le produit
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Produits Virtuels / Contenu Numérique */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 mb-6">
            <CardHeader>
              <CardTitle className="text-center flex items-center gap-2">
                <Gift className="h-6 w-6 text-purple-600" />
                🎁 Contenu Numérique Made in France
              </CardTitle>
              <CardDescription className="text-center text-gray-700">
                Séances et ressources digitales pour ton bien-être, créés en France.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {virtualProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-xl transition-all border-2 border-purple-200 hover:border-purple-300 bg-white/90"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-xl border-2 border-purple-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <Badge variant="outline" className="text-xs bg-purple-50">
                        {product.brand}
                      </Badge>
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
                          <Heart className="h-4 w-4" />
                        </Button>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                            Acheter
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Avis clients (inchangé) */}
        <Card className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200">
          <CardHeader>
            <CardTitle className="text-center">🌟 Avis de notre communauté 💕</CardTitle>
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
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">Marie, 16 ans</span>
                  </div>
                </div>
                <p className="text-sm">
                  "La tisane Relax Sakura de l’Herboristerie Moderne m’aide à me détendre chaque soir."
                </p>
                <div className="flex gap-1 mt-2">
                  <Badge className="bg-pink-100 text-pink-700 text-xs">#tisane</Badge>
                  <Badge className="bg-green-100 text-green-700 text-xs">#zen</Badge>
                </div>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    😎
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">Lucas, 17 ans</span>
                  </div>
                </div>
                <p className="text-sm">
                  "Les séances de méditation guidée sont parfaites pour mes révisions. Merci Mindful France !"
                </p>
                <div className="flex gap-1 mt-2">
                  <Badge className="bg-blue-100 text-blue-700 text-xs">#méditation</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">#madeinfrance</Badge>
                </div>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">
                    🥰
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">Léa, 15 ans</span>
                  </div>
                </div>
                <p className="text-sm">
                  "Je porte mon bracelet Atelier Pierres de France tous les jours, il est très apaisant."
                </p>
                <div className="flex gap-1 mt-2">
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs">#bracelet</Badge>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">#artisanat</Badge>
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
