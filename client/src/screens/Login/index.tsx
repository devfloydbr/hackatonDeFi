import React from 'react'

import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import {
  View,
  Title,
  Subtitle,
  Header,
  ImageContainer,
  LoginContainer,
  ButtonsContainer,
  BackgroundLogin
} from './styles'

export function Login() { 
  const { connect } = useAuth()

  return (
    <View>
      <Header>
        <Title>transfer</Title>
        <Subtitle>DeFi para todos</Subtitle>
      </Header>
      <ImageContainer>
        <BackgroundLogin 
          source={require('../../../assets/background-login.png')}
          resizeMode="cover"
        >
          
          <LoginContainer>
            <ButtonsContainer>
              <Button 
                title="Acessar minha conta"
                onPress={connect}
              />

              <Button 
                style={{ marginTop: 25 }}
                title="Nova conta Valora"
              />
            </ButtonsContainer>
          </LoginContainer>
        </BackgroundLogin>
      </ImageContainer>      
    </View>
  );
}

