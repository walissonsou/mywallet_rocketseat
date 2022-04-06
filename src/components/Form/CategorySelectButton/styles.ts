import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled(RectButton).attrs({
    activeOpacity: 0.7


}) `
margin-top: 16px;
background-color: ${({ theme} ) => theme.colors.text};
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 16px 18px;
`;

export const Category = styled.Text`


`;

export const Icon = styled(Feather)`
font-size: 16px;
`;


