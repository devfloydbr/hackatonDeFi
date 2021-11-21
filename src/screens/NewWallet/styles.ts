import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: ${RFValue(50)}px;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Content = styled.ScrollView`
  flex: 1;  
`;

export const Mnemonic = styled.Text`
  
`;