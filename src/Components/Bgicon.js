import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const Bgicon = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://hanibackendapp.onrender.com/api/photo/photos');
        const data = await response.json();

        if (data.success) {
          setImages(data.allPhotos); // Set the fetched images
        } else {
          console.error(data.msg);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <View>
      {images.length > 0 && (
        <Image
          source={{ uri: `data:${images[0].contentType};base64,${images[0].data}` }}
          style={{ width: 380, height: 300 }}
        />
      )}
    </View>
  );
};

export default Bgicon;

const styles = StyleSheet.create({});
