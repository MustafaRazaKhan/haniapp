import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mainStyles } from '../maincss'

const Card = () => {
  return (
   
     <View style={[styles.cardChild,{justifyContent:"center",alignItems:"center"}]}>
       <View>
         {/* image container */}
         <View>
            <Image source={require("../../assets/padlock.png")} style={[mainStyles.imgWidth]}/>
        </View>
        <Text>Pandlx234</Text>
        {/*  design name container */}
        <View>
            
        </View>
        {/* name container */}
        <View>
            <Text>Pandal X23</Text>
        </View>
       </View>


     </View>
    
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{

    },
    cardChild:{
        width:150,
        height:150,
        backgroundColor:"white",
        elevation:2
    }
})