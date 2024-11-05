import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { mainStyles } from '../maincss'

const ProductCard = ({navigation,curEle}) => {
  const {designName,subCategory,photoPaths} = curEle;
  // todo handle navigate
  const handleNavigate = (id) => {
    navigation.navigate("Product", {
      id: curEle._id
    });
  }
  return (
    <TouchableOpacity onPress={()=>{
      handleNavigate(curEle._id)
    }} style={[styles.cardChild,{}]}>
   
       <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center',gap:10}}>
         {/* image container */}
         <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center',height:150}}>
            <Image source={{uri:`https://hanibackendapp.onrender.com/${photoPaths}`}} style={[mainStyles.imgWidth]}/>
        </View>
       
        {/*  design name container */}
        
        {/* name container */}
        <View>
            <Text style={{textAlign:"center",textTransform:"uppercase"}}>{subCategory}</Text>
            <Text style={{textAlign:"center",textTransform:"capitalize",fontWeight:"bold",fontSize:16}}>{designName}</Text>
        </View>
       </View>
    
     </TouchableOpacity>
    
  )
}

export default ProductCard

const styles = StyleSheet.create({
  cardChild:{
    width:185,
    height:150,
    backgroundColor:"white",
    elevation:2
}
})