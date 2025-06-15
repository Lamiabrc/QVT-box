
import TeensHeader from "@/components/teens/TeensHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreativityStudio = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-400">
            <TeensHeader />
            <div className="container mx-auto px-4 py-8">
                <Button onClick={() => navigate('/teens/metaverse')} variant="ghost" className="mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au Métaverse
                </Button>
                <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-purple-800 flex items-center">
                            <span className="text-4xl mr-4">🎨</span> Studio Créatif
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-purple-700">
                            Bienvenue dans le Studio Créatif. Crée, dessine et exprime-toi librement.
                        </p>
                        <div className="mt-8 text-center">
                            <p className="text-gray-600">Les outils de dessin 3D et de musique collaborative seront bientôt disponibles ici.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CreativityStudio;
