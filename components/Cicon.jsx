import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Cicon = (props) => {
  return (
    <View>
      <Ionicons
      name={props.name}
      size={props.size}
      color={props.color}/>
    </View>
  )
}

export default Cicon