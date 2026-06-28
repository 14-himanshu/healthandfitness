import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

export function useMetrics() {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [latest, setLatest] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [goals, setGoals] = useState<any>({
    daily_calories: 2000,
    daily_protein: 150,
    daily_carbs: 200,
    daily_fats: 65
  });
  const [loading, setLoading] = useState(true);

  const fetchMetrics = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const [metricsRes, forecastRes, goalsRes] = await Promise.all([
        fetch(`${API_URL}/metrics`, { headers: { 'Authorization': `Bearer ${token}` } }),
        fetch(`${API_URL}/metrics/forecast`, { headers: { 'Authorization': `Bearer ${token}` } }),
        fetch(`${API_URL}/goals`, { headers: { 'Authorization': `Bearer ${token}` } })
      ]);

      if (metricsRes.ok) {
        const data = await metricsRes.json();
        setMetrics(data.metrics);
        setLatest(data.latest);
      }
      
      if (forecastRes.ok) {
        const fData = await forecastRes.json();
        setForecast(fData);
      }

      if (goalsRes.ok) {
        const gData = await goalsRes.json();
        setGoals(gData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  const updateGoals = async (newGoals: any) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/goals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(newGoals)
      });
      if (res.ok) {
        await fetchMetrics();
      }
    } catch (error) {
      console.error('Error saving goals:', error);
    }
  };

  const logMetrics = async (data: any) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/metrics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        await fetchMetrics(); // refresh data
      }
    } catch (error) {
      console.error('Error logging metrics:', error);
    }
  };

  const exportCSV = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/metrics/export`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (!res.ok) throw new Error('Export failed');
      
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'health_metrics_export.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error('Error exporting CSV:', error);
    }
  };

  return { metrics, latest, forecast, goals, loading, logMetrics, updateGoals, exportCSV, refreshData: fetchMetrics };
}
