
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Employee, Team } from '@/pages/entreprise/HRDashboard';

interface NewTeam {
  name: string;
  description: string;
  managerId: string;
}

interface TeamsTabProps {
  teams: Team[];
  managers: Employee[];
  newTeam: NewTeam;
  setNewTeam: React.Dispatch<React.SetStateAction<NewTeam>>;
  createTeam: () => void;
}

const TeamsTab: React.FC<TeamsTabProps> = ({ teams, managers, newTeam, setNewTeam, createTeam }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Créer une nouvelle équipe */}
      <Card>
        <CardHeader>
          <CardTitle>Créer une Équipe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="teamName">Nom de l'équipe</Label>
            <Input
              id="teamName"
              value={newTeam.name}
              onChange={(e) => setNewTeam(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Ex: Équipe Marketing"
            />
          </div>

          <div>
            <Label htmlFor="teamDescription">Description</Label>
            <Textarea
              id="teamDescription"
              value={newTeam.description}
              onChange={(e) => setNewTeam(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Description de l'équipe..."
            />
          </div>

          <div>
            <Label htmlFor="teamManager">Manager (optionnel)</Label>
            <Select value={newTeam.managerId} onValueChange={(value) => setNewTeam(prev => ({ ...prev, managerId: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Choisir un manager" />
              </SelectTrigger>
              <SelectContent>
                {managers.map((manager) => (
                  <SelectItem key={manager.id} value={manager.id}>
                    {manager.full_name || manager.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={createTeam} className="w-full" disabled={!newTeam.name}>
            Créer l'équipe
          </Button>
        </CardContent>
      </Card>

      {/* Liste des équipes existantes */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Équipes Existantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teams.map((team) => (
                <div key={team.id} className="border rounded-lg p-4 bg-gradient-to-r from-gray-50 to-purple-50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{team.name}</h4>
                      <p className="text-sm text-gray-600">{team.description}</p>
                    </div>
                    <Badge variant="outline">
                      {team.team_members?.length || 0} membres
                    </Badge>
                  </div>
                  
                  {team.team_managers?.length > 0 && (
                    <div className="mb-2">
                      <span className="text-sm font-medium">Manager: </span>
                      <span className="text-sm text-gray-600">
                        {team.team_managers[0].profiles.full_name}
                      </span>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Modifier
                    </Button>
                    <Button size="sm" variant="outline">
                      Gérer les membres
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeamsTab;
