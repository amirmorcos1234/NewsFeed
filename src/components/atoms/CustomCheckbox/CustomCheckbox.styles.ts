import { StyleSheet } from 'react-native'
import { scale } from '../../../styles/scaling'
import themes from '../../../styles/theme'

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: themes.grey,
    width: scale(30),
    height: scale(30),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checked: {
    backgroundColor: themes.red,
    width: scale(20),
    height: scale(20),
    borderRadius: 50
  }
})
