import { api } from './api';

// For downloading files, we need a custom fetch that returns a Blob
const downloadCSV = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:4000/api/metrics/export', {
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
