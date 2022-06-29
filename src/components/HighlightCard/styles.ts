import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons'
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  background-color: ${ ({theme}) => theme.colors.SHAPE };
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: 16px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const Title = styled.Text``;

export const Icon = styled(Feather)`
 font-size: ${RFValue(40)}px;`;

export const Footer = styled.View``;

export const Amount = styled.Text`
 font-family: ${ ({theme}) => theme.fonts.MEDIUM };
 font-size: ${RFValue(31)}px;
 color: ${ ({theme}) => theme.colors.TEXT_DARK };

 margin-top: 38px;
`;

export const LastTransaction = styled.Text``;