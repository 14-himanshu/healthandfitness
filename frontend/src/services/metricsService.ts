import { api } from './api';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

// For downloading files, we need a custom fetch that returns a Blob
const downloadCSV = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_BASE}/metrics/export`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (!res.ok) throw new Error('Failed to export data');
  
  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'health_metrics_export.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export const metricsService = {
  getMetrics: () => api.get('/metrics'),
  logMetrics: (data) => api.post('/metrics', data),
  exportCSV: downloadCSV,
};
