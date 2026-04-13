import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from './CustomTab';

import Profile from '../Paginas/pagProfile';
import Quadras from '../Paginas/pagQuadras';
import Principal from '../Paginas/pagPrincipal';

const Tab = createBottomTabNavigator();

export default function MainTab() {
    return(
    <Tab.Navigator 
    tabBar={props=><CustomTabBar {...props}/>}     
    initialRouteName={'Principal'}
        screenOptions={{
            headerShown: false
          }}   
        >
        <Tab.Screen name='Quadras' component={Quadras}/>
        <Tab.Screen name ='Principal' component={Principal} />
        <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
    );
}