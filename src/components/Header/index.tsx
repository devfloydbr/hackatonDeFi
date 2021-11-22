import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { useAuth } from '../../hooks/auth';

import { Button } from '../Button'

import {
  Container,
  ActionButtonsContainer
 } from './styles';

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>
      <ActionButtonsContainer>
        <Button 
          title="Desconectar"
          onPress={signOut}
        />
      </ActionButtonsContainer>
    </Container>
  )
}