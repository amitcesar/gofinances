import styled from 'styled-components/native'
import {Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize'

export const Container = styled.View`
flex: 1;
background-color: ${ ({theme}) => theme.colors.SHAPE };

border-radius: 5px;
padding: 17px 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${ ({theme}) => theme.fonts.REGULAR};
`;


export const Amount = styled.Text`

  font-size: ${RFValue(20)}px;
  font-family: ${ ({theme}) => theme.fonts.REGULAR};

  margin-top: 2px;
`;


export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${ ({theme}) => theme.colors.TEXT};
`;


export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${ ({theme}) => theme.colors.TEXT};

  margin-left: 16px;
`;


export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${ ({theme}) => theme.colors.TEXT};
`;