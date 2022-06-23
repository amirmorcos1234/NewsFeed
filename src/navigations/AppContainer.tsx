import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GlobalLoader } from '../components/molecules'
import { useAppSelector } from '../Redux'
import MainStack from './Stacks/AuthenticatedStack'

const AppContainer = () => {
  const { loading } = useAppSelector(selector => selector.loaderState)
  return (
    <NavigationContainer>
               <MainStack/>
               <GlobalLoader isLoading={loading}/>
        </NavigationContainer>
  )
}

export default AppContainer
