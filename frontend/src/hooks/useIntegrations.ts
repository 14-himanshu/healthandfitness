import { useState, useEffect } from 'react';
import { integrationService } from '../services/integrationService';

export function useIntegrations() {
  const [connections, setConnections] = useState({
    apple: 'disconnected',
    google: 'disconnected',
    oura: 'disconnected',
    fitbit: 'disconnected'
  });
  const [loading, setLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(null);

  useEffect(() => {
    const fetchIntegrations = async () => {
      try {
        const data = await integrationService.getIntegrations();
        setConnections(data.connections);
      } catch (err) {
        console.error("Failed to load integrations:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchIntegrations();
  }, []);

  const toggleConnection = async (provider) => {
    const currentStatus = connections[provider];
    const newStatus = currentStatus === 'connected' ? 'disconnected' : 'connected';
    
    if (newStatus === 'connected') {
      setIsConnecting(provider);
    }
    
    try {
      // Simulate real auth delay if connecting
      if (newStatus === 'connected') {
        await new Promise(res => setTimeout(res, 1500));
      }
      
      await integrationService.toggleIntegration(provider, newStatus);
      setConnections(prev => ({ ...prev, [provider]: newStatus }));
    } catch (err) {
      console.error(`Failed to ${newStatus} ${provider}:`, err);
    } finally {
      setIsConnecting(null);
    }
  };

  return { connections, loading, isConnecting, toggleConnection };
}
