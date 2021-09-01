import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import ViewAll from './shopminders/ViewAll';
const Stack = createStackNavigator();
const ShopmindersTab = () => {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      backgroundColor: 'transparent',
    },
  });
  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#29434e'
          }
        }}
      >
        <Stack.Screen
          name="viewAll"
          component={ViewAll}
          options={{
            title: 'Shopminders',
            cardStyleInterpolator: forFade,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </>
  )
}
export default ShopmindersTab;