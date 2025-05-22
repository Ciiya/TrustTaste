import supabase from '@/supabase/supabaseClient';
import { Alert } from 'react-native';

export const logout = async () => {
  try {
    await supabase.auth.signOut();
  } catch {
    Alert.alert('Error by sign out');
  }
};
