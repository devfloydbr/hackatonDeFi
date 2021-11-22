import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';

const { Navigator: NavigatorStack, Screen: ScreenStack} = createStackNavigator();

export function AuthRoutes() {
  return (
    <NavigatorStack
      screenOptions={{
        headerShown: false
      }}
    >
      <ScreenStack name="Login" component={Login} />
    </NavigatorStack>
  )
}