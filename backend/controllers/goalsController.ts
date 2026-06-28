import { Request, Response } from 'express';
import { db } from '../config/db';
import { AuthRequest } from '../middleware/authMiddleware';

export const getGoals = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  
  db.get('SELECT * FROM goals WHERE user_id = ?', [userId], (err, row: any) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    
    if (!row) {
      // Return defaults if not set
      return res.json({
        target_weight: null,
        daily_calories: 2000,
        daily_protein: 150,
        daily_carbs: 200,
        daily_fats: 65
      });
    }

    res.json(row);
  });
};

export const updateGoals = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const { target_weight, daily_calories, daily_protein, daily_carbs, daily_fats } = req.body;

  db.get('SELECT id FROM goals WHERE user_id = ?', [userId], (err, row: any) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (row) {
      db.run(`
        UPDATE goals 
        SET target_weight = ?, daily_calories = ?, daily_protein = ?, daily_carbs = ?, daily_fats = ?
        WHERE user_id = ?
      `, [target_weight, daily_calories, daily_protein, daily_carbs, daily_fats, userId], function(updateErr) {
        if (updateErr) return res.status(500).json({ error: 'Failed to update goals' });
        res.json({ message: 'Goals updated successfully' });
      });
    } else {
      db.run(`
        INSERT INTO goals (user_id, target_weight, daily_calories, daily_protein, daily_carbs, daily_fats)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [userId, target_weight, daily_calories, daily_protein, daily_carbs, daily_fats], function(insertErr) {
        if (insertErr) return res.status(500).json({ error: 'Failed to save goals' });
        res.json({ message: 'Goals saved successfully' });
      });
    }
  });
};
