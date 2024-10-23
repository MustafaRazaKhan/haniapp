import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
// import Img from "react-native-image-slider";

const Slider = () => {
  const flatRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://img.freepik.com/premium-photo/minsk-belarus-august-2017-columns-guestroom-hall-reception-modern-luxury-hotel_97694-6572.jpg",
    "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
    "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
    "https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg",
    "https://static.gpexperiences.com/wp-content/uploads/2016/09/Marina-Bay-Sands-gallery6.jpg",
    "https://img.freepik.com/premium-photo/minsk-belarus-august-2017-columns-guestroom-hall-reception-modern-luxury-hotel_97694-6572.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatRef.current) {
        // Check if flatRef.current is not null
        if (activeIndex === images.length - 1) {
          flatRef.current.scrollToIndex({
            index: 0,
            animated: true,
          });
        } else {
          flatRef.current.scrollToIndex({
            index: activeIndex + 1,
            animated: true,
          });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  //   <Img
  //   images={images}
  //   autoPlayWithInterval={1500}
  //   customSlide={({ index, item, style, width }) => (
  //     <View key={index} style={[style, styles.customSlide]}>
  //       <Image source={{ uri: item }} style={styles.customImage} />
  //     </View>
  //   )}
  // />
  const screenWidth = Dimensions.get("window").width;
  const renderItem = (item, index) => {
    // console.log(item.item);
    return (
      <View>
        <Image
          source={{ uri: item.item }}
          style={{ width: screenWidth, height: "100%" }}
        />
      </View>
    );
  };
  const renderDotIndicator = () => {
    return images.map((d, index) => {
      if (activeIndex == index) {
        return (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              backgroundColor: "blue",
              borderRadius: 5,
              margin: 4,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              backgroundColor: "gray",
              borderRadius: 5,
              margin: 4,
            }}
          ></View>
        );
      }
    //   return (
    //     <View
    //       key={index}
    //       style={{
    //         width: 10,
    //         height: 10,
    //         backgroundColor: "red",
    //         borderRadius: 5,
    //         margin: 4,
    //       }}
    //     ></View>
    //   );
    });
  };
  const handleScroll = (e) => {
    const scrollPostion = e.nativeEvent.contentOffset.x;
    const i = Math.round(scrollPostion / screenWidth);
    setActiveIndex(i);
   
  };
  const getItemLayOut = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  return (
    <View style={{ height: 300 }}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        getItemLayout={getItemLayOut}
        ref={flatRef}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderDotIndicator()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customSlide: {
    backgroundColor: "transparent",
  },
  customImage: {
    height: "100%",
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    margin: 3,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#eee",
  },
  buttonSelected: {
    fontWeight: "bold",
  },
});

export default Slider;