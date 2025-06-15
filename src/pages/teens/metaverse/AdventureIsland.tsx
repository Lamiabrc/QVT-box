
import TeensHeader from "@/components/teens/TeensHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdventureIsland = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-300 to-sky-400">
            <TeensHeader />
            <div className="container mx-auto px-4 py-8">
                <Button onClick={() => navigate('/teens/metaverse')} variant="ghost" className="mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au Métaverse
                </Button>
                <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-cyan-800 flex items-center">
                            <span className="text-4xl mr-4">🏝️</span> Île Aventure
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-cyan-700 mb-8">
                            Bienvenue sur l'Île Aventure. Explore et joue à des mini-jeux avec tes proches.
                        </p>
                        <Alert className="mt-8 bg-cyan-100/50 border-cyan-300 text-cyan-800">
                            <Rocket className="h-4 w-4" />
                            <AlertTitle className="font-bold">Bientôt disponible !</AlertTitle>
                            <AlertDescription>
                                Prépare-toi pour l'aventure ! La chasse au trésor et les défis familiaux arrivent prochainement pour encore plus de fun.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdventureIsland;
