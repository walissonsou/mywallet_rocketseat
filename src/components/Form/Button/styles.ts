import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'



import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
background-color: ${({theme}) => theme.colors.secondary};
width: 100%;

padding: 18px;
border-radius: 5px;
align-items: center;



`;

export const Title = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({theme}) => theme.fonts.regular };
color: ${({theme}) => theme.colors.shape}
`;

