import React, { useState } from 'react';

import { Modal } from 'react-native'

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/index';

import { TransactionTypeButton } from '../../components/Form/TransactionsTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';

import { 
    Container,
    Title,
    Header,
    Form,
    Field,
    TransactionTypes,   
 } from './styles'
export function Register() {
    const [ transactionType, setTransactionType] = useState('')

function handleTransactionTypeButtonSelected(type: 'up' | 'down') {
    setTransactionType(type);
}


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
           placeholder="Valor"
           />

    
        <TransactionTypes>

        <TransactionTypeButton           
           type="up"
           title="Income" 
           onPress={() => handleTransactionTypeButtonSelected('up')}
           isActive={transactionType === 'down'}
           />

        <TransactionTypeButton           
           type="down"
           title="Outcome" 
           onPress={() => handleTransactionTypeButtonSelected('up')}
           isActive={transactionType === 'up'}
           
           
           />
        </TransactionTypes>
   
                  <CategorySelect title="Cadastro" />

              </Field>
              <Button title="Cadastrar" />

           </Form>               
          
        </Container>

    )
}