import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PetStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PetList"
      component={PetListScreen}
      options={{ title: 'Mascotas' }}
    />
    <Stack.Screen
      name="PetDetail"
      component={PetDetailScreen}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mascotas" component={PetStack} />
        <Tab.Screen name="Registrar" component={RegisterPetScreen} />
        <Tab.Screen name="Consejos" component={TipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;