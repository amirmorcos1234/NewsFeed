import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { CustomCheckbox, CustomText } from '../../components/atoms'

import styles from './SettingsScreen.styles'

const SettingsScreen = () => {
  const [lang, setLang] = useState('English')
  const _renderLanguage = () => {
    const items = ['English', 'Arabic']
    return items.map((item, index) => (
      <View style={styles.langContainer} key={index}>
  <CustomText text={item} overrideStyle={{ fontSize: 18 }} />
    <CustomCheckbox onPress={() => setLang(item)} isChecked={item === lang} />
      </View>
    ))
  }
  return <SafeAreaView>
    <View style={styles.content}>
    <CustomText text='Change Language' overrideStyle={styles.title}/>
    <View style={styles.languageContainer}>
  {_renderLanguage()}
    </View>
    </View>
  </SafeAreaView>
}

export default SettingsScreen
