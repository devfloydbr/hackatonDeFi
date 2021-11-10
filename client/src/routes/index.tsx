import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Platform } from 'react-native'
import { useTheme } from 'styled-components'
import { Login } from '../screens/Login'
import { Dashboard } from '../screens/Dashboard'

const { Navigator: NavigatorStack, Screen: ScreenStack} = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <NavigatorStack>
        <ScreenStack name="Login" component={Login} />
        <ScreenStack name="Dashboard" component={Dashboard} />        
      </NavigatorStack>
    </NavigationContainer>    
  )
}