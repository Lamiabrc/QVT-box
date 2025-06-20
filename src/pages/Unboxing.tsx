
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Package, Camera, Share2, Heart, QrCode, Video, Users } from "lucide-react";
import { useState } from "react";
import QRCode from "react-qr-code";

const Unboxing = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const universe = searchParams.get('universe') || 'entreprise';
  const [videoRecorded, setVideoRecorded] = useState(false);
  const [shareEnabled, setShareEnabled] = useState(false);

  const shareUrl = `${window.location.origin}/unboxing/share/${universe}/${Date.now()}`;

  const handleRecordVideo = () => {
    // Simuler l'enregistrement vidéo
    setVideoRecorded(true);
  };

  const handleToggleShare = () => {
    setShareEnabled(!shareEnabled);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(`/${universe}`)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Expérience Unboxing</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Package className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Déballez votre Box QVT</h2>
            <p className="text-muted-foreground">
              Découvrez les surprises bien-être et partagez votre joie !
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Recording Section */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="w-5 w-5 mr-2" />
                  Votre Moment Unboxing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center relative">
                  {!videoRecorded ? (
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">Enregistrez votre réaction en 15 secondes</p>
                      <Button onClick={handleRecordVideo} className="bg-red-600 hover:bg-red-700">
                        <Video className="w-4 h-4 mr-2" />
                        Commencer l'enregistrement
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-green-600 font-semibold">Vidéo enregistrée avec succès !</p>
                    </div>
                  )}
                </div>

                {videoRecorded && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Partager avec {universe === 'famille' ? 'la famille' : 'les collègues'}</span>
                      </div>
                      <Button 
                        variant={shareEnabled ? "default" : "outline"}
                        size="sm"
                        onClick={handleToggleShare}
                      >
                        {shareEnabled ? 'Activé' : 'Désactivé'}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* QR Code Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <QrCode className="w-5 h-5 mr-2" />
                  Partage QR Code
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {videoRecorded && shareEnabled ? (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg inline-block">
                      <QRCode value={shareUrl} size={150} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scannez pour voir la vidéo d'unboxing
                    </p>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Copier le lien
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Enregistrez une vidéo et activez le partage pour générer le QR code
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Box Content */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Contenu de votre box</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Thé relaxant bio", description: "Mélange de camomille et lavande", type: "physique" },
                    { name: "Méditation guidée", description: "Accès 30 jours app Mindfulness", type: "virtuel" },
                    { name: "Bougie aromathérapie", description: "Parfum eucalyptus, 40h", type: "physique" },
                    { name: "Journal bien-être", description: "Guide de développement personnel", type: "physique" },
                    { name: "Playlist relaxation", description: "Musiques apaisantes personnalisées", type: "virtuel" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                      <Heart className="w-5 h-5 text-primary mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.type === 'virtuel' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">
                  Noter cette box ⭐
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partagez votre expérience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Votre retour nous aide à améliorer nos prochaines box
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-16 flex-col">
                      <Heart className="w-6 h-6 mb-1" />
                      <span className="text-xs">Témoignage</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <Share2 className="w-6 h-6 mb-1" />
                      <span className="text-xs">Réseaux sociaux</span>
                    </Button>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                    <p className="text-sm font-medium">🎁 Bonus fidélité</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      +50 points pour votre prochain unboxing !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unboxing;
