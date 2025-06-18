
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

function TeensQuestionnaire() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const now = new Date();

  const [frequency, setFrequency] = useState(
    () => localStorage.getItem('teens_frequency') || 'daily'
  );
  const [questionsConfig, setQuestionsConfig] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [comments, setComments] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingQuestions, setLoadingQuestions] = useState(false);

  // Save frequency and reset when it changes
  useEffect(() => {
    localStorage.setItem('teens_frequency', frequency);
    setCurrentStep(0);
    setResponses({});
    setComments({});
    fetchDynamicQuestions();
  }, [frequency]);

  // Fetch dynamic questions from backend ChatGPT endpoint
  async function fetchDynamicQuestions() {
    setLoadingQuestions(true);
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({ 
          title: 'Erreur authentification', 
          description: 'Vous devez être connecté pour accéder aux questions.', 
          variant: 'destructive' 
        });
        setLoadingQuestions(false);
        return;
      }

      // Get last entry for user from Supabase
      const { data: lastEntry, error: fetchError } = await supabase
        .from('teen_assessments')
        .select('responses')
        .eq('user_id', user.id)
        .order('date', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (fetchError) {
        console.log('Error fetching last responses:', fetchError);
      }

      const lastResponses = lastEntry?.responses || {};

      // For now, use mock questions since we don't have the ChatGPT endpoint
      const mockQuestions = [
        {
          id: 'mood',
          question: 'Comment te sens-tu aujourd\'hui ?',
          emoji: '😊',
          options: [
            { value: '1', emoji: '😢', label: 'Très triste' },
            { value: '2', emoji: '😔', label: 'Triste' },
            { value: '3', emoji: '😐', label: 'Neutre' },
            { value: '4', emoji: '😊', label: 'Content' },
            { value: '5', emoji: '😄', label: 'Très content' }
          ]
        },
        {
          id: 'stress',
          question: 'Quel est ton niveau de stress ?',
          emoji: '😰',
          options: [
            { value: '1', emoji: '😌', label: 'Très détendu' },
            { value: '2', emoji: '🙂', label: 'Détendu' },
            { value: '3', emoji: '😐', label: 'Normal' },
            { value: '4', emoji: '😟', label: 'Stressé' },
            { value: '5', emoji: '😰', label: 'Très stressé' }
          ]
        }
      ];

      setQuestionsConfig(mockQuestions);
    } catch (error) {
      console.error('Error in fetchDynamicQuestions:', error);
      toast({ 
        title: 'Erreur chargement', 
        description: 'Impossible de charger les questions dynamiques.', 
        variant: 'destructive' 
      });
    }
    setLoadingQuestions(false);
  }

  const total = questionsConfig.length;
  const progress = total ? ((currentStep + 1) / total) * 100 : 0;
  const current = questionsConfig[currentStep] || {};

  const handleResponse = (id, value) => setResponses(prev => ({ ...prev, [id]: value }));
  const handleComment = (id, text) => setComments(prev => ({ ...prev, [id]: text }));

  const handlePrevious = () => currentStep > 0 && setCurrentStep(s => s - 1);
  const handleNext = () => currentStep < total - 1 && setCurrentStep(s => s + 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({ 
          title: 'Erreur authentification', 
          description: 'Vous devez être connecté pour sauvegarder.', 
          variant: 'destructive' 
        });
        setIsSubmitting(false);
        return;
      }

      // Save assessment using standard Supabase insert
      const { error } = await supabase
        .from('teen_assessments')
        .insert({
          user_id: user.id,
          frequency, 
          date: now.toISOString(), 
          responses, 
          comments 
        });

      if (error) {
        console.error('Error saving assessment:', error);
        toast({ 
          title: 'Erreur sauvegarde', 
          description: error.message, 
          variant: 'destructive' 
        });
        setIsSubmitting(false);
        return;
      }

      // Generate mock recommendations for now
      const mockRecommendations = {
        summary: "Basé sur tes réponses, voici nos recommandations personnalisées:",
        items: [
          {
            category: "Bien-être",
            suggestion: "Prendre du temps pour soi chaque jour",
            priority: "haute"
          },
          {
            category: "Relations",
            suggestion: "Parler avec des amis ou la famille",
            priority: "moyenne"
          }
        ]
      };

      // Save recommendations
      await supabase
        .from('teen_recommendations')
        .insert({
          user_id: user.id,
          assessment_date: now.toISOString(), 
          recommendations: mockRecommendations 
        });

      navigate('/recommandations', { state: { recommendations: mockRecommendations } });
      
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      toast({ 
        title: 'Erreur', 
        description: 'Une erreur inattendue s\'est produite.', 
        variant: 'destructive' 
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Frequency selector */}
      <div className="absolute top-4 right-4 z-20 flex space-x-2">
        {['daily','weekly','monthly'].map(freq => (
          <Button
            key={freq}
            variant={frequency === freq ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFrequency(freq)}
          >{freq === 'daily' ? 'Quotidien' : freq === 'weekly' ? 'Hebdo' : 'Mensuel'}</Button>
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-white/20 bg-black/30 backdrop-blur-sm z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/teens')} className="text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="text-gray-300 font-semibold">
            {loadingQuestions ? 'Chargement...' : frequency === 'daily' ? 'Question du jour' : frequency === 'weekly' ? 'Question hebdo' : 'Question mensuelle'}
          </div>
          <Progress value={progress} className="w-32 h-2 rounded-full" />
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 z-10">
        <div className="max-w-2xl mx-auto">
          {isSubmitting ? (
            <div className="text-center text-white">Envoi en cours...</div>
          ) : loadingQuestions ? (
            <div className="text-center text-white">Chargement des questions...</div>
          ) : current ? (
            <AnimatePresence mode="wait">
              <motion.div key={current.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <Card className="border-2 border-white/20 bg-black/40 backdrop-blur-sm mb-8">
                  <CardHeader className="text-center py-6">
                    <div className="text-6xl mb-4">{current.emoji}</div>
                    <CardTitle className="text-2xl text-white font-bold">{current.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <RadioGroup value={responses[current.id] || ""} onValueChange={val => handleResponse(current.id, val)} className="space-y-4">
                      {current.options?.map(opt => (
                        <label key={opt.value} className="flex items-center space-x-4 p-4 border rounded-xl cursor-pointer hover:bg-white/10 border-white/20">
                          <RadioGroupItem value={opt.value} id={opt.value} className="border-white text-white" />
                          <span className="text-2xl">{opt.emoji}</span>
                          <span className="text-white">{opt.label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                    <div>
                      <Label htmlFor={`${current.id}_comment`} className="text-white">Commentaire :</Label>
                      <textarea
                        id={`${current.id}_comment`}
                        value={comments[current.id] || ""}
                        onChange={e => handleComment(current.id, e.target.value)}
                        rows={3}
                        className="w-full mt-2 p-3 rounded-lg bg-black/50 text-white border border-white/20 focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" disabled={currentStep === 0} onClick={handlePrevious}>← Retour</Button>
                      {currentStep === total - 1 ? (
                        <Button onClick={handleSubmit} disabled={!responses[current.id]}>Terminer et générer recommandations</Button>
                      ) : (
                        <Button onClick={handleNext} disabled={!responses[current.id]}>Suivant →</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center text-white">Aucune question disponible.</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default TeensQuestionnaire;
