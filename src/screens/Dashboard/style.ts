import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {getStatusBarHeight}  from 'react-native-iphone-x-helper';


export const Container= styled.View`
    flex: 1;     
    background-color: ${({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
    width: 100%; 
    height:           ${RFPercentage(42)}px;

    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items:     center;
    flex-direction:  row;
`;
export const UserWrapper = styled.View`
    width:100%;
    height: ${RFPercentage(42)}px;

    margin-top: ${getStatusBarHeight() + RFValue(100)}px;
    padding: 0  ${RFValue(24)}px;     

    flex-direction:     row;
    justify-content:    space-between;
    align-items:        flex-start;
`;
export const UserInfo = styled.View`
    flex-direction: row;
    align-items:    center;
`;
export const Photo = styled.Image`

    width:  ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 10px;
`;
export const User = styled.View`
margin-left: 17px;
    `;
export const UserGretting = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    color:       ${({ theme }) => theme.colors.shape };
    font-size:   ${RFValue(18)}px;
`;
export const UserName = styled.Text`
    color:       ${({ theme }) => theme.colors.shape };
    font-family: ${({ theme }) => theme.fonts.bold };
    font-size:   ${RFValue(18)}px;
`;
export const Icon = styled(MaterialIcons)`
    color:       ${({theme}) => theme.colors.secondary};
    font-size:   ${RFValue(34)}px;
`;
export const HighLightCards = styled.ScrollView.attrs({
    horizontal: true, // scroll
    showsHorizontalScrollIndicator: true, //barrinha de rolagem
    contentContainerStyle: { paddingHorizontal: 24 },
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;

`;



