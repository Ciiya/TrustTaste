import React from 'react';
import TabNavigator from './navigation/TabNavigation';
import supabase from './supabase/supabaseClient';

export default function App() {
  return <TabNavigator />;
}
