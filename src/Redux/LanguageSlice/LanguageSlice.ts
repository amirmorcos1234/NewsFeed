import { createSlice } from '@reduxjs/toolkit'
import { I18nManager } from 'react-native'
import RNRestart from 'react-native-restart'
import i18n from '../../translation'

interface AppState {
  lang: string
}

const initialState: AppState = {
  lang: 'en'
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload
      i18n.changeLanguage(action.payload).then(() => {
        I18nManager.forceRTL(action.payload === 'ar')
      })
      setTimeout(() => {
        RNRestart.Restart()
      }, 1000)
    }

  }
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer
