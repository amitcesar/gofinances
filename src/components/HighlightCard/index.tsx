import React from 'react'

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles'

export  function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name='arrow-up-circle' />
      </Header>

      <Footer>
        <Amount>R$ 3.000.000,00</Amount>
        <LastTransaction>Ultima Entrada dia 26 de junho</LastTransaction>
      </Footer>
    </Container>
  )
}