import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes() {
  const { wallet } = useAuth();

  return (
    <NavigationContainer>
      { wallet.wallet ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  )
}