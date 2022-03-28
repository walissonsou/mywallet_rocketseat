import styled from 'styled-components/native';
import { RFValue}  from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'; 







export const Container = styled.View`
background-color: ${({theme}) => theme.colors.shape};
width:${RFValue(300)}px;
height:200px;

margin-right: 15px;
border-radius: 5px;
padding: 19px 23px;
padding-bottom:${RFValue(42)}px;

`;

export const Header = styled.View`


flex-direction: row;
align-items: flex-start;
justify-content: space-between;


`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular };
font-size: ${RFValue(15)}px;
color: ${({theme}) => theme.colors.dark};
` ;

export const Icon = styled(MaterialIcons)`
color: ${({theme}) => theme.colors.success};
font-size: ${RFValue(34)}px;
`;

export const Footer = styled.View`

`;

export const Amount = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium };
font-size: ${RFValue(32)}px;
color: ${({theme}) => theme.colors.dark};
margin-top: 39px;



`;

export const LastTransaction = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular };
color: ${({theme}) => theme.colors.text};
font-size: ${RFValue(12)}px;
`;




