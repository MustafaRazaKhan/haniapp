import { StyleSheet, Text,  TextInput } from 'react-native'
import React from 'react'
import { mainStyles } from '../maincss'
const Input = ({placeholder,onChangeText, value,name}) => {
  return ( <TextInput placeholder= {placeholder} style={[{borderBottomWidth:1},mainStyles.width100,mainStyles.padding]}onChangeText={onChangeText} />
  )
}

export default Input

