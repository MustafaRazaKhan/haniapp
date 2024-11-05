import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { mainStyles } from '../maincss'
import Input from '../Components/Input'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Button from '../Components/Button';
import { useAuth } from '../Context/Auth';
import Loading from '../Components/Loading';

const Register = ({navigation}) => { 
   const {handleChange,state,handleRegister} = useAuth();
  return (
    <>
      <ScrollView style={[mainStyles.bgWhite,{padding:15}]} >
      {/*  main container */}
    <View style={[ mainStyles.container,mainStyles.flexCenter,mainStyles.paddingV,mainStyles.paddingH]}>
    <View style={[mainStyles.flexCenter]}>
     {
      state.isLoading? <View style={{backgroundColor:"black",borderRadius:5}}>
      <Loading/>
        </View>:null
     }
       {/* heading and image Container container */}
       <View style={[mainStyles.flexRow,mainStyles.flexCenter]} >
      <View>
        <Text style={{fontSize:23,fontWeight:"bold"}}>NEW ACCOUNT ?</Text>
      </View>
      <View>
        <Image source={require("../../assets/document.png")} style= {[mainStyles.imgWidth]} />
      </View>
    </View>

    {/* input container
     */}
     <View style={[mainStyles.width100]}>
      {/* mobile no */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding,{gap:2}]}>
      <AntDesign name="phone" size={24} color="tomato" />
        <Text>+91</Text>
        <Input placeholder="Mobile No" onChangeText={(e)=>handleChange(e,"mobile")}
      
        />

      </View>
      {/* password */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding]}>
      <Image source ={require("../../assets/padlock.png")} style= {[mainStyles.imgIconW]}/>
        <Input placeholder="Password" onChangeText={(e)=>handleChange(e,"password")}/>
      </View>
      {/* Name */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding]}>
      <Image source ={require("../../assets/name.png")} style= {[mainStyles.imgIconW]}/>
        <Input placeholder="Name" onChangeText={(e)=>handleChange(e,"name")}/>
      </View>
      {/* Address */}
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding]}>
      <FontAwesome name="address-book" size={24} color="tomato" />
        <Input placeholder="Address" onChangeText={(e)=>handleChange(e,"address")}/>
      </View>
      {/* Button */}
      <Button name="REGISTER FIRST" onPress={handleRegister} source={require("../../assets/signbtn.png")}/>
      <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding, mainStyles.gap ,mainStyles.marginV,{marginVertical:20}]}>
   
   <Text style={{fontSize:15}} >Already  Have A Account?</Text>
   <TouchableOpacity onPress={()=>{
    navigation.navigate("Login")
   }}>
   <Text style={{borderBottomWidth:2,borderColor:"blue",fontSize:15,color:"blue"}}>LOGIN</Text>

   </TouchableOpacity>
    </View>

     </View>
   </View>
    </View>
    </ScrollView>
    </>
  
  )
}

export default Register

