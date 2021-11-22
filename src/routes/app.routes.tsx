import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { FontAwesome5 } from '@expo/vector-icons'
import { Platform } from 'react-native'

import { Dashboard } from '../screens/Dashboard'
import { Wallet } from '../screens/Wallet'

const { Navigator: NavigatorBottom, Screen: ScreenBottom } = createBottomTabNavigator()

export function AppRoutes() {
  const theme = useTheme();
  return (
    <NavigatorBottom
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle:  {
          paddingVertical: Platform.OS === 'ios' ? 20: 0,
          height: 44
        }
      }}          
    >  
      <ScreenBottom
        name="Início"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5
              name="home"
              size={size}
              color={color}
            />
          ))          
        }}
      />

      <ScreenBottom
        name="Carteira"
        component={Wallet}
        options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5
              name="sign-in-alt"
              size={size}
              color={color}
            />
          ))          
        }}
      />
    </NavigatorBottom>
  );
}