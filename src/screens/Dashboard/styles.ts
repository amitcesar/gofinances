import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const Container = styled.View`
flex: 1;
background-color: ${ ({theme}) => theme.colors.BACKGROUND };
`

export const Header = styled.View`
width: 100%;
height: ${RFPercentage(42)}px;
background-color: ${ ({theme}) => theme.colors.PRIMARY};

justify-content: center;
align-items: flex-start;
flex-direction: row;
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
 color: ${ ({theme}) => theme.colors.SHAPE};
 font-family: ${ ({theme}) => theme.fonts.REGULAR};
 font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: ${ ({theme}) => theme.colors.SHAPE};
  font-family: ${ ({theme}) => theme.fonts.BOLD};
  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
  color: ${ ({theme}) => theme.colors.SECONDARY};
 font-size: ${RFValue(24)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;


  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-family: ${ ({theme}) => theme.fonts.REGULAR};
  font-size: ${RFValue(18)}px;

  margin-bottom: 16px;
`;


