import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Products from './Products';
import Cart from './Cart';
import Home from './Home';
import { useAuth } from '../Context/Auth';
import About from './About';
import Contact from './Contact';
import Whatsapp from '../Components/Whatsapp';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const  {state} = useAuth();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName  = <AntDesign name="home" size={24} color={focused?"tomato":"black"} />;
        } else if (route.name === 'Products') {
          iconName = <FontAwesome name="product-hunt" size={24} color={focused?"tomato":"black"}  /> ;
        } 
        else if (route.name === 'Cart') {
          iconName = <AntDesign name="shoppingcart" color={focused?"tomato":"black"}   size={24} />;
        }
        else if (route.name === 'About') {
          iconName = <Image source={require("../../assets/person.png")} style={{width:30,height:30}} />;
        }
        else if (route.name === 'Contact') {
          iconName = <AntDesign name="contacts" color={focused?"tomato":"black"}   size={24} />;
        }
        return iconName ;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    
    <Tab.Screen 
      name="Home" 
      component={Home} 
      options={
        ({ navigation }) => ({
        headerShown: true,
         headerLeft: () => (
          <Entypo
            name="menu"
            size={24}
            color="tomato"
            onPress={() => navigation.toggleDrawer()} // Toggle the drawer menu
            style={{ marginLeft: 20,fontWeight:"bold" }}
          />
        ),
         headerRight: () => (
         <Whatsapp/>
        ),
        headerTitleStyle: {
          // Add your styles here
          fontWeight: 'bold', // Example style
          color: 'black', 
          // Example style
        },
        headerStyle: {
          backgroundColor: 'white', // Background color for header
          elevation: 4, // Set elevation for Android shadow effect
         // Set custom height for header
        },
        title: 'Home',
        headerTitle:"HANI GOLDS"
       
      }
    
    )
     
  
    } 
    />
    
   {
    state.userInfo.token? (<>
     <Tab.Screen 
  name="Products"
  component={Products} 
  options={{
    headerShown: true,
    title: 'Products', // Title for the header
    headerTitleStyle: {
      fontWeight: 'bold', // Example style
      color: 'black', 
    },
     headerTitle:"PRODUCTS",
    headerStyle: {
      backgroundColor: 'white', // Background color for header
      elevation: 4, // Set elevation for Android shadow effect
       // Set custom height for header
    },
  }}
/>
    
    <Tab.Screen 
      name="Cart" 
      component={Cart} 
      options={{
        headerShown: true,
        title: 'Cart', // Title for the header
        headerTitleStyle: {
          fontWeight: 'bold', // Example style
          color: 'black', 
        },
        headerStyle: {
          backgroundColor: 'white', // Background color for header
          elevation: 4, // Set elevation for Android shadow effect
    
        },
        headerTitle:"CART ITEMS"
      }}
    />
    </>):(<>
      <Tab.Screen 
        name="About"
        component={About} 
        options={{
          headerShown: true,
          title: 'About', // Title for the header
          headerTitleStyle: {
            fontWeight: 'bold', // Example style
            color: 'black', 
          },
           headerTitle:"About",
          headerStyle: {
            backgroundColor: 'white', // Background color for header
            elevation: 4, // Set elevation for Android shadow effect
       // Set custom height for header
    },
  }}
/>
<Tab.Screen 
  name="Contact"
  component={Contact} 
  options={{
    headerShown: true,
    title: 'Contact', // Title for the header
    headerTitleStyle: {
      fontWeight: 'bold', // Example style
      color: 'black', 
    },
     headerTitle:"Contact",
    headerStyle: {
      backgroundColor: 'white', // Background color for header
      elevation: 4, // Set elevation for Android shadow effect
       // Set custom height for header
    },
  }}
/>



</>

)
   }
  </Tab.Navigator>
  
  )
}

export default TabNavigation

const styles = StyleSheet.create({})