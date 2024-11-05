import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactPage = () => {
  const phone = "+123 456 7890";
  const address = "123 Main St, Anytown, USA";
  const email = "contact@example.com";

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  const openSocialMedia = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Get in Touch with Us</Text>

      {/* Contact Card */}
      <View style={styles.contactCard}>
        <View style={styles.contactRow}>
          <Icon name="phone" size={28} color="#4CAF50" />
          <Text style={styles.contactText} onPress={handlePhonePress}>
            {phone}
          </Text>
        </View>

        <View style={styles.contactRow}>
          <Icon name="map-marker" size={28} color="#FF5722" />
          <Text style={styles.contactText}>{address}</Text>
        </View>

        <View style={styles.contactRow}>
          <Icon name="envelope" size={28} color="#3B5998" />
          <Text style={styles.contactText} onPress={handleEmailPress}>
            {email}
          </Text>
        </View>
      </View>

      {/* Social Media Links */}
      <Text style={styles.socialHeading}>Connect with Us</Text>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity onPress={() => openSocialMedia("https://facebook.com")} style={[styles.socialIcon, { backgroundColor: '#3b5998' }]}>
          <Icon name="facebook" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openSocialMedia("https://twitter.com")} style={[styles.socialIcon, { backgroundColor: '#1DA1F2' }]}>
          <Icon name="twitter" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openSocialMedia("https://instagram.com")} style={[styles.socialIcon, { backgroundColor: '#C13584' }]}>
          <Icon name="instagram" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    letterSpacing: 1,
  },
  contactCard: {
    width: '90%',
    padding: 25,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    marginBottom: 30,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  contactText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#444',
    textDecorationLine: 'underline',
  },
  socialHeading: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 15,
    color: '#666',
    letterSpacing: 0.5,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 10,
  },
  socialIcon: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 4,
  },
});

export default ContactPage;
