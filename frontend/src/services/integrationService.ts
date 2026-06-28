import { api } from './api';

export const integrationService = {
  getIntegrations: () => api.get('/integrations'),
  toggleIntegration: (provider, status) => api.post('/integrations', { provider, status }),
};
