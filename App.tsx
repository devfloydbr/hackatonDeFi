import 'react-native-gesture-handler'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'

import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme'

import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } 

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark"/>    
      <AuthProvider>          
        <Routes /> 
      </AuthProvider>    
    </ThemeProvider>
  )
}