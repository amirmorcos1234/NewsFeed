import { StyleSheet } from 'react-native'
import { shadowing } from '../../styles/ApplicationStyle'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'

export default StyleSheet.create({
  title: {
    fontSize: moderateScale(20)
  },
  languageContainer: {
    ...shadowing,
    paddingTop: verticalScale(5),
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(25),
    borderRadius: 12,
    marginTop: verticalScale(10)
  },
  content: {
    margin: scale(25)
  },
  langContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(20)
  }
})
