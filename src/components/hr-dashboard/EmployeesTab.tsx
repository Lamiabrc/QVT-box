
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Employee, Team } from '@/pages/entreprise/HRDashboard';


interface EmployeesTabProps {
  allEmployees: Employee[];
  teams: Team[];
  updateEmployeeRole: (employeeId: string, newRole: string) => void;
  assignEmployeeToTeam: (employeeId: string, teamId: string) => void;
}

const EmployeesTab: React.FC<EmployeesTabProps> = ({ allEmployees, teams, updateEmployeeRole, assignEmployeeToTeam }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestion des Collaborateurs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {allEmployees.map((employee) => (
            <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-indigo-50">
              <div>
                <h4 className="font-semibold">{employee.full_name || employee.email}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline">{employee.enterprise_role}</Badge>
                  {teams.find(team => 
                    team.team_members?.some(member => member.profiles?.id === employee.id)
                  ) ? (
                    <Badge variant="secondary">
                      Équipe: {teams.find(team => 
                        team.team_members?.some(member => member.profiles?.id === employee.id)
                      )?.name}
                    </Badge>
                  ) : (
                    <Badge variant="destructive">Non assigné</Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Select 
                  value={employee.enterprise_role} 
                  onValueChange={(newRole) => updateEmployeeRole(employee.id, newRole)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Salarié</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="hr">RH</SelectItem>
                  </SelectContent>
                </Select>
                
                {teams.length > 0 && (
                  <Select onValueChange={(teamId) => assignEmployeeToTeam(employee.id, teamId)}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Assigner à..." />
                    </SelectTrigger>
                    <SelectContent>
                      {teams.map((team) => (
                        <SelectItem key={team.id} value={team.id}>
                          {team.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeesTab;
