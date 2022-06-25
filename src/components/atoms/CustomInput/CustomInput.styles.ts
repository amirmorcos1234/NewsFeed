import { StyleSheet } from 'react-native'

import { shadowing } from '../../../styles/ApplicationStyle'

import { moderateScale, scale, verticalScale } from '../../../styles/scaling'

export default StyleSheet.create({
  inputContainer: {
    ...shadowing,
    width: '100%',
    height: verticalScale(50),
    borderRadius: 10,
    paddingTop: verticalScale(16),
    paddingHorizontal: scale(20)
  },
  input: {
    padding: 0,
    fontSize: moderateScale(15),
    width: '100%',
    textAlign: 'left'
  }
})
