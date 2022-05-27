import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  title: string;
}
export function Welcome({title}:Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}