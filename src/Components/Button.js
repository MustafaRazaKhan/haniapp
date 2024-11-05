import { Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { mainStyles } from '../maincss'

const Button = ({onPress,name,source}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={[mainStyles.flexRow,mainStyles.flexCenter,mainStyles.padding, mainStyles.gap,{backgroundColor:"#2E69A8",borderRadius:3,marginTop:20}]}>
    <Image source ={source} style= {[mainStyles.imgIconW]}/>       
    <Text style={{color:"white"}}>{name}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Button

