/*
  # Create consultations table for form submissions

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, required)
      - `selected_service` (text, required)
      - `problems` (text, required)
      - `additional_info` (text, optional)
      - `message` (text, optional)
      - `form_type` (text, default 'contact')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for authenticated users to insert their own data
    - Add policy for service role to read all data
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  selected_service text NOT NULL,
  problems text NOT NULL,
  additional_info text,
  message text,
  form_type text DEFAULT 'contact',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultations (for public form submissions)
CREATE POLICY "Anyone can insert consultations"
  ON consultations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow service role to read all consultations (for admin access)
CREATE POLICY "Service role can read all consultations"
  ON consultations
  FOR SELECT
  TO service_role
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_consultations_updated_at
  BEFORE UPDATE ON consultations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();