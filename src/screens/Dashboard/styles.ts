import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
flex: 1;
background-color: ${ ({theme}) => theme.colors.BACKGROUND };
`

export const Header = styled.View`
width: 100%;
height: ${RFPercentage(42)}px;
background-color: ${ ({theme}) => theme.colors.PRIMARY};

justify-content: center;
align-items: center;
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

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
})``;