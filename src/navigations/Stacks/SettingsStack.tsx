import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SettingsScreen } from '../../scenes'

const Stack = createStackNavigator()

const SettingsStack = () => (
 <Stack.Navigator screenOptions={{ headerShown: false }}>
 <Stack.Screen name="settings" component={SettingsScreen} />
</Stack.Navigator>
)

export default SettingsStack
