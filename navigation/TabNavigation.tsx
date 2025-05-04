import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import { Home, ScanBarcode, Settings } from 'lucide-react-native';
import CameraManager from './camera/CameraManager';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: '#D3D3D3' },
          }}
        >
          <Tab.Screen
            name="FirstPage"
            component={FirstPage}
            options={{
              tabBarIcon: () => (
                <View className="flex-1 flex-coll pt-2">
                  <Home />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Camera"
            component={CameraManager}
            options={{
              tabBarIcon: () => (
                <View className="flex-1 flex-coll pt-2">
                  <ScanBarcode />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="SecondPage"
            component={SecondPage}
            options={{
              tabBarIcon: () => (
                <View className="flex-1 flex-coll pt-2">
                  <Settings />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default TabNavigator;
