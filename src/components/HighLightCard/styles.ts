import styled, { css } from 'styled-components/native';
import { RFValue}  from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'; 


interface TypeProps {
    type: 'up' | 'down' | 'total'
}



export const Container = styled.View<TypeProps>`

background-color: ${({ theme, type }) => 
type === 'total' ? theme.colors.secondary : theme.colors.shape};

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

export const Title = styled.Text<TypeProps>`
font-family: ${({ theme }) => theme.fonts.regular };
font-size: ${RFValue(15)}px;
color: ${({ theme, type }) => 
type === 'total' ? theme.colors.shape : theme.colors.dark};
` ;

export const Icon = styled(MaterialIcons)<TypeProps>`

font-size: ${RFValue(34)}px;
${({type}) => type === 'up' && css`
color: ${({ theme }) => theme.colors.success};
`};
${({type}) => type === 'down' && css`
color: ${({ theme }) => theme.colors.attention};
`};
${({type}) => type === 'total' && css`
color: ${({ theme }) => theme.colors.success};
`};

`;

export const Footer = styled.View`

`;

export const Amount = styled.Text<TypeProps>`
font-family: ${({ theme }) => theme.fonts.medium };
font-size: ${RFValue(32)}px;

margin-top: 39px;
color: ${({ theme, type }) => 
type === 'total' ? theme.colors.shape : theme.colors.dark};



`;

export const LastTransaction = styled.Text<TypeProps>`
font-family: ${({ theme }) => theme.fonts.regular };

font-size: ${RFValue(12)}px;
color: ${({ theme, type }) => 
type === 'total' ? theme.colors.dark : theme.colors.dark};;
`;




