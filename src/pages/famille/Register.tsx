
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus, Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FamilyRole } from '@/types/qvtbox';
import { motion } from 'framer-motion';

const allRoles: { id: FamilyRole; label: string; emoji: string; description: string; color: string; }[] = [
    {
      id: 'parent_solo' as FamilyRole,
      label: 'Parent Solo',
      emoji: '🦸',
      description: 'Je gère le quotidien en solo.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'parent_en_couple' as FamilyRole,
      label: 'Parents en couple',
      emoji: '👩‍❤️‍👨',
      description: 'Nous sommes deux pour élever nos enfants.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'parent_lgbt' as FamilyRole,
      label: 'Parent(s) LGBT+',
      emoji: '🌈',
      description: 'Je fais partie d\'une famille arc-en-ciel.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'enfant_ado' as FamilyRole,
      label: 'Enfant/Ado',
      emoji: '🧑‍🎓',
      description: 'J\'exprime mes émotions.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'grand_parent' as FamilyRole,
      label: 'Grand-parent',
      emoji: '👴👵',
      description: 'J\'accompagne ma famille.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      id: 'famille_recomposee' as FamilyRole,
      label: 'Famille Recomposée',
      emoji: '🧩',
      description: 'Nous créons de nouveaux liens.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      id: 'autre_situation' as FamilyRole,
      label: 'Autre situation',
      emoji: '👤',
      description: 'Ma situation est unique.',
      color: 'from-gray-400 to-gray-600'
    }
];

const parentRoles = allRoles.filter(r => r.id !== 'enfant_ado');

const FamilyRegister = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState<FamilyRole | null>(null);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        acceptTerms: false,
    });
    
    const handleNextStep = () => {
        if (selectedRole) {
            setStep(2);
        } else {
            toast({
                title: "Erreur",
                description: "Veuillez sélectionner un rôle pour continuer.",
                variant: "destructive"
            });
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            toast({
                title: "Erreur",
                description: "Les mots de passe ne correspondent pas.",
                variant: "destructive"
            });
            return;
        }

        if (!formData.acceptTerms) {
            toast({
                title: "Erreur",
                description: "Vous devez accepter les conditions d'utilisation.",
                variant: "destructive"
            });
            return;
        }
        
        console.log("New family registration:", { ...formData, role: selectedRole });

        toast({
            title: "Inscription réussie",
            description: `Bienvenue dans votre espace famille !`,
        });
        
        navigate('/teens/parent-dashboard');
    };

    const roleInfo = {
        title: 'Inscription Famille',
        description: 'Créez votre espace famille coloré',
        gradient: 'from-blue-500 to-cyan-500'
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-20 h-20 bg-red-500 rounded-2xl animate-bounce transform rotate-12"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-2xl animate-pulse transform -rotate-45"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500 rounded-2xl animate-spin-slow transform rotate-45"></div>
                <div className="absolute bottom-40 right-10 w-18 h-18 bg-purple-500 rounded-2xl animate-bounce transform -rotate-12"></div>
                <div className="absolute top-60 left-1/2 w-14 h-14 bg-orange-500 rounded-2xl animate-pulse transform rotate-12"></div>
            </div>

            <header className="relative z-10 border-b border-white/30 bg-white/20 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button 
                            variant="ghost" 
                            onClick={() => step === 1 ? navigate('/teens') : setStep(1)}
                            className="flex items-center space-x-2 text-white hover:bg-white/20 font-semibold"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Retour</span>
                        </Button>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                                <Palette className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-xl font-black text-white">QV FAMILLE BOX</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 relative z-10">
                {step === 1 && (
                    <Card className="bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl rounded-3xl max-w-4xl mx-auto">
                        <CardHeader className="text-center p-8">
                            <CardTitle className="text-3xl font-black text-white mb-2">
                                Quelle est votre situation familiale ?
                            </CardTitle>
                            <p className="text-white font-semibold text-lg">Choisissez le rôle qui vous correspond le mieux pour commencer.</p>
                        </CardHeader>
                        <CardContent className="p-8 pt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {parentRoles.map((role) => (
                                    <motion.div
                                        key={role.id}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`cursor-pointer transition-all duration-300 rounded-2xl ${
                                            selectedRole === role.id
                                            ? 'ring-4 ring-pink-300 ring-opacity-60'
                                            : 'hover:shadow-lg'
                                        }`}
                                        onClick={() => setSelectedRole(role.id)}
                                    >
                                        <Card className="h-full bg-white/30 text-white border-2 border-transparent hover:border-white/50 rounded-2xl">
                                            <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                                                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${role.color} flex items-center justify-center mx-auto mb-4 text-4xl`}>
                                                    {role.emoji}
                                                </div>
                                                <h3 className="text-xl font-semibold mb-2">{role.label}</h3>
                                                <p className="text-sm">{role.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="text-center pt-8">
                                <Button
                                    onClick={handleNextStep}
                                    disabled={!selectedRole}
                                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-12 py-4 text-white font-bold text-lg rounded-2xl transform hover:scale-105 transition-transform"
                                >
                                    Continuer avec ce rôle
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {step === 2 && (
                    <div className="max-w-md mx-auto">
                        <Card className="bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl rounded-3xl">
                            <CardHeader className="text-center">
                                <div className={`w-20 h-20 bg-gradient-to-br ${roleInfo.gradient} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg transform rotate-6`}>
                                    <UserPlus className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-3xl font-black text-white mb-2">
                                    {roleInfo.title}
                                </CardTitle>
                                <p className="text-white font-semibold text-lg">{roleInfo.description}</p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-white font-bold">Prénom</Label>
                                            <Input id="firstName" type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl" placeholder="Prénom" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-white font-bold">Nom</Label>
                                            <Input id="lastName" type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl" placeholder="Nom" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-white font-bold">Email</Label>
                                        <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl" placeholder="ton@email.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-white font-bold">Mot de passe</Label>
                                        <Input id="password" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl" placeholder="••••••••" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword" className="text-white font-bold">Confirmer le mot de passe</Label>
                                        <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl" placeholder="••••••••" required />
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Checkbox id="terms" checked={formData.acceptTerms} onCheckedChange={(checked) => setFormData({...formData, acceptTerms: checked as boolean})} className="border-white/30 bg-white/20" />
                                        <label htmlFor="terms" className="text-white font-semibold">
                                            J'accepte les conditions d'utilisation et la politique de confidentialité
                                        </label>
                                    </div>
                                    <Button type="submit" className={`w-full bg-gradient-to-r ${roleInfo.gradient} hover:shadow-2xl text-white font-black py-4 rounded-2xl text-lg transform hover:scale-105 transition-all`}>
                                        🚀 Créer mon compte famille
                                    </Button>
                                    <div className="text-center">
                                        <div className="text-white font-semibold">
                                            Déjà un compte ?{' '}
                                            <Button variant="link" onClick={() => navigate(`/teens/login?role=parent`)} className="text-yellow-300 hover:text-yellow-100 p-0 font-black">
                                                Se connecter
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FamilyRegister;
