import { StyleSheet, Text, View, TouchableOpacity,Linking } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import * as Linking from 'expo-linking';

const Whatsapp = () => {
  const openWhatsApp = () => {
    const phoneNumber = '919927382851'; // Country code + phone number without '+'
const url = `whatsapp://send?phone=${phoneNumber}`;


    Linking.openURL(url).catch(() => {
      alert("WhatsApp is not installed on your device.");
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openWhatsApp} style={styles.button}>
        <Icon name="whatsapp" size={35} color="#25D366" />
      
      </TouchableOpacity>
    </View>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    // alignItems: 'center',
    // justifyContent:'center'
    marginRight:10
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#25D366',
    fontWeight: 'bold',
  },
});
