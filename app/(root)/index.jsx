import { View, Text } from 'react-native'
import React from 'react'
import Cbutton from '../../components/Cbutton'

const index  = () => {
  return (
    <View className="bg-red-400 flex-1  items-center justify-center">
      <Text className="text-3xl font-bold">Welcome Person</Text>
      <Cbutton name="Get Started" iname="arrow-redo-circle" isize={32} icolor="red"/>
    </View>
  )
}

export default index