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

interface Props {
    data: {
        title: string;
        amount: string;
        category: categoryprops;
        date: string;
        }
}
 

export function TransactionsCards({ data } : Props) { 

    return (
    <Container >

        <Title>
             { data.title} 
        </Title>
        <Amount>
            { data.amount}
        </Amount>
        <Footer>
            <Category>
            <Icon name="attach-money"/>
            <CategoryName>
                { data.category.name}
            </CategoryName>
            </Category>

            <Date>{data.date}</Date>
        </Footer>

    </Container>
    )
}