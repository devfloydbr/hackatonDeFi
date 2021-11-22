import React, { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import {
  Container,
  DashboardContainer,
  EventHighlightContainer,
  EventHighlightCard,
  EventTitle,
  Overlay,
  EventHighlightText,
  EventListContainer,
  EventCard,
  EventImageContainer,
  InfoContainer,
  EventCardTitle,
  ActionsContainer,
  EventImage,
  EventPrice
} from './styles'
import { useAuth } from '../../hooks/auth'

export function Dashboard() {
  const [mnemonic, setMnemonic] = useState('')

  const { signOut } = useAuth() 

  async function generateMnemonic() {
    const response = await api.get('mnemonic')

    setMnemonic(response.data.mnemonic)
  }

  return (
    <Container>
      <Header />
      <DashboardContainer>
        <EventHighlightText>Eventos em destaque</EventHighlightText>
        <EventHighlightContainer>
          <EventHighlightCard
            source={{ uri: 'https://roquereverso.files.wordpress.com/2016/11/rock-in-rio.jpg' }}
          >
            <Overlay>
              <EventTitle>Rock'in Rio 2022</EventTitle>
            </Overlay>
            
          </EventHighlightCard>

          <EventHighlightCard
            source={{ uri: 'https://www.opovo.com.br/_midias/jpg/2021/10/25/818x460/1_lollapalooza_2022_quando_sera_atracoes_valor_do_ingresso_como_comprar-17344909.jpg' }}
          >
            <Overlay>
              <EventTitle>Lolapalooza 2022</EventTitle>
            </Overlay>
          </EventHighlightCard>

          <EventHighlightCard
            source={{ uri: 'https://www.promoview.com.br/uploads/2017/05/images/Caldas-Country-2017-Shows-e-Ingressos-560x299.jpg' }}
          >
            <Overlay>
              <EventTitle>Caldas Country 2022</EventTitle>
            </Overlay>
          </EventHighlightCard>
        </EventHighlightContainer>
        <EventListContainer>
          <EventCard>
            <EventImageContainer>
              <EventImage 
                source={{ uri: 'https://cdn.getyourguide.com/img/tour/591cb8d7cfd92.jpeg/146.jpg' }}
              />
            </EventImageContainer>
            <InfoContainer>
              <EventCardTitle>Evento #1</EventCardTitle>
              <EventPrice>200 TRAN</EventPrice>
            </InfoContainer>
            <ActionsContainer>
              <Button 
                title="Comprar"
              />
            </ActionsContainer>
          </EventCard> 

          <EventCard>
            <EventImageContainer>
              <EventImage 
                source={{ uri: 'https://cdn.getyourguide.com/img/tour/591cb8d7cfd92.jpeg/146.jpg' }}
              />
            </EventImageContainer>
            <InfoContainer>
              <EventCardTitle>Evento #2</EventCardTitle>
              <EventPrice>200 TRAN</EventPrice>
            </InfoContainer>
            <ActionsContainer>
              <Button 
                title="Comprar"
              />
            </ActionsContainer>
          </EventCard>

          <EventCard>
            <EventImageContainer>
              <EventImage 
                source={{ uri: 'https://cdn.getyourguide.com/img/tour/591cb8d7cfd92.jpeg/146.jpg' }}
              />
            </EventImageContainer>
            <InfoContainer>
              <EventCardTitle>Evento #3</EventCardTitle>
              <EventPrice>200 TRAN</EventPrice>
            </InfoContainer>
            <ActionsContainer>
              <Button 
                title="Comprar"
              />
            </ActionsContainer>
          </EventCard>

          <EventCard>
            <EventImageContainer>
              <EventImage 
                source={{ uri: 'https://cdn.getyourguide.com/img/tour/591cb8d7cfd92.jpeg/146.jpg' }}
              />
            </EventImageContainer>
            <InfoContainer>
              <EventCardTitle>Evento #4</EventCardTitle>
              <EventPrice>200 TRAN</EventPrice>
            </InfoContainer>
            <ActionsContainer>
              <Button 
                title="Comprar"
              />
            </ActionsContainer>
          </EventCard>

          <EventCard>
            <EventImageContainer>
              <EventImage 
                source={{ uri: 'https://cdn.getyourguide.com/img/tour/591cb8d7cfd92.jpeg/146.jpg' }}
              />
            </EventImageContainer>
            <InfoContainer>
              <EventCardTitle>Evento #5</EventCardTitle>
              <EventPrice>200 TRAN</EventPrice>
            </InfoContainer>
            <ActionsContainer>
              <Button 
                title="Comprar"
              />
            </ActionsContainer>
          </EventCard>

          <EventCard>
            <EventImageContainer>
              <EventImage 
                source={{ uri: 'https://cdn.getyourguide.com/img/tour/591cb8d7cfd92.jpeg/146.jpg' }}
              />
            </EventImageContainer>
            <InfoContainer>
              <EventCardTitle>Evento #6</EventCardTitle>
              <EventPrice>200 TRAN</EventPrice>
            </InfoContainer>
            <ActionsContainer>
              <Button 
                title="Comprar"
              />
            </ActionsContainer>
          </EventCard>

          <EventCard>
            <EventImageContainer>
              <EventImage 
                source={{ uri: 'https://cdn.getyourguide.com/img/tour/591cb8d7cfd92.jpeg/146.jpg' }}
              />
            </EventImageContainer>
            <InfoContainer>
              <EventCardTitle>Evento #7</EventCardTitle>
              <EventPrice>200 TRAN</EventPrice>
            </InfoContainer>
            <ActionsContainer>
              <Button 
                title="Comprar"
              />
            </ActionsContainer>
          </EventCard>
        </EventListContainer>
      </DashboardContainer>
    </Container>    
  );
}