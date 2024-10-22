import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName  = <AntDesign name="home" size={24} color={focused?"tomato":"black"} />;
        } else if (route.name === 'Products') {
          iconName = <FontAwesome name="product-hunt" size={24} color={focused?"tomato":"black"}  /> ;
        } else if (route.name === 'Cart') {
          iconName = <AntDesign name="shoppingcart" color={focused?"tomato":"black"}  />;
        }
  
        return iconName ;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    
    <Tab.Screen 
      name="Home" 
      component={Home} 
      options={({ navigation }) => ({
        headerShown: true,
        title: 'HANI GOLDS',
        headerLeft: () => (
          <AntDesign
            name="menuunfold"
            size={24}
            color="tomato"
            onPress={() => navigation.toggleDrawer()} // Toggle the drawer menu
            style={{ marginLeft: 5,fontWeight:"bold" }}
          />
        ),
      })} 
    />
    
    <Tab.Screen 
      name="Products" 
      component={Products} 
      options={{
        headerShown: true,
        title: 'Our Products',
        headerLeft: ()=>{
          return null
        }, // No icon on this screen
      }}
    />
    
    <Tab.Screen 
      name="Cart" 
      component={Cart} 
      options={({ navigation }) => ({
        headerShown: navigation.getState().routes[navigation.getState().index].name === 'Cart',
        title: navigation.getState().routes[navigation.getState().index].name === 'Cart' ? 'Your Cart' : 'Welcome',
      })} 
    />
  </Tab.Navigator>
  
  )
}

export default TabNavigation

const styles = StyleSheet.create({})