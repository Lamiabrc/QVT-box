
import TeensHeader from "@/components/teens/TeensHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingBubbles from "@/components/bubble/FloatingBubbles";

const SafeTalkCircle = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-red-300 to-rose-400 relative overflow-hidden">
            <FloatingBubbles />
            <TeensHeader />
            <div className="container mx-auto px-4 py-8 relative z-10">
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
                        <p className="text-lg text-red-700 mb-8">
                            Bienvenue dans le Cercle de Parole. Un espace d'échange sécurisé et bienveillant.
                        </p>
                        <Alert className="mt-8 bg-red-100/50 border-red-300 text-red-800">
                            <Rocket className="h-4 w-4" />
                            <AlertTitle className="font-bold">Bientôt disponible !</AlertTitle>
                            <AlertDescription>
                                De nouvelles manières de se connecter arrivent. Les discussions guidées et les outils de partage d'émotions seront bientôt là.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SafeTalkCircle;
