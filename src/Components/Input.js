import { StyleSheet, Text,  TextInput } from 'react-native'
import React from 'react'
import { mainStyles } from '../maincss'

const Input = ({placeholder}) => {
  return ( <TextInput placeholder= {placeholder} style={[{borderBottomWidth:1},mainStyles.width100,mainStyles.padding]}/>
  )
}

export default Input

const styles = StyleSheet.create({})