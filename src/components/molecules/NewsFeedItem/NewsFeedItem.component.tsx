import React from "react";
import { Image, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import styles from './NewsFeedItem.style'

type NewsFeedProps={
    overrideContainerStyle?:ViewStyle,
    heading:string,
    image:string,
    onPress:()=>void
}
const NewsFeedItem:React.FC<NewsFeedProps>=(props)=>{
    const {heading,image,overrideContainerStyle,onPress}=props
    return (
    <TouchableOpacity onPress={onPress} style={[styles.newsFeedItemContainer,overrideContainerStyle]}>
    <Text>{heading}</Text>
    <Image
    style={styles.image}
     source={{uri:image}}/>
</TouchableOpacity>
    )
}

export default NewsFeedItem