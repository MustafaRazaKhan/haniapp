import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (<NavigationContainer>
    <AppNavigator/>
    </NavigationContainer>
  );
}


