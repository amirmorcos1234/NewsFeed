import React from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'

import styles from './CustomCheckbox.styles'

type checkProps={
    isChecked:boolean,
    onPress:()=>void,
    overrideContainerStyle?:ViewStyle
}
const CustomCheckbox:React.FC<checkProps> = (props) => {
  const { isChecked, onPress, overrideContainerStyle } = props
  return (
        <TouchableOpacity style={[styles.container, overrideContainerStyle]} onPress={onPress}>
            {isChecked && <View style={styles.checked}/>}
        </TouchableOpacity>
  )
}

export default CustomCheckbox
