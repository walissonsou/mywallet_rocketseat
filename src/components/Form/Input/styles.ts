import styled from "styled-components/native";
import { TextInput } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
width: 100%;
background-color: ${({ theme}) => theme.colors.secondary_light};

padding:       16px 18px;
border-radius: 4px;

margin-bottom: 10px;
font-size:   ${RFValue(16)}px;
font-family: ${({ theme }) => theme.fonts.medium};
`;
export const Form = styled.View`
padding: 25px;

`;
