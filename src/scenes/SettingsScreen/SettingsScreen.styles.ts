import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import themes from '../../styles/theme'

export default StyleSheet.create({
  title: {
    fontSize: moderateScale(20)
  },
  languageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: themes.white,
    paddingTop: verticalScale(20),
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(25),
    borderRadius: 12,
    marginTop: verticalScale(10)
  },
  content: {
    margin: scale(25)
  }
})
