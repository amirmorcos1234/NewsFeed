import React from "react";
import { ActivityIndicator, View } from "react-native";

import styles from './GlobalLoader.styles'

type LoaderProps={
    isLoading:boolean
}
const GlobalLoader:React.FC<LoaderProps>=(props)=>{
        const {isLoading}=props
        debugger
return isLoading ? (
    <View style={styles.container}>
    <ActivityIndicator/>
    </View>
):null
}

export default GlobalLoader