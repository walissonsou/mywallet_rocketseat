import React from 'react';


import { 
Container, 
Amount,
Footer,
Date,
Icon,
Title,
Category,
CategoryName,
 } from './styles'


interface categoryprops {
    name: string; // salário mensal
    icon: string;
}

export interface TransactionsCardsProps {
        type: 'positive' | 'negative';
        title: string;
        amount: string;
        category: categoryprops;
        date: string;
        
}
interface Props {
    data: TransactionsCardsProps;
}
 

export function TransactionsCards({ data } : Props) { 


    return (
    <Container >

        <Title>
             { data.title} 
        </Title>
        <Amount type={data.type}> {data.type === 'negative' && '- '}
            {data.amount}
        </Amount>
        <Footer>
            <Category>
            <Icon name={ data.category.icon}/>
            <CategoryName>
                { data.category.name}
            </CategoryName>
            </Category>

            <Date>{data.date}</Date>
        </Footer>

    </Container>
    )
}