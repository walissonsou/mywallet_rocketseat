import React from 'react';

import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input/index';

import { Container } from './styles'

interface Props extends TextInputProps {
    control: Control;
    name: string;
}

export function InputForm({
    control,
    name,
    ...rest
}: Props) {
    return (
        <Container>
            <Controller
            control={control}
            render ={({ field: { onChange, value }}) => ( //Qual input que vou renderizar //
                <Input
                onChangeText={onChange}
                value={value}
                {...rest}
                 />
            )}        
            name={name}
            />       
         </Container>


    )

}