import { StyleSheet } from 'react-native'
import { verticalScale } from '../../../styles/scaling'
import themes from '../../../styles/theme'

export default StyleSheet.create({
  newsFeedItemContainer: {
    marginTop: verticalScale(10),
    paddingTop: verticalScale(15),
    paddingHorizontal: verticalScale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: themes.white,
    width: '100%',
    borderRadius: 12
  },
  image: {
    borderRadius: 10,
    height: verticalScale(100),
    width: '100%',
    marginVertical: verticalScale(20)
  }
})
