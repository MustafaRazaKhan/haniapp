import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './src/Screens/Register'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/Screens/Login';
import TabNavigation from './src/Screens/TabNavigation';


const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return <Drawer.Navigator >
  <Drawer.Screen name="Homeg" component={TabNavigation} options={{
    headerShown:false
  }} />
  <Drawer.Screen name="Login" component={Login} />
  <Drawer.Screen name="Register" component={Register} />
</Drawer.Navigator>
    
  
}

export default AppNavigator

const styles = StyleSheet.create({})