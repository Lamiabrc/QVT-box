
import TeensHeader from "@/components/teens/TeensHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SafeTalkCircle = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-red-300 to-rose-400">
            <TeensHeader />
            <div className="container mx-auto px-4 py-8">
                <Button onClick={() => navigate('/teens/metaverse')} variant="ghost" className="mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au Métaverse
                </Button>
                <Card className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-red-800 flex items-center">
                            <span className="text-4xl mr-4">💬</span> Cercle de Parole
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-red-700">
                            Bienvenue dans le Cercle de Parole. Un espace d'échange sécurisé et bienveillant.
                        </p>
                        <div className="mt-8 text-center">
                            <p className="text-gray-600">Les discussions guidées et le partage d'émotions seront bientôt disponibles ici.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SafeTalkCircle;
