import React from 'react'
import { Text, TextStyle } from 'react-native'

import styles from './CustomText.styles'
type CustomTextProps={
    overrideStyle?:TextStyle,
    text:string
}

const CustomText:React.FC<CustomTextProps> = (props) => {
  const { text, overrideStyle } = props
  return (
    <Text style={[styles.textStyle, overrideStyle]}>
    {text}
    </Text>
  )
}

export default CustomText
