
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TeamPerformanceData {
  teamName: string;
  avgScore: number;
  memberCount: number;
  riskCount: number;
}

interface TeamPerformanceChartProps {
  data: TeamPerformanceData[];
  title: string;
}

const TeamPerformanceChart = ({ data, title }: TeamPerformanceChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="teamName" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="avgScore" fill="#8884d8" name="Score Moyen QVT" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TeamPerformanceChart;
