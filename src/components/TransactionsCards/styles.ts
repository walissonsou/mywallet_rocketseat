import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface AmountProps {
    type: string;
}

export const Container = styled.View`

background-color: ${({theme}) => theme.colors.shape};
border-radius: 5px;
padding: 17px 24px;
margin-bottom: 16px;


`;
export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular };
font-size:   ${RFValue(14)}px;
`; 

export const Amount = styled.Text<AmountProps>`
font-size:   ${RFValue(20)}px;
margin-top: 2px;
font-family: ${({ theme }) => theme.fonts.regular };

color: ${({ theme, type}) =>
type === 'positive' ? theme.colors.success : theme.colors.attention };

`;
export const Footer = styled.View`
flex-direction: row ;
align-items: center;
justify-content: space-between;
margin-top: 19px;
color: ${({ theme}) =>  theme.colors.text};
`;
export const Category = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
font-size:   ${RFValue(20)}px;
`;
export const Icon = styled(MaterialIcons)`
color: ${({ theme}) =>  theme.colors.text};
font-size:   ${RFValue(20)}px;
margin-right: 17px;

`;
export const CategoryName = styled.Text`
color: ${({ theme}) =>  theme.colors.text};
font-size:   ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.regular };
`;

export const Date = styled.Text`
color: ${({ theme}) =>  theme.colors.text};
font-size:   ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.regular };
`;