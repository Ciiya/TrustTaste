import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import TabNavigator from './navigation/TabNavigation';
import { Session } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import supabase from './supabase/supabaseClient';
import StartPage from './onboarding/StartPage';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <GluestackUIProvider mode="light">
      {!session && <StartPage />}
      {session && session.user && <TabNavigator />}
    </GluestackUIProvider>
  );
}
