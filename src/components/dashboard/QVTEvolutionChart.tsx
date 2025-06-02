
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QVTEvolutionChartProps {
  data: Array<{
    date: string;
    avgScore: number;
    teamCount: number;
  }>;
  title: string;
}

const QVTEvolutionChart = ({ data, title }: QVTEvolutionChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="avgScore" 
              stroke="#8884d8" 
              strokeWidth={2}
              name="Score QVT Moyen"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default QVTEvolutionChart;
