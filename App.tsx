import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
//import { Allergy } from '@/src/userService';
import { getAllAllergies } from '@/src/userService';
import TabNavigator from './navigation/TabNavigation';
import supabase from './supabase/supabaseClient';

type Allergy = {
  id: number;
  name: string;
};


export default function App() {
  const [allergies, setAllergies] = useState<Allergy[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchAllergies = async () => {
    const { data, error } = await getAllAllergies();
    console.log("Fetched data:", data);
    console.log("Fetch error:", error);

    if (error) {
      console.error('Failed to fetch allergies:', error.message);
    } else {
      setAllergies(data);
    }

    setLoading(false);
  };

  fetchAllergies();
}, []);

  return (
    <GluestackUIProvider mode="light">
      {/* Temporary allergy test UI */}
      <View style={{ marginTop: 50, padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fetched Allergies (Test)</Text>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={allergies || []}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        )}
      </View>

      {/* Your real app below */}
      <TabNavigator />
    </GluestackUIProvider>
  );
}

