import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SecondPage from './app/Settings';
import CameraManager from './app/camera/CameraManager';
import FirstPage from './app/FirstPage';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: '#FFFF' },
          }}
        >
          <Tab.Screen
            name="FirstPage"
            component={FirstPage}
            options={{
              tabBarIcon: () => (
                <View>
                  <MaterialIcons name="person" color="black" size={26} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Camera"
            component={CameraManager}
            options={{
              tabBarIcon: () => (
                <View>
                  <MaterialIcons
                    name="qr-code-scanner"
                    color="black"
                    size={26}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="SecondPage"
            component={SecondPage}
            options={{
              tabBarIcon: () => (
                <View>
                  <MaterialIcons name="settings" color="black" size={26} />
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
