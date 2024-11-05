import { StyleSheet, Text, View, RefreshControl, ScrollView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { mainStyles } from '../maincss';
import Rate from '../Components/Rate';
import Slider from '../Components/ImgSlider';
import Card from '../Components/Card'; 
import { useProduct } from '../Context/Product';
import Loading from '../Components/Loading';
import Bgicon from '../Components/Bgicon';
import Bgiconsec from '../Components/Bgiconsec';
import SocialMedia from '../Components/SocialMedia';

const Home = ({navigation}) => {
  const { state, getGoldProducts, getSilverProducts, getBarAndCoinsProducts } = useProduct();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Fetch the product data when refreshing
    Promise.all([
      getGoldProducts(),
      getSilverProducts(),
      getBarAndCoinsProducts()
    ]).finally(() => setRefreshing(false));
  }, [getGoldProducts, getSilverProducts, getBarAndCoinsProducts]);

  useEffect(() => {
    onRefresh(); // Initial fetch when the component mounts
  }, []);

  return (
    <ScrollView 
      style={styles.container} 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={[mainStyles.bgWhite]}>
        <View style={[mainStyles.flexCenter, styles.innerContainer]}>
          <Rate />
          <Slider />
          <Rate />
          
          <View style={[mainStyles.width100]}>
            <Text style={styles.sectionHeader}>GOLD JEWELRY</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[mainStyles.flexRow, mainStyles.gap, mainStyles.padding]}>
              {state.isGold ? <Loading /> : state.goldProducts?.map((curEle) => (
                <Card key={curEle._id} curEle={curEle} navigation={navigation} />
              ))}
            </View>
          </ScrollView>

          <View style={[mainStyles.width100]}>
            <Text style={styles.sectionHeader}>SILVER JEWELRY</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[mainStyles.flexRow, mainStyles.gap, mainStyles.padding]}>
              {state.isSilver ? <Loading /> : state.silverProducts?.map((curEle) => (
                <Card key={curEle._id} curEle={curEle} navigation={navigation} />
              ))}
            </View>
          </ScrollView>

          <Bgicon />

          <View style={[mainStyles.width100]}>
            <Text style={styles.sectionHeader}>BAR AND COINS</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[mainStyles.flexRow, mainStyles.gap, mainStyles.padding]}>
              {state.isBarAndCoins ? <Loading /> : state.barAndCoinsProducts?.map((curEle) => (
                <Card key={curEle._id} curEle={curEle} navigation={navigation} />
              ))}
            </View>
          </ScrollView>

          <Bgiconsec />
          <SocialMedia/>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly transparent white background
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6, // For Android shadow
  },
  sectionHeader: {
    fontSize: 26,
    fontWeight: "bold",
    paddingVertical: 15,
    color: '#000', // Gold color for the header
  },
});
