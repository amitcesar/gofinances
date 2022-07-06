import React from 'react';

import { 
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
 } from './styles';
export function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name='power'/>
          <CategoryName>Vendas</CategoryName>
        </Category>

        <Date>3/04/2020</Date>
      </Footer>
    </Container>
  )
}