import React from "react";
import { Image, Text, View, ViewStyle } from "react-native";

import styles from './NewsFeedItem.style'

type NewsFeedProps={
    overrideContainerStyle?:ViewStyle,
    heading:string,
    image:string
}
const NewsFeedItem:React.FC<NewsFeedProps>=(props)=>{
    const {heading,image,overrideContainerStyle}=props
    return (
    <View style={[styles.newsFeedItemContainer,overrideContainerStyle]}>
    <Text>{heading}</Text>
    <Image
    style={styles.image}
     source={{uri:image}}/>
</View>
    )
}

export default NewsFeedItem