
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface EvaluationResult {
  id: string;
  date: string;
  participantCount: number;
  avgScore: number;
  riskCount: number;
  type: string;
}

interface EvaluationResultsTableProps {
  results: EvaluationResult[];
  title: string;
}

const EvaluationResultsTable = ({ results, title }: EvaluationResultsTableProps) => {
  const getRiskBadge = (riskCount: number, total: number) => {
    const percentage = (riskCount / total) * 100;
    if (percentage > 30) return <Badge variant="destructive">Élevé</Badge>;
    if (percentage > 15) return <Badge variant="default">Modéré</Badge>;
    return <Badge variant="secondary">Faible</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Participants</TableHead>
              <TableHead>Score Moyen</TableHead>
              <TableHead>Personnes à Risque</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Niveau Risque</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{new Date(result.date).toLocaleDateString('fr-FR')}</TableCell>
                <TableCell>{result.participantCount}</TableCell>
                <TableCell>
                  <Badge variant={result.avgScore >= 70 ? "secondary" : result.avgScore >= 50 ? "default" : "destructive"}>
                    {result.avgScore}/100
                  </Badge>
                </TableCell>
                <TableCell>{result.riskCount}</TableCell>
                <TableCell>{result.type}</TableCell>
                <TableCell>{getRiskBadge(result.riskCount, result.participantCount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EvaluationResultsTable;
