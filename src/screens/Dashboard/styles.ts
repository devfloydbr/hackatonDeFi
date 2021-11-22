import styled from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

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

export const Content = styled.View`
  flex: 1;  
`;

export const Mnemonic = styled.Text`
  
`;

export const DashboardContainer = styled.ScrollView`
  flex: 1;

  padding: 0 16px;
`;

export const EventHighlightContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: ${RFValue(25)}px;
`;

export const EventHighlightText = styled.Text`
  margin-top: ${RFValue(25)}px;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const EventHighlightCard = styled.ImageBackground`
  height: ${RFPercentage(15)}px;
  width: ${RFValue(250)}px;

  margin-right: 16px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const EventTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const EventListContainer = styled.View`
  flex: 1;

  padding: 20px 0;
`;

export const EventCard = styled.View`
  width: 100%;
  flex-direction: row;

  margin-top: ${RFValue(10)}px;


  justify-content: space-between;
`;

export const EventImage = styled.ImageBackground`
  height: ${RFPercentage(10)}px;
  width: ${RFPercentage(10)}px;
`;

export const Overlay = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;


  background-color: rgba(100, 100, 100, 0.5);
`;


export const EventImageContainer = styled.View``;
export const InfoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;
export const ActionsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EventCardTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const InfoTextContainer = styled.View`
  justify-content: flex-start;
`;

export const BuyButton = styled.TouchableOpacity`

`;

export const EventPrice = styled.Text`

`;