import { StyleSheet } from 'react-native'
import { scale } from '../../../styles/scaling'

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    width: scale(30),
    height: scale(30),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checked: {
    backgroundColor: 'red',
    width: scale(20),
    height: scale(20),
    borderRadius: 50
  }
})
