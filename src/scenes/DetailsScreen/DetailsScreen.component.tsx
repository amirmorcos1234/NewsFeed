import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import moment from 'moment'

import { CustomText } from '../../components/atoms'

import { FeedTypes } from '../../navigations/Stacks/FeedStackType'

import { Images } from '../../theme'

import styles from './DetailsScreen.styles'

const DetailsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<FeedTypes, 'DetailsScreen'>>()
  const route = useRoute<RouteProp<FeedTypes, 'DetailsScreen'>>()
  const { newsItem } = route.params || {}
  const onBack = () => {
    navigation.goBack()
  }
  return (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={onBack}>
        <Image source={Images.back} style={styles.back}/>
    </TouchableOpacity>
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <CustomText text={newsItem.title}
     overrideStyle={styles.title}/>
    <Image source={{ uri: newsItem.urlToImage }} resizeMode='contain' style={styles.image}/>
    <CustomText text={newsItem.description}/>
    <View style={styles.dateContainer}>
    <CustomText overrideStyle={styles.date} text='Published At'/>
    <CustomText overrideStyle={styles.date} text={moment(newsItem.publishedAt).format('DD/MM/YYYY')}/>
    </View>

  </ScrollView>
  </SafeAreaView>
  )
}

export default DetailsScreen
