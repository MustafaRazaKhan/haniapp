import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import Loading from '../Components/Loading';
import { useProduct } from '../Context/Product';
import ProductCard from '../Components/ProductCard';
import { useFocusEffect } from '@react-navigation/native';

const Products = ({ navigation, route }) => {
  const { filterSubCategoryFun, state } = useProduct();
  const subcategory = route.params?.subcategory || null;

  useFocusEffect(
    useCallback(() => {
      // Fetch products by subcategory or all products when the screen is focused
      filterSubCategoryFun(subcategory);
    }, [subcategory]) // Dependency on subcategory to re-fetch if it changes
  );

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      {state.isLoading ? (
        <Loading />
      ) : (
        <View style={styles.productContainer}>
          {state?.filterSubCategory?.map((curEle) => (
            <ProductCard curEle={curEle} key={curEle._id} navigation={navigation} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 2,
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Products;
