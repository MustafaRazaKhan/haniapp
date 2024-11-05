import React, { useEffect, useRef, useState } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions } from "react-native";

const Slider = () => {
  const flatRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (images.length > 0 && flatRef.current) {
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        flatRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setActiveIndex(nextIndex);
      }
    }, 3000); // Adjusted interval for smoother auto-scrolling
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  const screenWidth = Dimensions.get("window").width;

  const renderItem = ({ item }) => (
    <View style={{ width: screenWidth }}>
      <Image
       source={{ uri: `data:${item.contentType};base64,${item.data.toString('base64')}` }}
  // style={{ width: 100, height: 100 }}
        style={styles.image}
      />
    </View>
  );

  const renderDotIndicator = () => (
    <View style={styles.dotContainer}>
      {images.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: activeIndex === index ? "blue" : "gray" },
          ]}
        />
      ))}
    </View>
  );

  const handleScroll = (e) => {
    const scrollPosition = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollPosition / screenWidth);
    setActiveIndex(currentIndex);
  };

  const getItemLayout = (_, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        getItemLayout={getItemLayout}
        ref={flatRef}
        showsHorizontalScrollIndicator={false}
      />
      {renderDotIndicator()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 4,
  },
});

export default Slider;
