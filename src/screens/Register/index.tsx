import React, { useState } from 'react';

import { Modal } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input/index';
import { InputForm } from '../../components/Form/InputForm'
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

 interface FormData{
     name: string;
     amount: string,

 }
export function Register() {    
    const [ transactionType, setTransactionType] = useState('')
    const [ categoryModal, setCategoryModalOpen] = useState(false)

    const [category, setCategory] = useState({
        key:'category',
        name: 'Categoria',
});
    const {
        control,
        handleSubmit,
            } = useForm(); // extrair algumas propriedades relevantes do useForm

function handleTransactionTypeButtonSelected(type: 'up' | 'down') {
    setTransactionType(type);
}
function handleOpendModal () {
    setCategoryModalOpen(true)
}
function handleCloseModal () {
    setCategoryModalOpen(false)
}

function handleRegister(form: FormData) {
    const data = {
        name: form.name,
        amount: form.amount,
        transactionType,
        category: category.key,
    }

     console.log(data)
}
    return (
        
    <Container>            
            <Header>
                    <Title>Cadastro</Title>
            </Header>                    
            <Form>
                <Field>                     
                <InputForm
                name='name'
                control={control}
                placeholder="Nome"
                autoCapitalize="words"
                autoCorrect={false}                
                />         
                <InputForm
                name='amount'
                control={control}
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
                <CategorySelectButton 
                    onPress={handleOpendModal}
                    title={category.name} />
                </Field>
                <Button title="Cadastrar"
                onPress={handleSubmit(handleRegister)}
                
                
                />
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