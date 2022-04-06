import React from 'react';
import { Platform } from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator();
import { Register } from '../screens/Register';
import { useTheme } from 'styled-components'
import { Dashboard } from '../screens/Dashboard';

export function AppRoutes(){
    const theme = useTheme();
    return(

        <Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.primary,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                height: 88,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            }
        }}      
        >            
            <Screen
            name="Listagem"
            component={Dashboard}             
            />
            <Screen
            name="Cadastro"
            component={Register}             
            />
            <Screen
            name="Resumo"
            component={Register}          
            />              
         </Navigator>
    )
}


