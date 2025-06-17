import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import { UserProfile, BubbleData } from '@/types/qvtbox';
import { Users, AlertTriangle, Heart, MessageCircle, Calendar, Settings } from 'lucide-react';

interface FamilySpaceProps {
  familyMembers: UserProfile[];
  currentUser: UserProfile;
  familyAlerts: Array<{
    id: string;
    memberId: string;
    type: 'urgent' | 'warning' | 'info';
    message: string;
    timestamp: Date;
  }>;
  onSendSupport: (memberId: string) => void;
  onScheduleActivity: () => void;
}

const FamilySpace: React.FC<FamilySpaceProps> = ({
  familyMembers,
  currentUser,
  familyAlerts,
  onSendSupport,
  onScheduleActivity
}) => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const getRoleEmoji = (role: string) => {
    const emojis = {
      parent: "👨‍👩‍👧‍👦",
      enfant_ado: "🧑‍🎓",
      grand_parent: "👴👵",
      parent_solo: '🦸',
      parent_en_couple: '👩‍❤️‍👨',
      parent_lgbt: '🌈',
      famille_recomposee: '🧩',
      autre_situation: '👤'
    };
    return emojis[role as keyof typeof emojis] || "👤";
  };

  const urgentAlerts = familyAlerts.filter(alert => alert.type === 'urgent');

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="text-center">
        <img 
          src="/images/bulle-famille.jpg" 
          alt="Famille heureuse" 
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4 shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🏠 FamilySpace
        </h1>
        <p className="text-gray-600">
          L'espace partagé pour prendre soin de votre bulle familiale
        </p>
      </div>

      {/* Alertes urgentes */}
      {urgentAlerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-50 border-2 border-red-200 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h2 className="text-lg font-semibold text-red-800">
              Alertes importantes
            </h2>
          </div>
          <div className="space-y-3">
            {urgentAlerts.map((alert) => {
              const member = familyMembers.find(m => m.id === alert.memberId);
              return (
                <div key={alert.id} className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">
                        {getRoleEmoji(member?.role || '')} {member?.role}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    </div>
                    <Button 
                      size="sm"
                      onClick={() => onSendSupport(alert.memberId)}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      Apporter du soutien
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="moods">Humeurs</TabsTrigger>
          <TabsTrigger value="activities">Activités</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Panorama familial */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Panorama familial</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {familyMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    whileHover={{ scale: 1.05 }}
                    className={`text-center p-4 rounded-xl cursor-pointer transition-all ${
                      selectedMember === member.id 
                        ? 'bg-blue-50 border-2 border-blue-300' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedMember(
                      selectedMember === member.id ? null : member.id
                    )}
                  >
                    <div className="flex justify-center mb-3">
                      <BubbleComponent 
                        bubble={member.currentMood} 
                        interactive={false}
                      />
                    </div>
                    <div className="text-2xl mb-2">
                      {getRoleEmoji(member.role || '')}
                    </div>
                    <h3 className="font-medium text-sm">{member.role}</h3>
                    <div className="text-xs text-gray-600">
                      Intensité: {member.currentMood.intensity}/10
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="moods">
          <Card>
            <CardHeader>
              <CardTitle>Évolution des humeurs familiales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <img 
                  src="/images/mood-tracker.png" 
                  alt="Suivi des humeurs" 
                  className="w-32 h-32 mx-auto mb-4 opacity-50"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <p className="text-gray-500">
                  Graphiques d'évolution des humeurs à venir
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Activités familiales</span>
                <Button onClick={onScheduleActivity}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Planifier une activité
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <img 
                  src="/images/activities.png" 
                  alt="Activités familiales" 
                  className="w-32 h-32 mx-auto mb-4 opacity-50"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <p className="text-gray-500">
                  Système de planification d'activités familiales à venir
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Paramètres familiaux</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Settings className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">
                  Gestion des permissions et paramètres RGPD à venir
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FamilySpace;
