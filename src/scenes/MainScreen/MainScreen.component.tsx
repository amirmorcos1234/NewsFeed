import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItemInfo, SafeAreaView, Text, View, RefreshControl } from 'react-native'

import { CustomButton } from '../../components/atoms'
import { NewsFeedItem } from '../../components/molecules'

import Article from '../../models/Article'
import { FeedTypes } from '../../navigations/Stacks/FeedStackType'

import { useAppDispatch } from '../../Redux'
import { hideLoader, showLoader } from '../../Redux/LoaderSlice/LoaderSlice'

import { getArticles } from '../../services/articles/articles.service'

import styles from './MainScreen.style'

const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<FeedTypes, 'MainScreen'>>()
  const dispatch = useAppDispatch()
  const [articles, setArticles] = useState<Article[]>([])
  const [error, setError] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  useEffect(() => {
    loadNews()
  }, [])
  const loadNews = async () => {
    try {
      setError(false)
      dispatch(showLoader())
      const response = await getArticles()
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
          <Text style={styles.welcome}>Hi</Text>
        <Text style={styles.title}>Explore your Day</Text>
            </View>
    )
  }

  return <SafeAreaView style={{ flex: 1 }} >
        <View style={styles.content}>
        {error && (
            <View style={styles.errorContainer}>
                <Text>Something went error</Text>
                <CustomButton onPress={loadNews} title='Retry' overrideContainerStyle={styles.retryButton}/>
                </View>
        )}
        {!error && <FlatList
        ListHeaderComponent={_renderHeader}
        renderItem={renderItem}
        data={articles}
        contentContainerStyle={styles.contentList}
        refreshControl={
        <RefreshControl
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />
        }
        />
}
        </View>

    </SafeAreaView>
}

export default MainScreen
