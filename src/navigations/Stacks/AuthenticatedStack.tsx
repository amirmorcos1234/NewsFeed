import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FeedStack from './FeesStack'
import SettingsStack from './SettingsStack'

import { Images } from '../../theme'

const AppTabs = createBottomTabNavigator()

function MainStack () {
  return (
      <AppTabs.Navigator screenOptions={{
        headerShown: false
      }}>
          <AppTabs.Screen name="News" component={FeedStack} options={{
            tabBarIcon: ({ color, size }) => <Image source={Images.newspaper} resizeMode='contain' style={{ width: size, height: size, tintColor: color }}/>
          }} />
      <AppTabs.Screen name="Settings" component={SettingsStack}
      options={{
        tabBarIcon: ({ color, size }) => <Image source={Images.settings} resizeMode='contain' style={{ width: size, height: size, tintColor: color }}/>
      }}

      />
      </AppTabs.Navigator>
  )
}

export default MainStack
