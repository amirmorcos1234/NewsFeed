import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DetailsScreen, MainScreen } from '../../scenes'

const Stack = createStackNavigator()

function MainStack () {
  return (
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

export default MainStack
