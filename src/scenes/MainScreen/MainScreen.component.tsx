import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItemInfo, SafeAreaView, Text, View, RefreshControl, TextInput } from 'react-native'

import { CustomButton, CustomInput } from '../../components/atoms'
import { NewsFeedItem } from '../../components/molecules'

import Article from '../../models/Article'
import { FeedTypes } from '../../navigations/Stacks/FeedStackType'

import { useAppDispatch } from '../../Redux'
import { hideLoader, showLoader } from '../../Redux/LoaderSlice/LoaderSlice'

import { getArticles } from '../../services/articles/articles.service'

import styles from './MainScreen.style'

const MainScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<StackNavigationProp<FeedTypes, 'MainScreen'>>()
  const dispatch = useAppDispatch()
  const [articles, setArticles] = useState<Article[]>([])
  const [error, setError] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
    loadNews()
  }, [])
  const loadNews = async (search = '') => {
    try {
      setError(false)
      dispatch(showLoader())
      const response = await getArticles(search)
      setArticles(response.data.articles)
    } catch (e) {
      setError(true)
    } finally {
      dispatch(hideLoader())
    }
  }

  const onItemPress = (item:Article) => {
    navigation.navigate('DetailsScreen', { newsItem: item })
  }

  const onRefresh = () => {
    loadNews()
  }

  const renderItem = ({ item }:ListRenderItemInfo<Article>) => (
       <NewsFeedItem
       heading={item.title}
       image={item.urlToImage}
       onPress={() => onItemPress(item)}
       />
  )

  const _renderHeader = () => {
    return (
            <View>
          <Text style={styles.welcome}>{t('main.hi')}</Text>
        <Text style={styles.title}>{t('main.exploreDay')}</Text>
        <CustomInput value={searchInput} onChangeText={(text) => {
          setSearchInput(text)
          loadNews(text)
        }} placeholder='Search'/>
            </View>
    )
  }

  return <SafeAreaView style={{ flex: 1 }} >
        <View style={styles.content}>
        {error && (
            <View style={styles.errorContainer}>
                <Text>{t('common.error')}</Text>
                <CustomButton onPress={loadNews} title={t('common.retry')} overrideContainerStyle={styles.retryButton}/>
                </View>
        )}
        {!error &&
        <>
        {_renderHeader()}
        <FlatList
        renderItem={renderItem}
        data={articles}
        contentContainerStyle={styles.contentList}
        refreshControl={
        <RefreshControl
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />}
        />

        </>

}
        </View>

    </SafeAreaView>
}

export default MainScreen
