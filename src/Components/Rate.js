import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mainStyles } from '../maincss'

const Rate = () => {
  return (
    <View style={[mainStyles.flexRow,mainStyles.gap, mainStyles.flexCenter,{backgroundColor:"tomato",width:"100%",padding:12}]}>
      <Text>Rate</Text>
      <Text>Rate</Text>
      <Text>Rate</Text>
    </View>
  )
}

export default Rate

const styles = StyleSheet.create({})