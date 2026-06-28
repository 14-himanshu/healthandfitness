export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Metric {
  id?: number;
  weight: number;
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
  move_progress: number;
  exercise_progress: number;
  stand_progress: number;
  hrv?: number | null;
  resting_heart_rate?: number | null;
  blood_pressure?: string | null;
  blood_glucose?: number | null;
  logged_date?: string;
}

export interface Integrations {
  apple: boolean;
  google: boolean;
  oura: boolean;
  fitbit: boolean;
}
