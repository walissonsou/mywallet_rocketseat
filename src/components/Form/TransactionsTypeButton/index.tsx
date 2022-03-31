import React from 'react-native';
import { TouchableOpacityProps } from 'react-native';

import { Feather } from '@expo/vector-icons'; 

import { 
    Container,
    Title,
    Icon,
    } from './styles'
const icons = {
        up:"arrow-up-circle",
        down:"arrow-down-circle",
    }

interface Props extends TouchableOpacityProps {
        title: string;
        type: 'up' | 'down';
       
    }

export function TransactionTypeButton ({type, title, ...rest}: Props){
    return (


        <Container {...rest}> 
                <Icon 
                name={icons[type]} 
                type={type}
                />
                <Title> Income </Title>

        </Container>
    )
}