import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Cicon from './Cicon'

const Cbutton = (props) => {
  return (
    <View className="bg-yellow-200 w-full items-center justify-center rounded-full mt-3">
      <TouchableOpacity className="w-full items-center justify-center flex-row">
        <Text className="font-bold text-2xl px-20">{props.name}</Text>
        <Cicon name={props.iname} size={props.isize} color={props.icolor}/>
      </TouchableOpacity>
      
    </View>
  )
}

export default Cbutton