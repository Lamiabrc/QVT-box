
import TeensHeader from "@/components/teens/TeensHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ZenGarden = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-300 to-teal-400">
            <TeensHeader />
            <div className="container mx-auto px-4 py-8">
                <Button onClick={() => navigate('/teens/metaverse')} variant="ghost" className="mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au Métaverse
                </Button>
                <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-emerald-800 flex items-center">
                            <span className="text-4xl mr-4">🌸</span> Jardin Zen
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-emerald-700">
                            Bienvenue dans le Jardin Zen. C'est un espace de méditation et de relaxation à partager avec ta famille.
                        </p>
                        <div className="mt-8 text-center">
                            <p className="text-gray-600">Les activités de méditation guidée et les sons de la nature seront bientôt disponibles ici.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ZenGarden;
