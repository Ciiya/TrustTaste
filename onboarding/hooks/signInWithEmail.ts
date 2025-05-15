import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import supabase from '@/supabase/supabaseClient';

export const useEmailSignIn = () => {
  const [loading, setLoading] = useState(false);

  const signInWithEmail = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        Alert.alert('Login Error', error.message);
      }
      setLoading(false);
    },
    [],
  );

  return {
    signInWithEmail,
    loading,
  };
};
