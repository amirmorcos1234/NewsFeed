import { Platform } from 'react-native'
import themes from './theme'

const shadowing = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: themes.white
  },
  android: {
    elevation: 5,
    backgroundColor: themes.white

  }
})

export {
  shadowing
}
