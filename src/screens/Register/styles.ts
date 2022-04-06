import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`

flex:1;
`;
export const Header = styled.View`
    width: 100%;
    height:${RFPercentage(22)}px;

    align-items: center;
    justify-content: flex-end;

    padding-bottom: 22px;

    font-size:         ${RFValue(22)};
    background-color:  ${({ theme}) => theme.colors.primary};


`;


export const Title = styled.Text`

    font-family: ${({ theme }) => theme.fonts.medium};
    font-size:   ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.dark};



`;

export const Form = styled.View`
flex: 1;
width: 100%;

justify-content: space-between;

padding: 24px;


`;

export const Field = styled.View`

`;


export const TransactionTypes = styled.View`
flex-direction: row;
justify-content: space-between;

`;


