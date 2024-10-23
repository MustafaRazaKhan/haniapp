import {  Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { mainStyles } from '../maincss'
import Input from '../Components/Input'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Button from '../Components/Button';

const Register = () => {
  return (
    <ScrollView style={[mainStyles.bgWhite,{padding:15}]} >
      {/*  main container */}
    <View style={[ mainStyles.container,mainStyles.flexCenter,mainStyles.paddingV,mainStyles.paddingH]}>
    <View style={[mainStyles.flexCenter]}>
       {/* heading and image Container container */}
       <View style={[mainStyles.flexRow,mainStyles.flexCenter]} >
      <View>
        <Text style={{fontSize:23,fontWeight:"bold"}}>CREATE NEW ACCOUNT ?</Text>
      </View>
      <View>
        <Image source={require("../../assets/team.png")} style= {[mainStyles.imgWidth]} />
      </View>
    </View>

    {/* input container
     */}
     <View style={[mainStyles.width100]}>
      {/* mobile no */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding,{gap:2}]}>
      <AntDesign name="phone" size={24} color="tomato" />
        <Text>+91</Text>
        <Input placeholder="Mobile No"/>

      </View>
      {/* password */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding]}>
      <Image source ={require("../../assets/padlock.png")} style= {[mainStyles.imgIconW]}/>
        <Input placeholder="Password"/>
      </View>
      {/* Name */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding]}>
      <Image source ={require("../../assets/name.png")} style= {[mainStyles.imgIconW]}/>
        <Input placeholder="Name"/>
      </View>
      {/* Address */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding]}>
      <FontAwesome name="address-book" size={24} color="tomato" />
        <Input placeholder="Address"/>
      </View>
      {/* Button */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding, mainStyles.gap,{backgroundColor:"black",borderRadius:3,marginTop:20}]}>
      <Image source ={require("../../assets/signbtn.png")} style= {[mainStyles.imgIconW]}/>       
      <Button/>
      </View>

     </View>
   </View>
    </View>
    </ScrollView>
  )
}

export default Register

