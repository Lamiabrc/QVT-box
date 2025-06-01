
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TeamInsight {
  teamId: string;
  type: string;
  content: string;
  anonymous: boolean;
  priority: string;
}

interface TeamInsightsFormProps {
  onInsightSubmit: (insight: TeamInsight) => void;
  teamId: string;
}

const TeamInsightsForm: React.FC<TeamInsightsFormProps> = ({
  onInsightSubmit,
  teamId
}) => {
  const [insight, setInsight] = useState<TeamInsight>({
    teamId,
    type: "",
    content: "",
    anonymous: false,
    priority: "medium"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (insight.type && insight.content) {
      onInsightSubmit(insight);
      setInsight({
        teamId,
        type: "",
        content: "",
        anonymous: false,
        priority: "medium"
      });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Remontée d'informations équipe</CardTitle>
        <p className="text-gray-600">
          Partagez des informations sur votre équipe pour améliorer l'analyse QVT
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="type">Type de remontée</Label>
            <Select value={insight.type} onValueChange={(value) => setInsight({...insight, type: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Choisir un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="communication">Communication</SelectItem>
                <SelectItem value="workload">Charge de travail</SelectItem>
                <SelectItem value="management">Management</SelectItem>
                <SelectItem value="environment">Environnement</SelectItem>
                <SelectItem value="recognition">Reconnaissance</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Description</Label>
            <Textarea
              id="content"
              value={insight.content}
              onChange={(e) => setInsight({...insight, content: e.target.value})}
              placeholder="Décrivez la situation ou le point d'amélioration..."
              className="min-h-24"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priorité</Label>
            <Select value={insight.priority} onValueChange={(value) => setInsight({...insight, priority: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Faible</SelectItem>
                <SelectItem value="medium">Moyenne</SelectItem>
                <SelectItem value="high">Élevée</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="anonymous"
              checked={insight.anonymous}
              onCheckedChange={(checked) => setInsight({...insight, anonymous: checked})}
            />
            <Label htmlFor="anonymous">Remontée anonyme</Label>
          </div>

          <Button type="submit" className="w-full">
            Enregistrer la remontée
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TeamInsightsForm;
