import { Response } from 'express';
import { db } from '../config/db';
import { AuthRequest } from '../middleware/authMiddleware';

export const getIntegrations = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;

  db.all('SELECT provider, is_connected FROM integrations WHERE user_id = ?', [userId], (err, rows: any[]) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    
    // Convert array of rows [{provider: 'apple', is_connected: 1}] to object { apple: true }
    const statuses: Record<string, boolean> = {
      apple: false,
      google: false,
      oura: false,
      fitbit: false
    };

    if (rows) {
      rows.forEach(row => {
        statuses[row.provider] = row.is_connected === 1;
      });
    }

    res.json(statuses);
  });
};

export const toggleIntegration = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const { provider, isConnected } = req.body;

  const statusInt = isConnected ? 1 : 0;

  db.get('SELECT id FROM integrations WHERE user_id = ? AND provider = ?', [userId, provider], (err, row: any) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (row) {
      db.run('UPDATE integrations SET is_connected = ? WHERE id = ?', [statusInt, row.id], function(updateErr) {
        if (updateErr) return res.status(500).json({ error: 'Failed to update integration' });
        res.json({ message: 'Integration updated successfully' });
      });
    } else {
      db.run('INSERT INTO integrations (user_id, provider, is_connected) VALUES (?, ?, ?)', [userId, provider, statusInt], function(insertErr) {
        if (insertErr) return res.status(500).json({ error: 'Failed to add integration' });
        res.json({ message: 'Integration added successfully' });
      });
    }
  });
};
