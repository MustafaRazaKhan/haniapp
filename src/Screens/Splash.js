import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, RefreshControl } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  // Navigate to Drawer (Home) after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Drawer');
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation, refreshing]);

  // Refresh handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Animatable.Text animation="pulse" 
        iterationCount="infinite" duration={1000} style={styles.heading}>
        HANI GOLDS
      </Animatable.Text>
      
      <Animatable.Image 
        animation="pulse" 
        iterationCount="infinite"
        source={require("../../assets/logo.jpeg")} // Replace with your image URL
        style={styles.image}
      />
      
      <Animatable.Text animation="fadeInUp" delay={500} style={styles.trustedText}>
        Trusted Brand
      </Animatable.Text>
    </ScrollView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Softer background for a more refined look
    paddingVertical: 50,
  },
  heading: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#b8860b', // Golden title color
    textShadowColor: '#8b6508',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1.2,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: 'orange', // Shiny gold border
    shadowColor: '#8b6508',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  trustedText: {
    fontSize: 20,
    color: '#a9a9a9',
    marginTop: 30,
    fontStyle: 'italic',
    textShadowColor: '#d3d3d3',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
