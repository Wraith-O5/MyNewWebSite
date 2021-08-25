import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase';
import LoginScreen from './screens/sessions/LoginScreen';
import RegisterScreen from './screens/sessions/RegisterScreen.js';

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

  return (
    <NavigationContainer theme={DefaultTheme}>
      {signedIn ?(<Text>Signed in</Text>
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
