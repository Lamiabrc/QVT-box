// src/pages/Shop.tsx
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import BoxCatalog from "@/components/BoxCatalog";
import { ShoppingCart, Heart, Gift, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<string[]>([]);

  // Exemple de produits physiques “entreprise” (prix +15 %)
  const physicalProducts = [
    {
      id: "savon-saponifie",
      name: "Savon Saponifié à Froid",
      price: "6.33€", // 5.50 * 1.15
      description: "Savon naturel 100% bio, fabriqué en Provence.",
      imageUrl:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop",
      brand: "Comme Avant",
      madeIn: "Fabriqué en Provence",
      tags: ["#bio", "#naturel", "#provence", "#madeinfrance"],
      link: "https://www.comme-avant.bio/produit-savon-saponifie-a-froid/",
    },
    {
      id: "bracelet-pierre-naturelle",
      name: "Bracelet Pierres Naturelles",
      price: "28.64€", // 24.90 * 1.15
      description:
        "Bracelet en améthyste et quartz rose, confection artisanale française.",
      imageUrl:
        "https://images.unsplash.com/photo-1530704634924-56220606f5c4?w=300&h=300&fit=crop",
      brand: "Atelier Pierres de France",
      madeIn: "Fabriqué en Île-de-France",
      tags: ["#pierres", "#artisanat", "#france", "#zen"],
      link: "https://efrancais.fr/product/bracelet-pierres-naturelles/",
    },
    // … ajoute autant de produits que nécessaire
  ];

  // Exemple de produits numériques “entreprise”
  const virtualProducts = [
    {
      id: "meditation-guidee",
      name: "Pack Méditations Guidées",
      price: "11.49€", // 9.99 * 1.15
      description: "Accès à 15 séances de méditation guidée en français.",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      brand: "Mindful France",
      duration: "3 mois d'accès",
      tags: ["#méditation", "#bienêtre", "#français", "#madeinfrance"],
      link: "https://www.efrancais.fr/product/pack-meditations-guidees/",
    },
    // … etc.
  ];

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
    alert(
      "Produit ajouté au panier ! 🛒✨\n\nIl sera livré avec ta prochaine box ou en express selon ton forfait."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Barre de navigation “entreprise” */}
      <Navigation userType="enterprise" onBack={() => navigate(-1)} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Boutique Made in France & Zen 🇫🇷✨
          </h1>
          <p className="text-gray-600 mb-4">
            Découvre des produits français pour ton bien-être, sélectionnés avec soin.
          </p>
          <div className="flex justify-center gap-2 flex-wrap mb-4">
            <Badge className="bg-pink-100 text-pink-700">
              🇫🇷 100 % Fab. Française
            </Badge>
            <Badge className="bg-green-100 text-green-700">♻️ Éco-resp.</Badge>
            <Badge className="bg-purple-100 text-purple-700">🌸 Zen & Bien-être</Badge>
            <Badge className="bg-blue-100 text-blue-700">🛒 Panier : {cart.length}</Badge>
          </div>

          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Info className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-blue-800">Comment ça marche ? 📦</span>
              </div>
              <p className="text-sm text-blue-700">
                Ajoute ton produit au panier : il sera livré avec ta prochaine box QVT/QVTeen ou en express selon ton forfait.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Section Box mensuelles */}
        <div className="mb-8">
          <BoxCatalog />
        </div>

        {/* Produits bonus physiques */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-orange-100 to-pink-100 border-2 border-orange-300 mb-6">
            <CardHeader>
              <CardTitle className="text-center flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-orange-600" />
                🛍️ Produits Bonus Physiques
              </CardTitle>
              <CardDescription className="text-center text-gray-700">
                Commande ces articles français à tout moment ; ils s’ajoutent à ta box !
              </CardDescription>
            </CardHeader>
          </Card>

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
                      <h3 className="font-bold text-lg mb-2 text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {product.description}
                      </p>
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
                          <Badge
                            key={idx}
                            className="bg-purple-100 text-purple-700 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xl text-green-600">
                          {product.price}
                        </span>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-pink-300 text-pink-600 hover:bg-pink-50"
                          >
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
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-300 text-blue-700 hover:bg-blue-50"
                            >
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
        </div>

        {/* Produits numériques */}
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
                      <h3 className="font-bold text-lg mb-2 text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {product.description}
                      </p>
                      <div className="flex gap-2 mb-3 flex-wrap">
                        <Badge variant="outline" className="text-xs bg-purple-50">
                          {product.brand}
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-700 text-xs">
                          {product.duration}
                        </Badge>
                      </div>
                      <div className="flex gap-1 mb-3 flex-wrap">
                        {product.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            className="bg-pink-100 text-pink-700 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xl text-purple-600">
                          {product.price}
                        </span>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-300 text-purple-600 hover:bg-purple-50"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
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
        </div>
      </div>
    </div>
  );
}
