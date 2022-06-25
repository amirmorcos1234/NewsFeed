/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import AppContainer from './src/navigations/AppContainer'
import { store } from './src/Redux'
import i18n from './src/translation'

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
   <AppContainer/>
   </I18nextProvider>
  </Provider>
  )
}

export default App
