import { StyleSheet } from 'react-native'

import { verticalScale } from '../../../styles/scaling'

import themes from '../../../styles/theme'

export default StyleSheet.create({
  container: {
    width: '80%',
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 12
  },
  text: {
    color: themes.white,
    fontSize: 15
  }
})
