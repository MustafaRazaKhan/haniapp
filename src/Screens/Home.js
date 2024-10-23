import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { mainStyles } from '../maincss'
import Rate from '../Components/Rate'
import Slider from '../Components/ImgSlider'
import Card from '../Components/Card'

const Home = () => {
  return (
   <ScrollView style={[mainStyles.bgWhite]}>
  <View style={[mainStyles.flexCenter]}>
    {/* rate component */}
  
   <Rate/>
     {/*  image slider components */}
     <Slider/>
      {/* rate component */}
   <Rate/>

   {/* gold jwellery container */}
  <View style={[mainStyles.width100]}>
  <Text>GOLD JWELLERY</Text>
  </View>
   <ScrollView horizontal={true}>
   <View style={[mainStyles.flexRow,mainStyles.gap,mainStyles.padding]}>
   <Card/>
    <Card/>
    <Card/>
    <Card/>
   </View>
   </ScrollView>
   {/* gold jwellery container */}
   <View style={[mainStyles.width100]}>
  <Text>SLIVER  JWELLERY</Text>
  </View>
  <ScrollView horizontal={true}>
  <View style={[mainStyles.flexRow,mainStyles.gap,mainStyles.padding]}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   </View>
  </ScrollView>
  </View>
   </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})