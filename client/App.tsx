import 'react-native-gesture-handler'
import './global'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';
import { StyleSheet } from 'react-native'
import theme from './src/global/styles/theme'

import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />    
      <AuthProvider>          
        <Routes /> 
      </AuthProvider>    
    </ThemeProvider>
  )
}