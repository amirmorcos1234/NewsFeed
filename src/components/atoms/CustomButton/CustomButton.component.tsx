import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

import styles from './CustomButton.styles'
type ButtonProps={
    overrideContainerStyle?:ViewStyle,
    onPress:()=>void,
    title:string
}
const CustomButton:React.FC<ButtonProps>=(props)=>{
    const {onPress,title,overrideContainerStyle}=props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,overrideContainerStyle]}>
            <Text style={styles.text}>
            {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton