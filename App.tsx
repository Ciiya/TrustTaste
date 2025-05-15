import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import TabNavigator from './navigation/TabNavigation';
import supabase from "./supabase/supabaseClient";
import { API_HOST } from '@env';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <TabNavigator />
    </GluestackUIProvider>
  );
}
