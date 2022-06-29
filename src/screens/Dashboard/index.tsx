
import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
} from './styles'

const uri = 'https://avatars.githubusercontent.com/u/20031882?v=4'
export function Dashboard() {
  return (
   <Container>
     <Header>
       <UserWrapper>
        <UserInfo>
          <Photo source={{uri: uri}}/>
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>brmonte</UserName>
          </User>
        </UserInfo>
        <Icon name='power' />
      </UserWrapper>
     </Header>

      <HighlightCards >
          <HighlightCard/>
          <HighlightCard/>
          <HighlightCard/>
      </HighlightCards>
     
   </Container>
  )
}