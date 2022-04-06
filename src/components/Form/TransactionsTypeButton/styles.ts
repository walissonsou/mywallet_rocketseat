import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
    type: 'up' | 'down';
}
interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}
export const Container = styled(RectButton)<ContainerProps>`
    margin-top:    ${RFValue(16)}px;
    width:         48%;
    border:        1.5px solid ${({theme }) => theme.colors.text};
    border-width: ${({ isActive}) => isActive ? 0 : 1.5}px;
    border-radius: 5px;
    flex-direction:row;
    
    padding:       16px;  

    align-items:     center;
    justify-content: center;

    ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.attention}}
    `};
    ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.success}}
    `}
   
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    `;


export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right:${RFValue(12)}px;


    color: ${({ theme, type }) =>
    type  === 'down' ? theme.colors.attention : theme.colors.success}
    `;