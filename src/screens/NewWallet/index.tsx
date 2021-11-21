import React, { useState } from 'react'

import { api } from '../../services/api'

import { Button } from '../../components/Button'

import {
  Container,
  Header,
  Title,
  Content,
  Mnemonic
} from './styles'

export function NewWallet() {
  const [mnemonic, setMnemonic] = useState('')

  async function generateMnemonic() {
    const response = await api.get('mnemonic')

    setMnemonic(response.data.mnemonic)
  }

  return (
    <Container>
      <Header>
        <Title>Nova carteira</Title>
      </Header>   
      <Content>
        <Button 
          title="Gerar frase segura"
          onPress={generateMnemonic}
        />
        <Mnemonic>{mnemonic}</Mnemonic>
      </Content>
    </Container>    
  );
}