import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WeightChart({ metrics = [] }) {
  // Map SQLite rows to chart data
  const data = metrics.map((m, i) => ({
    name: `Day ${i + 1}`,
    weight: m.weight
  })).reverse(); // Oldest first for line chart

  if (data.length === 0) {
    return <div className="text-muted-foreground text-sm flex h-full items-center justify-center">No data logged yet</div>;
  }

  return (
    <div className="w-full h-full min-h-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#64748b' }} 
            dy={10}
          />
          <YAxis 
            domain={['dataMin - 2', 'dataMax + 2']} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#64748b' }} 
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            labelStyle={{ color: '#64748b', fontWeight: 600, fontSize: '12px', marginBottom: '4px' }}
            itemStyle={{ color: '#2563eb', fontWeight: 700 }}
          />
          <Line 
            type="monotone" 
            dataKey="weight" 
            stroke="#2563eb" 
            strokeWidth={4} 
            dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#2563eb' }} 
            activeDot={{ r: 6, strokeWidth: 0, fill: '#2563eb' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
