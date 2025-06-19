
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
      // Get last entry for user from Supabase
      const { data: lastEntry } = await supabase
        .from('teen_assessments')
        .select('responses')
        .order('date', { ascending: false })
        .limit(1)
        .single();
      const lastResponses = lastEntry?.responses || {};

      // Call backend to generate next questions - fallback to static questions if API fails
      try {
        const res = await fetch('/api/dynamic-questions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ frequency, lastResponses })
        });
        
        if (res.ok) {
          const { questions } = await res.json();
          setQuestionsConfig(questions);
        } else {
          throw new Error('API not available');
        }
      } catch (apiError) {
        // Fallback to static questions
        const staticQuestions = [
          {
            id: 'mood_today',
            question: 'Comment te sens-tu aujourd\'hui ?',
            emoji: '😊',
            options: [
              { value: '5', label: 'Super bien', emoji: '😄' },
              { value: '4', label: 'Plutôt bien', emoji: '😊' },
              { value: '3', label: 'Moyen', emoji: '😐' },
              { value: '2', label: 'Pas terrible', emoji: '😕' },
              { value: '1', label: 'Très mal', emoji: '😢' }
            ]
          },
          {
            id: 'energy_level',
            question: 'Quel est ton niveau d\'énergie ?',
            emoji: '⚡',
            options: [
              { value: '5', label: 'Plein d\'énergie', emoji: '⚡' },
              { value: '4', label: 'Bien énergique', emoji: '💪' },
              { value: '3', label: 'Niveau normal', emoji: '😌' },
              { value: '2', label: 'Un peu fatigué', emoji: '😴' },
              { value: '1', label: 'Épuisé', emoji: '🥱' }
            ]
          },
          {
            id: 'stress_level',
            question: 'Comment gères-tu le stress cette semaine ?',
            emoji: '😰',
            options: [
              { value: '5', label: 'Très bien', emoji: '😌' },
              { value: '4', label: 'Bien', emoji: '🙂' },
              { value: '3', label: 'Moyennement', emoji: '😐' },
              { value: '2', label: 'Difficilement', emoji: '😟' },
              { value: '1', label: 'Très mal', emoji: '😰' }
            ]
          }
        ];
        setQuestionsConfig(staticQuestions);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      toast({ 
        title: 'Erreur chargement', 
        description: 'Impossible de charger les questions.', 
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
      const payload = { frequency, date: now.toISOString(), responses, comments };
      const { error } = await supabase.from('teen_assessments').insert([payload]);
      
      if (error) {
        toast({ title: 'Erreur sauvegarde', description: error.message, variant: 'destructive' });
        setIsSubmitting(false);
        return;
      }

      // Try to generate personalized recommendations, but don't block if it fails
      try {
        const recRes = await fetch('/api/recommendations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ responses, comments, frequency })
        });
        
        if (recRes.ok) {
          const { recommendations } = await recRes.json();
          await supabase.from('teen_recommendations').insert([{ 
            assessment_date: now.toISOString(), 
            recommendations 
          }]);
          navigate('/recommandations', { state: { recommendations } });
        } else {
          // Fallback: navigate without AI recommendations
          navigate('/recommandations');
        }
      } catch (apiError) {
        console.log('API recommendations not available, using fallback');
        navigate('/recommandations');
      }
    } catch (error) {
      console.error('Error submitting assessment:', error);
      toast({ title: 'Erreur', description: 'Une erreur est survenue.', variant: 'destructive' });
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
