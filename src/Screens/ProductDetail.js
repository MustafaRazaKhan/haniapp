import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useProduct } from '../Context/Product';
import Loading from '../Components/Loading'; // import mainStyles from "./maincss"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../Context/Auth';

const ProductDetail = ({ navigation,route }) => {
  const { filterCategory, state } = useProduct();
 const {userInfo} =  useAuth().state
  const { category } = route.params;

  useEffect(() => {
    filterCategory(category);
  }, [category]);
  return (
    <View>
      <View>
        {state.isLoading ? (
          <Loading />
        ) : (
          state?.filterCategory?.map((curEle,index) => (
            <TouchableOpacity onPress={()=>{
              navigation.navigate(userInfo.token?"Products":"Login", {
                subcategory: curEle._id
              });
            }} key={curEle?._id}>
            <View  style={{backgroundColor:"#6c84fc",flexDirection:"row",justifyContent:"space-around",padding:2,marginVertical:1,color:"white",}}>
              <Text style={{color:"white",fontWeight:"bold",fontSize:20,textTransform:"capitalize"}}>{index+1}</Text>
              <Text style={{color:"white",fontWeight:"bold",fontSize:20,textTransform:"capitalize"}}>{curEle?._id}</Text>
              <Text style={{color:"white",fontWeight:"bold",fontSize:20,textTransform:"capitalize",backgroundColor:"orange",width:50,height:30,borderRadius:4, textAlign:"center",}}>{curEle?.count}</Text>
            </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    // gap: 40,
   
    flexDirection: "row",
    backgroundColor:"red",
    justifyContent:'space-between'
    // flex: 1, // Ensures the view fills the screen
  },
});
