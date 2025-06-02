
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Shield, MessageCircle, BookOpen, Users, Brain, AlertTriangle, Phone, Lock, Send, Star, Calendar, Camera } from "lucide-react";

const TeensIntimacySpace = () => {
  const navigate = useNavigate();
  const [journalEntry, setJournalEntry] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState("");

  const intimacyTopics = [
    {
      icon: "💕",
      title: "Relations & Amour",
      subtitle: "Questions sur les relations amoureuses",
      description: "Premiers amours, ruptures, communication, respect mutuel",
      color: "from-pink-500 to-rose-500",
      resources: [
        "Comment savoir si c'est de l'amour ?",
        "Gérer une rupture difficile",
        "Communication dans le couple",
        "Consentement et respect"
      ],
      chatPrompts: [
        "J'ai des sentiments pour quelqu'un mais j'ai peur de le dire...",
        "Mon/ma copain/copine ne me respecte pas, que faire ?",
        "Comment savoir si c'est de l'amour ou juste de l'attirance ?"
      ]
    },
    {
      icon: "🌡️",
      title: "Changements Corps",
      subtitle: "Comprendre les transformations",
      description: "Puberté, image corporelle, acceptation de soi",
      color: "from-blue-500 to-cyan-500",
      resources: [
        "Les changements de la puberté",
        "Accepter son corps",
        "Hygiène et soins personnels",
        "Complexes et estime de soi"
      ],
      chatPrompts: [
        "Mon corps change et ça me met mal à l'aise...",
        "Je n'aime pas mon apparence, comment m'accepter ?",
        "Est-ce normal ce qui m'arrive ?"
      ]
    },
    {
      icon: "😰",
      title: "Pression Sociale",
      subtitle: "Gérer la pression des autres",
      description: "Influence des amis, réseaux sociaux, conformité",
      color: "from-orange-500 to-red-500",
      resources: [
        "Résister à la pression du groupe",
        "Être soi-même malgré les autres",
        "Gérer les réseaux sociaux",
        "Choisir ses vrais amis"
      ],
      chatPrompts: [
        "Mes amis me poussent à faire des choses que je ne veux pas...",
        "Je me sens obligé(e) de mentir pour être accepté(e)",
        "Comment dire non sans perdre mes amis ?"
      ]
    },
    {
      icon: "🚫",
      title: "Dire Non",
      subtitle: "Apprendre à poser des limites",
      description: "Assertivité, limites personnelles, confiance en soi",
      color: "from-purple-500 to-indigo-500",
      resources: [
        "Comment dire non fermement",
        "Fixer ses limites",
        "Gérer la culpabilité",
        "Techniques d'assertivité"
      ],
      chatPrompts: [
        "J'ai du mal à dire non, même quand je ne veux pas faire quelque chose",
        "Comment poser des limites sans blesser les autres ?",
        "Je me sens coupable quand je refuse quelque chose"
      ]
    },
    {
      icon: "🧠",
      title: "Santé Mentale",
      subtitle: "Anxiété, dépression, stress",
      description: "Bien-être émotionnel, gestion du stress, aide professionnelle",
      color: "from-green-500 to-teal-500",
      resources: [
        "Reconnaître l'anxiété",
        "Techniques de relaxation",
        "Quand demander de l'aide",
        "Exercices de respiration"
      ],
      chatPrompts: [
        "Je me sens anxieux/anxieuse tout le temps...",
        "J'ai des pensées négatives qui ne partent pas",
        "Comment gérer le stress des études ?"
      ]
    },
    {
      icon: "🎭",
      title: "Identité",
      subtitle: "Qui suis-je vraiment ?",
      description: "Découverte de soi, orientation, valeurs personnelles",
      color: "from-yellow-500 to-orange-500",
      resources: [
        "Explorer son identité",
        "Accepter ses différences",
        "Construire sa personnalité",
        "Trouver sa voie"
      ],
      chatPrompts: [
        "Je ne sais pas qui je suis vraiment...",
        "J'ai des questions sur mon orientation",
        "Comment savoir ce qui est important pour moi ?"
      ]
    },
    {
      icon: "🚭",
      title: "Drogues & Addictions",
      subtitle: "Prévention et aide",
      description: "Information, prévention, aide en cas de problème",
      color: "from-red-500 to-pink-500",
      resources: [
        "Dangers des substances",
        "Résister à la pression",
        "Reconnaître l'addiction",
        "Où trouver de l'aide"
      ],
      chatPrompts: [
        "On me propose des substances, comment refuser ?",
        "Je pense avoir un problème avec l'alcool/drogues",
        "Comment aider un ami qui a des problèmes ?"
      ]
    },
    {
      icon: "🛡️",
      title: "Harcèlement",
      subtitle: "Protection et soutien",
      description: "Cyberharcèlement, intimidation, que faire",
      color: "from-indigo-500 to-purple-500",
      resources: [
        "Reconnaître le harcèlement",
        "Comment réagir",
        "Chercher de l'aide",
        "Soutenir un ami harcelé"
      ],
      chatPrompts: [
        "Je subis du harcèlement à l'école/en ligne",
        "Comment aider quelqu'un qui est harcelé ?",
        "Je ne sais plus quoi faire face aux moqueries"
      ]
    },
    {
      icon: "📚",
      title: "Études & Orientation",
      subtitle: "Réussir sans stress",
      description: "Gestion du stress scolaire, choix d'orientation",
      color: "from-cyan-500 to-blue-500",
      resources: [
        "Gérer le stress des examens",
        "Organiser son travail",
        "Choisir son orientation",
        "Motivation et objectifs"
      ],
      chatPrompts: [
        "Je stresse énormément pour les examens",
        "Je ne sais pas quoi faire après le lycée",
        "J'ai perdu ma motivation pour les études"
      ]
    }
  ];

  const emergencyContacts = [
    { name: "Suicide Écoute", number: "01 45 39 40 00", available: "24h/24", description: "Prévention du suicide" },
    { name: "SOS Amitié", number: "09 72 39 40 50", available: "24h/24", description: "Écoute et soutien" },
    { name: "Fil Santé Jeunes", number: "0800 235 236", available: "9h-23h", description: "Santé des jeunes" },
    { name: "Net Écoute", number: "0800 200 000", available: "9h-19h", description: "Cyberharcèlement" },
    { name: "Drogues Info Service", number: "0800 23 13 13", available: "8h-2h", description: "Addictions" },
    { name: "Ligne Azur", number: "01 41 83 42 81", available: "8h-23h", description: "LGBT+ support" }
  ];

  const handleTopicClick = (topic: any) => {
    setSelectedTopic(topic.title);
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'journal':
        navigate('/teens/journal');
        break;
      case 'chat':
        setSelectedTopic('Discussion Privée');
        break;
      case 'alert':
        navigate('/teens/quick-alert');
        break;
      default:
        break;
    }
  };

  const sendMessage = () => {
    if (chatMessage.trim()) {
      // Simuler l'envoi du message
      setChatMessage("");
      // Ici on pourrait intégrer une vraie IA ou un système de chat
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute top-60 right-1/3 w-12 h-12 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-18 h-18 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/teens')}
              className="flex items-center space-x-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-pink-400" />
              <h1 className="text-2xl font-black text-white">MON ESPACE INTIMITÉ</h1>
            </div>
            <Button 
              variant="ghost"
              onClick={() => navigate('/teens/personal-space')}
              className="text-white hover:bg-white/20"
            >
              <Star className="w-4 h-4 mr-2" />
              Mon Journal
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-6">
            🌸 Mon Espace Personnel
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Ton safe space pour parler de tout, même ce qui te préoccupe
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Badge className="bg-green-500/20 text-green-300 px-6 py-3 text-lg">
              <Shield className="w-4 h-4 mr-2" />
              100% Confidentiel
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 px-6 py-3 text-lg">
              <Heart className="w-4 h-4 mr-2" />
              Sans jugement
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 px-6 py-3 text-lg">
              <Lock className="w-4 h-4 mr-2" />
              Sécurisé
            </Badge>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card 
            className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => handleQuickAction('journal')}
          >
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">📝 Journal Perso</h3>
              <p className="text-gray-300 text-sm mb-4">Écris tes pensées en toute intimité</p>
              <Button className="w-full bg-pink-500/20 hover:bg-pink-500/40 text-pink-200 border-pink-400">
                Ouvrir mon journal
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => handleQuickAction('chat')}
          >
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">💭 Chat Privé</h3>
              <p className="text-gray-300 text-sm mb-4">Discussion confidentielle avec IA</p>
              <Button className="w-full bg-purple-500/20 hover:bg-purple-500/40 text-purple-200 border-purple-400">
                Commencer à parler
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => handleQuickAction('alert')}
          >
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">🚨 Alerte Rapide</h3>
              <p className="text-gray-300 text-sm mb-4">Besoin d'aide immédiate</p>
              <Button className="w-full bg-red-500/20 hover:bg-red-500/40 text-red-200 border-red-400">
                Demander de l'aide
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Chat Interface (if topic selected) */}
        {selectedTopic && (
          <Card className="bg-black/30 border-2 border-white/20 mb-12">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>💬 Discussion: {selectedTopic}</span>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedTopic(null)}
                  className="text-white hover:bg-white/20"
                >
                  ✕
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4 max-h-60 overflow-y-auto">
                <div className="text-green-300 mb-2">🤖 Assistant IA:</div>
                <p className="text-gray-200 mb-4">
                  Salut ! Je suis là pour t'écouter et t'aider. Tu peux me parler de tout ce qui te préoccupe. 
                  C'est un espace 100% confidentiel. De quoi aimerais-tu parler aujourd'hui ?
                </p>
                {selectedTopic !== 'Discussion Privée' && 
                  intimacyTopics.find(t => t.title === selectedTopic)?.chatPrompts.map((prompt, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="mb-2 mr-2 text-sm bg-blue-500/20 text-blue-200 border-blue-400"
                      onClick={() => setChatMessage(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))
                }
              </div>
              <div className="flex gap-2">
                <Textarea
                  placeholder="Écris ton message ici... Tout ce que tu dis reste entre nous 💭"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 bg-gray-800/50 border-gray-600 text-white"
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-green-500 hover:bg-green-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {intimacyTopics.map((topic, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-to-br ${topic.color}/10 border-2 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
              onClick={() => handleTopicClick(topic)}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{topic.icon}</div>
                <CardTitle className="text-xl font-bold text-white">
                  {topic.title}
                </CardTitle>
                <p className="text-sm text-gray-300">{topic.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{topic.description}</p>
                <div className="space-y-2 mb-4">
                  {topic.resources.slice(0, 2).map((resource, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-current rounded-full mr-2"></span>
                      {resource}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0 rounded-2xl">
                  Parler en toute sécurité
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border-2 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-green-400" />
                📅 Rendez-vous avec un Pro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Besoin de parler à un psychologue ou un conseiller ? On peut t'aider à prendre rendez-vous.
              </p>
              <Button className="w-full bg-green-500/20 hover:bg-green-500/40 text-green-200 border-green-400">
                Prendre rendez-vous
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Camera className="w-6 h-6 mr-3 text-yellow-400" />
                📸 Témoignages Anonymes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Écoute les histoires d'autres jeunes qui ont vécu des situations similaires.
              </p>
              <Button className="w-full bg-yellow-500/20 hover:bg-yellow-500/40 text-yellow-200 border-yellow-400">
                Voir les témoignages
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="bg-red-500/10 border-2 border-red-400/30 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Phone className="w-6 h-6 mr-3 text-red-400" />
              🆘 Numéros d'urgence - Tu n'es jamais seul(e)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-black/20 rounded-2xl p-4 hover:bg-black/30 transition-colors cursor-pointer">
                  <h4 className="font-bold text-white">{contact.name}</h4>
                  <p className="text-2xl font-bold text-red-400">{contact.number}</p>
                  <p className="text-sm text-gray-300">{contact.available}</p>
                  <p className="text-xs text-gray-400 mt-1">{contact.description}</p>
                  <Button 
                    size="sm" 
                    className="mt-2 w-full bg-red-500/20 hover:bg-red-500/40 text-red-200"
                    onClick={() => window.open(`tel:${contact.number}`)}
                  >
                    Appeler maintenant
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <Card className="bg-green-500/10 border-2 border-green-400/30">
          <CardContent className="p-8 text-center">
            <Shield className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              🔒 Ton intimité est protégée
            </h3>
            <div className="max-w-3xl mx-auto text-gray-200 space-y-4">
              <p>
                <strong>Confidentialité totale :</strong> Tes conversations et tes écrits restent privés. 
                Seules les alertes que TU choisis d'envoyer sont partagées avec tes parents.
              </p>
              <p>
                <strong>Espace sécurisé :</strong> Aucun jugement, juste du soutien et des conseils 
                adaptés à ton âge et tes préoccupations.
              </p>
              <p>
                <strong>Aide professionnelle :</strong> Si tu en ressens le besoin, nous pouvons 
                t'orienter vers des professionnels de confiance.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <Button 
                className="bg-blue-500/20 hover:bg-blue-500/40 text-blue-200 border-blue-400"
                onClick={() => navigate('/teens/personal-space')}
              >
                Voir mes paramètres de confidentialité
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeensIntimacySpace;
