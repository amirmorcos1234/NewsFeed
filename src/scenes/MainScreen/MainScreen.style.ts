import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from '../../styles/scaling'
import themes from '../../styles/theme'

export default StyleSheet.create({
  content: {
    flex: 1,
    padding: scale(20)
  },
  welcome: {
    fontSize: moderateScale(20),
    color: themes.black,
    textAlign: 'left'
  },
  title: {
    fontSize: moderateScale(15),
    color: themes.black,
    marginTop: verticalScale(8),
    marginBottom: verticalScale(10),
    textAlign: 'left'

  },
  contentList: {
    paddingBottom: verticalScale(30)
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  retryButton: {
    marginTop: verticalScale(10)
  }

})
