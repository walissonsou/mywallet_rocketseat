import React, { useState } from 'react';

import { Modal } from 'react-native'

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/index';

import { TransactionTypeButton } from '../../components/Form/TransactionsTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect/index'

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
    const [ categoryModal, setCategoryModalOpen] = useState(false)

    const [category, setCategory] = useState({
        key:'category',
        name: 'Categoria',
});
function handleTransactionTypeButtonSelected(type: 'up' | 'down') {
    setTransactionType(type);
}
function handleOpendModal () {
    setCategoryModalOpen(true)
}
function handleCloseModal () {
    setCategoryModalOpen(false)
}
    return (
    <Container>            
            <Header>
                    <Title>Cadastro</Title>
            </Header>                    
            <Form>
                <Field> 
                <Input placeholder="Nome"/>         
                <Input placeholder="Valor" />    
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
                <CategorySelectButton 
                    onPress={handleOpendModal}
                    title={category.name} />
                </Field>
                <Button title="Cadastrar" />
            </Form>       

            <Modal visible={categoryModal}> 
            <CategorySelect 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseModal}             
            />
            </Modal>       
    </Container>

    )
}