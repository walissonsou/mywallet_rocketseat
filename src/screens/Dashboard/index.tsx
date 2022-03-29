import React from 'react'

import { HighLightCard } from '../../components/HighLightCard';
import { TransactionsCards } from '../../components/TransactionsCards';

import {Text, View, } from 'react-native'
import { 
    Container , 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGretting,
    UserName,
    Icon,
    HighLightCards,
    Transactions,
    Title,
    TransactionsList

} from './style'

import { getBottomSpace } from 'react-native-iphone-x-helper';

export function Dashboard(){
    const data = [{
        title:"Desenvolvimento de site" ,
        amount:"R$ 12.000,00",
        category:{
            name: 'Vendas',
            icon: 'attach-money',
            },
        date:"12-12-12"
    },
    {
        title:"Desenvolvimento de site" ,
        amount:"R$ 12.000,00",
        category:{
            name: 'Vendas',
            icon: 'attach-money',
            },
        date:"12-12-12"
    },
    {
        title:"Desenvolvimento de site" ,
        amount:"R$ 12.000,00",
        category:{
            name: 'Vendas',
            icon: 'attach-money',
            },
        date:"12-12-12"
    },
    {
        title:"Desenvolvimento de site" ,
        amount:"R$ 12.000,00",
        category:{
            name: 'Vendas',
            icon: 'attach-money',
            },
        date:"12-12-12"
    },
];
    return (        
        <Container>                            
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                         source={{uri: 'https://avatars.githubusercontent.com/u/88872797?v=4' }}
                        />
                        <User>
                            <UserGretting>Olá,</UserGretting>
                            <UserName>Walisson</UserName>
                        </User>
                    </UserInfo>
                    <Icon name='logout'/>
                </UserWrapper>
            </Header>


            <HighLightCards          
            >
            <HighLightCard 
                title="Entrada" 
                amount="R$ 20" 
                lastTransaction=" 23/04/2019"
                type="up" 
            />
            <HighLightCard 
                title="Saída" 
                amount="R$ 20" 
                lastTransaction=" 23/04/2019"
                type="down" 
            />
            <HighLightCard 
                title="Total" 
                amount="R$ 20" 
                lastTransaction=" 23/04/2019"
                type="total" 
            />
           
            </HighLightCards>

            
            <Transactions>
                
                <Title> Transações recentes </Title>
                <TransactionsList 
                data={data}
                renderItem={({ item }) => <TransactionsCards data={item} /> }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: getBottomSpace()
                }}
                />
           </Transactions>
            
        </Container>
        
        
    )
}

