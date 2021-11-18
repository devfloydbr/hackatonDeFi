import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Platform } from 'react-native'
import { useTheme } from 'styled-components'
import { Login } from '../screens/Login'
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
      </NavigatorStack>
    </NavigationContainer>    
  )
}