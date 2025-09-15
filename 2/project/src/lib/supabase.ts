import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please set up your Supabase connection.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ConsultationFormData = {
  name: string;
  email: string;
  company: string;
  selected_service: string;
  problems: string;
  additional_info?: string;
  message?: string;
  form_type: 'contact' | 'appointment';
};

export async function submitConsultation(data: ConsultationFormData) {
  const { data: result, error } = await supabase
    .from('consultations')
    .insert([{
      name: data.name,
      email: data.email,
      company: data.company,
      selected_service: data.selected_service,
      problems: data.problems,
      additional_info: data.additional_info || null,
      message: data.message || null,
      form_type: data.form_type
    }])
    .select();

  if (error) {
    console.error('Error submitting consultation:', error);
    throw error;
  }

  return result;
}