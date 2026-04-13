import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import Edit from '../Paginas/pagsDrawer/editPerfil';

const Drawer = createDrawerNavigator();

const Drawer_ = () => {
    const Custom = (props) => {
        return(
            <DrawerContentScrollView {...props} style={styles.itemList}>
                <DrawerItemList {...props} />  
                <DrawerItem 
                    style={styles.item}
                    label='Sobre'/>

            </DrawerContentScrollView>
        );
    }

    return (
       <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <Custom {...props} />}
        screenOptions={{
            headerShown:false
            }}
            >
        <Drawer.Screen name='Editar' component={Edit}/>
       </Drawer.Navigator>
  );
}

const styles=StyleSheet.create({
    itemList:{
        backgroundColor:'lightgray',
    },
    item:{
        color:'#2e2e2e'
    }
});
export default Drawer_;