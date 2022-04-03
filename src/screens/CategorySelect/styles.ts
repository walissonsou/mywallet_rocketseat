import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import theme from "../../global/styles/theme";

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex:             1;
    background-color: ${({ theme}) => theme.colors.secondary_light};

`;
export const Header = styled.View`
    width:  100%;
    height: ${RFPercentage(22)}px;
    align-items:     center;
    justify-content: flex-end;
    padding-bottom:  22px;
    background-color:  ${({ theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size:   ${RFValue(18)}px;
    color:       ${({ theme }) => theme.colors.dark};
`;
export const Category = styled.TouchableOpacity<CategoryProps>`
    flex-direction: row;
    align-items:    center;
    padding:        ${RFValue(18)}px;

    background-color: ${({ isActive}) => 
isActive ? theme.colors.secondary : theme.colors.background};
`;
export const Icon = styled(Feather)`
    font-size:   ${RFValue(14)}px;
`;
export const Name = styled.Text`
    font-size:   ${RFValue(14)}px;
    font-family:  ${({ theme }) => theme.fonts.regular};
    margin-left:  16px;
`;
export const Separator = styled.View`
    height: 2px;
    width:  100%;
    background-color:  ${({ theme}) => theme.colors.dark};
`;
export const Footer = styled.View`
    width:     100%;
    padding:   ${RFValue(24)}px;
`;


