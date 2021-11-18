import React from 'react'

import { Login } from '../screens/Login'
import { NewWallet } from '../screens/NewWallet'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const { Navigator: NavigatorStack, Screen: ScreenStack } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <NavigatorStack
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <ScreenStack name="Login" component={Login} />  
        <ScreenStack name="NewWallet" component={NewWallet} />  
      </NavigatorStack>
    </NavigationContainer>    
  )
}