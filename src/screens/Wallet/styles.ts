import styled from 'styled-components/native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;

  background-color: #ccc;
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

export const WalletContainer = styled.ScrollView`
  flex: 1;

  padding: 0 16px;
`;

export const ResumeContainer = styled.View`
  margin-top: ${RFValue(25)}px;
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-around;

  background-color: ${({theme}) => theme.colors.shape};

  padding: 50px 25px;
`;

export const AssetContainer = styled.View`
  align-items: center;
`;

export const AssetName = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const AssetSymbol = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const AssetAmount = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const NftContainer = styled.View`
  margin-bottom: 15px;
`;

export const Nft = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NftImage = styled.ImageBackground`
  height: ${RFPercentage(50)}px;
  width: ${RFPercentage(50)}px;  
`;

export const NftTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.semiBold};

  text-align: center;

  margin: ${RFValue(16)}px 0;
`;

export const NftName = styled.Text`
margin-top: ${RFValue(10)}px;
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Nftsymbol = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;