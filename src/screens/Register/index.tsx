import React, { useState } from 'react';

import {
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
    Alert, } from 'react-native'
import { useForm } from 'react-hook-form'

import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

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
 } from './styles';
 
 export type FormData = {
    [name: string]: any;
  }
  
  const schema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    amount: Yup.number()
      .typeError("Informe um valor númerico")
      .positive("O valor não pode ser negativo")
      .required("O valor é obrigatório"),
  }).required();
 
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
        formState: { errors }        
    } = useForm({
                resolver: yupResolver(schema) 
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

function handleSubmitRegister(form: Partial<FormData>) { 
    if(!transactionType) {
      return Alert.alert('Selecione o tipo de transação');
    }

    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }

    const dataFormRegister = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log('Log: dataFormRegister', dataFormRegister)
  }
    return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>    
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
                error={ errors.name && errors.name.message}              
                />         
                <InputForm
                name='amount'
                control={control}
                placeholder="Valor"
                keyboardType="numeric"
                error={ errors.amount && errors.amount.message}                 
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
                onPress={handleSubmit(handleSubmitRegister)}
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
    </TouchableWithoutFeedback>  
    )
}