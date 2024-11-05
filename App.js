import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/Context/Auth';
import { ProductProvider } from './src/Context/Product';

export default function App() {
  return (
    <AuthProvider>
    <ProductProvider>
    <NavigationContainer>
    <AppNavigator/>
    </NavigationContainer>
    </ProductProvider>
    </AuthProvider>
  );
}


