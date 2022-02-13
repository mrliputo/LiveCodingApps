/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen'
import LoginScreen from './Screen/LoginScreen'
import MainScreen from './Screen/MainScreen'
const Stack = createStackNavigator();


const App = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouterName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          />

        <Stack.Screen
          name="MainPage"
          component={MainScreen}
          />
      
      </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;

 

 
