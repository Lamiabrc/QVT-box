
import TeensHeader from "@/components/teens/TeensHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, Music, Wind, Headphones, PlayCircle, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ZenGarden = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
            <TeensHeader />
            <div className="container mx-auto px-4 py-8">
                <Button onClick={() => navigate('/teens/metaverse')} variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-200">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au Métaverse
                </Button>
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-emerald-800 flex items-center">
                            <span className="text-4xl mr-4">🌸</span> Jardin Zen
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-emerald-700 mb-8">
                            Bienvenue dans le Jardin Zen. C'est un espace de méditation et de relaxation à partager avec ta famille. Trouve la paix intérieure avec nos outils de bien-être.
                        </p>

                        <Card className="mb-6 bg-emerald-50/50 border-emerald-200">
                            <CardHeader>
                                <CardTitle className="flex items-center text-emerald-700">
                                    <Headphones className="w-6 h-6 mr-3" />
                                    Musique d'Ambiance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-emerald-600 mb-4">
                                    Écoutez une sélection de musiques apaisantes pour vous aider à vous détendre.
                                </p>
                                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-inner">
                                    <Button size="icon" className="bg-emerald-500 hover:bg-emerald-600 rounded-full flex-shrink-0">
                                        <PlayCircle className="w-6 h-6" />
                                    </Button>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-emerald-800">Forêt Tranquille</p>
                                        <p className="text-sm text-emerald-600">Sons de la nature</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <Card className="bg-white/90 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-emerald-700 text-xl">
                                        <Music className="w-5 h-5 mr-2" />
                                        Méditations Guidées
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-emerald-600 mb-2">Suivez nos méditations pour calmer votre esprit.</p>
                                    <Button variant="link" className="text-emerald-700 px-0 font-semibold">Commencer (bientôt)</Button>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/90 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-emerald-700 text-xl">
                                        <Wind className="w-5 h-5 mr-2" />
                                        Sons de la Nature
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-emerald-600 mb-2">Plongez dans des paysages sonores naturels.</p>
                                    <Button variant="link" className="text-emerald-700 px-0 font-semibold">Écouter (bientôt)</Button>
                                </CardContent>
                            </Card>
                        </div>
                        <Alert className="mt-8 bg-emerald-100/50 border-emerald-300 text-emerald-800">
                            <Rocket className="h-4 w-4" />
                            <AlertTitle className="font-bold">En pleine croissance !</AlertTitle>
                            <AlertDescription>
                                Le Jardin Zen continue de fleurir. Nous ajouterons bientôt de nouvelles méditations guidées, des sons de la nature et des musiques d'ambiance pour une relaxation encore plus profonde.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ZenGarden;
