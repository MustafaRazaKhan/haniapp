import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const AboutPage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Main Heading */}
      <Text style={styles.heading}>About Us</Text>

      {/* Company Description */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FontAwesome5 name="building" size={24} color="#4a90e2" />
          <Text style={styles.subheading}>Who We Are</Text>
        </View>
        <Text style={styles.description}>
          We are a leading jewelry brand committed to quality and elegance. Founded in 2010, we’ve grown from a family business into an international brand, renowned for unique designs and exceptional service.
        </Text>
      </View>

      {/* Mission Statement */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
        <MaterialIcons name="flag" size={24} color="#4a90e2" />

          <Text style={styles.subheading}>Our Mission</Text>
        </View>
        <Text style={styles.description}>
          To create timeless jewelry that inspires beauty and confidence. Sustainability and ethical sourcing are core values, ensuring our jewelry looks good and does good.
        </Text>
      </View>

      {/* Meet the Team */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FontAwesome5 name="users" size={24} color="#4a90e2" />
          <Text style={styles.subheading}>Meet Our Team</Text>
        </View>
        <Text style={styles.description}>
          Our team comprises skilled artisans and designers who bring our vision to life, ensuring every customer’s experience is exceptional.
        </Text>

        {/* Team Members */}
        <View style={styles.teamContainer}>
          <View style={styles.teamMember}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Emma Johnson</Text>
            <Text style={styles.teamRole}>Head of Design</Text>
          </View>
          <View style={styles.teamMember}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>David Williams</Text>
            <Text style={styles.teamRole}>Marketing Director</Text>
          </View>
          <View style={styles.teamMember}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.teamImage}
            />
            <Text style={styles.teamName}>Sophia Lee</Text>
            <Text style={styles.teamRole}>Customer Relations</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4a90e2',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  teamMember: {
    alignItems: 'center',
    width: 100,
  },
  teamImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    borderColor: '#4a90e2',
    borderWidth: 2,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  teamRole: {
    fontSize: 14,
    color: '#888',
  },
});

export default AboutPage;
