import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screen/auth/Login';
import {Home} from '../screen/home/Home';

export default function AppNavigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="auth"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'home'} component={Home} />
        <Stack.Screen name={'auth'} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
