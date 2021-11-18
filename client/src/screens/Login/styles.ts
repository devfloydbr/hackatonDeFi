import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export const View = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.primary_light};
`;

export const Header = styled.View`
  height: ${RFPercentage(25)}px;
  background-color: ${({theme}) => theme.colors.background};

  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const LoginContainer = styled.View`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: ${RFPercentage(30)}px;

  background-color: ${({theme}) => theme.colors.secondary_dark};

  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.View`
  width: 80%;
`;  

export const BackgroundLogin = styled.ImageBackground`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;