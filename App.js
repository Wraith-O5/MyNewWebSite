import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase';
import LoginScreen from './screens/sessions/LoginScreen';
import RegisterScreen from './screens/sessions/RegisterScreen.js';
import {SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import ShopmindersTab from './screens/ShopmindersTab.jsx';
import SettingsTab from './screens/SettingsTab.jsx';

const Stack = createStackNavigator();

export default function App() {
  const [signedIn, setSignedIn] = useState(false);

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      backgroundColor: 'transparent',
    },
  });
  
  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer theme={DefaultTheme}>
      {signedIn ?(<SafeAreaView style={{flex: 1, backgroundColor: '#29434e'}}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'shopminders') {
          return (
            <FontAwesome 
              name='list-ul'
              size={size}
              color={color}
            />
          )
        } 
        if (route.name === 'settings') {
          return (
            <FontAwesome 
              name="cogs"
              size={size}
              color={color}
            />
          )
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#819ca9',
      style: {
        backgroundColor: '#29434e'
      }
    }}
    >
      <Tab.Screen 
        name="shopminders"
        component={ShopmindersTab}
        options={{
          title: 'Shopminders'
      }}
      />
      <Tab.Screen 
        name="settings"
        component={SettingsTab}
        options={{
          title: 'Settings'
        }}
      />
    </Tab.Navigator>
  </SafeAreaView> 
  
      ) : (
      <>
        <StatusBar style="light"/>
        <Stack.Navigator 
        mode="card"
          screenOptions={{}}
        >
          <Stack.Screen name="signedIn" 
            component={LoginScreen}
            options={{
              title: 'Sign in',
              cardStyleInterpolator: forFade,
              headerStyle: {
                backgroundColor: '#29434e',
                borderBottomColor: '#29434e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="register"
            component={RegisterScreen}
            options={{
              title: 'Register',
              cardStyleInterpolator: forFade,
              headerStyle: {
                backgroundColor: '#29434e',
                backgroundColor: '#29434e',
              },
              headTintColor: '#fff',  
            }}
            />
          </Stack.Navigator>
          </>
          )}
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
