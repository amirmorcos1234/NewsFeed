import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, SafeAreaView, Text, View } from "react-native";
import { CustomButton } from "../../components/atoms";

import { NewsFeedItem } from "../../components/molecules";

import Article from "../../models/Article";

import { getArticles } from "../../services/articles/articles.service";

import styles from './MainScreen.style'

const MainScreen=()=>{
    const [articles,setArticles]=useState<Article[]>([])
    const [error,setError]=useState(false)
    useEffect(()=>{
        // loadNews()
    },[])
    const loadNews=async()=>{
        try{
            setError(false)
    const response=await getArticles()
    debugger
    setArticles(response.data.articles)
        }
        catch(e){
            setError(true)
        }
    }

    const onItemPress=()=>{

    }

    const renderItem=({item}:ListRenderItemInfo<Article>)=>(
       <NewsFeedItem
       heading={item.title}
       image={item.urlToImage}
       onPress={onItemPress}
       />
    )

    return <SafeAreaView style={{flex:1}} >
        <View style={styles.content}>
        <Text style={styles.welcome}>Hi</Text>
        <Text style={styles.title}>Explore your Day</Text>
        {error && (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Something went error</Text>
                <CustomButton onPress={loadNews} title='Retry' overrideContainerStyle={{marginTop:10}}/>
                </View>
        )}
        {!error &&<FlatList
        renderItem={renderItem}
        data={articles}
        contentContainerStyle={styles.contentList}
        />
}
        </View>

    </SafeAreaView>

}

export default MainScreen