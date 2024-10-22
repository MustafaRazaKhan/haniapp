import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Register from './Register';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
         <Drawer.Screen name="Login" component={Login} />
         <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})