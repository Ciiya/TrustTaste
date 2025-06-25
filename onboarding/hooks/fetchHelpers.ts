// fetchHelpers.ts
import supabase from '@/supabase/supabaseClient';
import { Allergy } from '@/src/userService';

// src/fetchHelpers.ts
type SupabaseResponse<T> = {
  data: T | null;
  error: Error | null;
};

export async function fetchData<T>(
  fn: () => Promise<SupabaseResponse<T>>
): Promise<SupabaseResponse<T>> {
  try {
    const { data, error } = await fn();

    if (error) {
      console.error('Supabase error:', error.message);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (err: any) {
    console.error('Unexpected fetch error:', err.message);
    return { data: null, error: err };
  }
}


export const fetchAllergies = async (): Promise<Allergy[]> => {
  const { data, error } = await supabase.from('allergies').select('*');
  if (error) throw new Error(error.message);
  return data || [];
};
