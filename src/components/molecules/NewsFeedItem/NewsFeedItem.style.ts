import { StyleSheet } from 'react-native'
import { shadowing } from '../../../styles/ApplicationStyle'
import { verticalScale } from '../../../styles/scaling'

export default StyleSheet.create({
  newsFeedItemContainer: {
    marginTop: verticalScale(10),
    paddingTop: verticalScale(15),
    paddingHorizontal: verticalScale(20),
    ...shadowing,
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
