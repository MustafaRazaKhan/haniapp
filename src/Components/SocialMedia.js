import { StyleSheet, Text, View, TouchableOpacity, Linking, Animated } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SocialMedia = () => {
  const [scale] = useState(new Animated.Value(1));

  const handleIconPress = (url) => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Linking.openURL(url);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect with Us</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handleIconPress('https://www.facebook.com/YOUR_FACEBOOK_PAGE')}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Icon name="logo-facebook" size={50} color="#3b5998" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handleIconPress('tel:+919927382851')}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Icon name="call" size={50} color="#0db685" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handleIconPress('https://www.instagram.com/YOUR_INSTAGRAM_HANDLE')}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Icon name="logo-instagram" size={50} color="#C13584" />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Light background color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50, // Round buttons
    backgroundColor: '#fff', // White background for buttons
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});
