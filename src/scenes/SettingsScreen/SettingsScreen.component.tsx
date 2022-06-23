import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { CustomText } from '../../components/atoms'

import styles from './SettingsScreen.styles'

const SettingsScreen = () => {
  return <SafeAreaView>
    <View style={styles.content}>
    <CustomText text='Change Language' overrideStyle={styles.title}/>
    <View style={styles.languageContainer}>
    <CustomText text='English' overrideStyle={{ fontSize: 18 }}/>
    <CustomText text='Arabic' overrideStyle={{ fontSize: 18, marginTop: 20 }}/>
    </View>
    </View>
  </SafeAreaView>
}

export default SettingsScreen
