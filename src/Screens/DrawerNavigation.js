import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Register from './Register';
import TabNavigation from './TabNavigation';
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  return <Drawer.Navigator >
    <Drawer.Screen name="Account" component={TabNavigation} options={({ navigation }) => ({
        headerShown: false,
        headerTitle:"HANI GOLDS",
        headerTitleStyle:{
          color:"blue",
          fontWeight:"bold",
          marginHorizontal:20
        },
        title: 'Home',
      
      })}  />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Register" component={Register} />
</Drawer.Navigator>
    
  
}


const styles = StyleSheet.create({})
export default DrawerNavigation