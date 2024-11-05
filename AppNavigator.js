import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from './src/Screens/ProductDetail';
import DrawerNavigation from './src/Screens/DrawerNavigation';
import Product from './src/Screens/Product';
import Login from './src/Screens/Login';
import Splash from './src/Screens/Splash';
//  todo stack naviagtor container
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
       name="Splash"
        component={Splash}
        options={{ headerShown: false }}
        />
      <Stack.Screen
       name="Drawer"
        component={DrawerNavigation}
        options={{ headerShown: false }}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
