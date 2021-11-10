import React from 'react'

import { View, Text, Button } from 'react-native'

import { useAuth } from '../../hooks/auth'

export function Login() {
  const { signIn } = useAuth() 

  async function handleLogin() {
    await signIn()
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button 
        title="Auth"
        onPress={handleLogin}
      />
    </View>
  );
}
