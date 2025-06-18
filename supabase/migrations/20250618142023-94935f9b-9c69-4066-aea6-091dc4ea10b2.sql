
-- Create teen_assessments table to store assessment responses
CREATE TABLE public.teen_assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  frequency TEXT NOT NULL DEFAULT 'daily',
  date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  responses JSONB NOT NULL DEFAULT '{}',
  comments JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create teen_recommendations table to store AI-generated recommendations
CREATE TABLE public.teen_recommendations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  assessment_date TIMESTAMP WITH TIME ZONE NOT NULL,
  recommendations JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security
ALTER TABLE public.teen_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teen_recommendations ENABLE ROW LEVEL SECURITY;

-- Create policies for teen_assessments
CREATE POLICY "Users can view their own teen assessments" 
  ON public.teen_assessments 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own teen assessments" 
  ON public.teen_assessments 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create policies for teen_recommendations
CREATE POLICY "Users can view their own teen recommendations" 
  ON public.teen_recommendations 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own teen recommendations" 
  ON public.teen_recommendations 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);
