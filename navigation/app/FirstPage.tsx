import { Button, ButtonIcon } from '@/components/ui/button';
import { logout } from '@/supabase/logout';
import { LogOut } from 'lucide-react-native';
import React from 'react';
import { View, Text } from 'react-native';

const FirstPage = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Button onPress={logout}>
        <ButtonIcon as={LogOut} />
      </Button>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default FirstPage;
