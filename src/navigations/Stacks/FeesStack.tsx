import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { DetailsScreen, MainScreen } from '../../scenes'
import { FeedTypes } from './FeedStackType'

const Stack = createStackNavigator<FeedTypes>()

const FeedStack = () => (
 <Stack.Navigator screenOptions={{ headerShown: false }}>
 <Stack.Screen name="MainScreen" component={MainScreen} />
 <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
</Stack.Navigator>
)

export default FeedStack
