import React from 'react';
import { Button } from '../../components/Form/Button';

import { Input } from '../../components/Form/index';

import { 
    Container,
    Title,
    Header,
    Form,
    Field,
   
 } from './styles'

export function Register() {
    return (
        <Container>
            
            <Header>
                <Title>Cadastro</Title>
            </Header>   
        
          
          <Form>
              <Field> 
              <Input
           placeholder="Nome"
           />
           <Input
           placeholder="Nome"
           />
           
                  
              </Field>
              <Button title="Cadastrar" />
           </Form>

          
         
          
        </Container>

    )
}