import React from 'react'
import { TextInput, View, ViewStyle } from 'react-native'

import styles from './CustomInput.styles'

type InputProps={
    onChangeText:(text:string)=>void
    value:string,
    placeholder:string,
    overrideContainerStyle?:ViewStyle,
    overrideInputStyle?:ViewStyle
}
const CustomInput:React.FC<InputProps> = (props) => {
  const { onChangeText, value, overrideContainerStyle, placeholder, overrideInputStyle } = props
  return (
    <View style={[styles.inputContainer, overrideContainerStyle]}>
    <TextInput value={value} style={[styles.input, overrideInputStyle]} onChangeText={onChangeText} placeholder={placeholder} />
    </View>
  )
}

export default CustomInput
