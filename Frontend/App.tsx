import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetectionScreen from './screens/DetectionScreen';
import LogScreen from './screens/LogScreen';

export type RootStackParamList = {
  Home: undefined;
  DetectionScreen: undefined;
  CorrectionScreen: undefined;
  ResultScreen: undefined;
  LogScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetectionScreen" component={DetectionScreen} />
        <Stack.Screen name="LogScreen" component={LogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
