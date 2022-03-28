import React from 'react'

import { HighLightCard } from '../../components/HighLightCard';


import {Text, View } from 'react-native'
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

} from './style'

export function Dashboard(){
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
            <HighLightCard />
            <HighLightCard />
            <HighLightCard />
            </HighLightCards>
        </Container>
        
        
    )
}

