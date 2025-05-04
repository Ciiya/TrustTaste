import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import TabNavigator from './navigation/TabNavigation';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <TabNavigator />
    </GluestackUIProvider>
  );
}
