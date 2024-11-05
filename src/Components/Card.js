import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../Context/Auth';

const Card = ({ curEle, navigation }) => {
  const { designName,purity, subCategory, photoPaths, remark, grossWeight, netWeight } = curEle;
  const { userInfo } = useAuth().state;

  // Navigate to ProductDetail
  const handleNavigate = (id) => {
    navigation.navigate("ProductDetail", {
      category: curEle.category,
      productId: id, // Pass product ID for details
    });
  };

  return (
    <TouchableOpacity onPress={() => handleNavigate(curEle._id)}>
      <View style={styles.cardChild}>
        {/* Heading */}
        <Text style={styles.heading}>{subCategory}</Text>

        {/* Image container */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: `https://hanibackendapp.onrender.com/${photoPaths}` }} style={styles.image} />
        </View>

        {/* Product details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.description}>{remark}</Text>
          <View style={styles.weightsContainer}>
            <Text style={styles.weightText}>Gross Weight: {grossWeight} g</Text>
            <Text style={styles.weightText}>Net Weight: {netWeight} g</Text>
            <Text style={styles.weightText}>Purity: {purity} k</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardChild: {
    width: 300, // Width of the card
    height: 360, // Height of the card
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 1,
    marginBottom: 20,
    overflow: 'hidden',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    backgroundColor: '#6c84fc', // Hot pink color for heading
    color: '#fff', // White text color for contrast
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    textTransform:"capitalize"
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    marginVertical: 5,
  },
  image: {
    width: 250, // Width of the image
    height: 140, // Height of the image
    borderRadius: 2,
  },
  detailsContainer: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  weightsContainer: {
    marginBottom: 15,
  },
  weightText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  button: {
    backgroundColor: '#fe1e7d', // Hot pink background for the button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
