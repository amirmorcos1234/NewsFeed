import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";

import { NewsFeedItem } from "../../components/molecules";

import { getArticles } from "../../services/articles/articles.service";

import styles from './MainScreen.style'

const MainScreen=()=>{
    useEffect(()=>{
        loadNews()
    })
    const loadNews=async()=>{
        try{
    const response=await getArticles()
    console.log(response)
        }
        catch(e){
            debugger
            console.log(e.response)
        }
    }

    return <SafeAreaView style={{flex:1}}>
        <View style={styles.content}>
        <Text style={styles.welcome}>Hi</Text>
        <Text style={styles.title}>Explore your Day</Text>
       <NewsFeedItem heading="Amir" image="https://s.yimg.com/os/creatr-uploaded-images/2021-05/a8217250-bdfa-11eb-bfc4-2663225cea83"/>
       <NewsFeedItem heading="Amir" image="https://s.yimg.com/os/creatr-uploaded-images/2021-05/a8217250-bdfa-11eb-bfc4-2663225cea83"/> 
        </View>

    </SafeAreaView>

}

export default MainScreen