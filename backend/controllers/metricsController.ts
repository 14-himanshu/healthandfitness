import { Response } from 'express';
import { db } from '../config/db';
import { AuthRequest } from '../middleware/authMiddleware';

export const getMetrics = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  
  db.all(
    'SELECT * FROM metrics WHERE user_id = ? ORDER BY logged_date DESC LIMIT 30',
    [userId],
    (err, rows: any[]) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      
      if (!rows || rows.length === 0) {
        return res.json({
          metrics: [],
          latest: {
            weight: 70, protein: 120, carbs: 150, fats: 50, calories: 1500,
            move_progress: 0.2, exercise_progress: 0.1, stand_progress: 0.1,
            hrv: null, resting_heart_rate: null, blood_pressure: null, blood_glucose: null
          }
        });
      }

      res.json({
        metrics: rows.reverse(), // chronologically
        latest: rows[rows.length - 1] // most recent day (since we reversed it)
      });
    }
  );
};

export const logMetrics = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const { 
    weight, protein, carbs, fats, calories, move_progress, exercise_progress, stand_progress,
    hrv, resting_heart_rate, blood_pressure, blood_glucose
  } = req.body;
  
  const today = new Date().toISOString().split('T')[0];

  db.get('SELECT id FROM metrics WHERE user_id = ? AND logged_date = ?', [userId, today], (err, row: any) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (row) {
      db.run(`
        UPDATE metrics 
        SET weight = ?, protein = ?, carbs = ?, fats = ?, calories = ?, move_progress = ?, exercise_progress = ?, stand_progress = ?,
            hrv = ?, resting_heart_rate = ?, blood_pressure = ?, blood_glucose = ?
        WHERE id = ?
      `, [weight, protein, carbs, fats, calories, move_progress, exercise_progress, stand_progress, hrv, resting_heart_rate, blood_pressure, blood_glucose, row.id], function(updateErr) {
        if (updateErr) return res.status(500).json({ error: 'Failed to update metrics' });
        res.json({ message: 'Metrics updated successfully' });
      });
    } else {
      db.run(`
        INSERT INTO metrics (user_id, weight, protein, carbs, fats, calories, move_progress, exercise_progress, stand_progress, hrv, resting_heart_rate, blood_pressure, blood_glucose, logged_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [userId, weight, protein, carbs, fats, calories, move_progress, exercise_progress, stand_progress, hrv, resting_heart_rate, blood_pressure, blood_glucose, today], function(insertErr) {
        if (insertErr) return res.status(500).json({ error: 'Failed to log metrics' });
        res.json({ message: 'Metrics logged successfully' });
      });
    }
  });
};

export const exportCSV = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;

  db.all('SELECT * FROM metrics WHERE user_id = ? ORDER BY logged_date ASC', [userId], (err, rows: any[]) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!rows || rows.length === 0) return res.status(404).json({ error: 'No data to export' });

    const headers = ['Date', 'Weight (kg)', 'Calories', 'Protein (g)', 'Carbs (g)', 'Fats (g)', 'HRV (ms)', 'RHR (bpm)', 'BP (mmHg)', 'Glucose (mg/dL)'];
    const csvRows = [headers.join(',')];

    rows.forEach(row => {
      csvRows.push([
        row.logged_date,
        row.weight || '',
        row.calories || '',
        row.protein || '',
        row.carbs || '',
        row.fats || '',
        row.hrv || '',
        row.resting_heart_rate || '',
        row.blood_pressure || '',
        row.blood_glucose || ''
      ].join(','));
    });

    const csvString = csvRows.join('\n');
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="health_metrics_export.csv"');
    res.status(200).send(csvString);
  });
};

// 🧠 Advanced Feature: Linear Regression Weight Forecast
export const forecastWeight = (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  
  db.all(
    'SELECT weight, logged_date FROM metrics WHERE user_id = ? AND weight IS NOT NULL ORDER BY logged_date ASC',
    [userId],
    (err, rows: any[]) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      
      if (!rows || rows.length < 3) {
        return res.json({ forecast: [], message: 'Not enough data points for prediction. Need at least 3 days of weight data.' });
      }

      // Linear Regression Calculation
      let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
      const n = rows.length;
      
      const firstDate = new Date(rows[0].logged_date).getTime();
      
      const points = rows.map(row => {
        const x = (new Date(row.logged_date).getTime() - firstDate) / (1000 * 60 * 60 * 24); // Days since first log
        const y = row.weight;
        sumX += x;
        sumY += y;
        sumXY += x * y;
        sumX2 += x * x;
        return { x, y, date: row.logged_date };
      });

      const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      const intercept = (sumY - slope * sumX) / n;

      // Predict next 30 days
      const lastPoint = points[points.length - 1];
      const forecast = [];
      const lastDateObj = new Date(lastPoint.date);
      
      for (let i = 1; i <= 30; i++) {
        const targetX = lastPoint.x + i;
        const predictedWeight = slope * targetX + intercept;
        
        const futureDate = new Date(lastDateObj);
        futureDate.setDate(lastDateObj.getDate() + i);
        
        forecast.push({
          date: futureDate.toISOString().split('T')[0],
          predicted_weight: parseFloat(predictedWeight.toFixed(2))
        });
      }

      res.json({
        trend: slope > 0 ? 'gaining' : slope < 0 ? 'losing' : 'maintaining',
        ratePerDay: parseFloat(slope.toFixed(4)),
        forecast
      });
    }
  );
};
