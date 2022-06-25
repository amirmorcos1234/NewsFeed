import React from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, View } from 'react-native'
import { CustomCheckbox, CustomText } from '../../components/atoms'
import { useAppDispatch, useAppSelector } from '../../Redux'
import { changeLanguage } from '../../Redux/LanguageSlice/LanguageSlice'

import styles from './SettingsScreen.styles'

const SettingsScreen = () => {
  const { t } = useTranslation()
  const { lang } = useAppSelector(selector => selector.languageState)
  const dispatch = useAppDispatch()

  const _renderLanguage = () => {
    const items = ['English', 'Arabic']
    return items.map((item, index) => (
      <View style={styles.langContainer} key={index}>
  <CustomText text={item} overrideStyle={{ fontSize: 18 }} />
    <CustomCheckbox onPress={() => {
      const language = item === 'English' ? 'en' : 'ar'
      dispatch(changeLanguage(language))
    }} isChecked={item === (lang === 'en' ? 'English' : 'Arabic')} />
      </View>
    ))
  }

  return <SafeAreaView>
    <View style={styles.content}>
    <CustomText text={t('common.changeLang')} overrideStyle={styles.title}/>
    <View style={styles.languageContainer}>
  {_renderLanguage()}
    </View>
    </View>
  </SafeAreaView>
}

export default SettingsScreen
