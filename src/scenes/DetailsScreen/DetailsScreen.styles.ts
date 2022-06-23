import { StyleSheet } from 'react-native'
import { scale, verticalScale } from '../../styles/scaling'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  back: {
    width: scale(24),
    height: scale(24),
    margin: scale(20)
  },
  content: {
    marginHorizontal: scale(25)
  },
  title: {
    marginVertical: verticalScale(20)
  },
  image: {
    width: '100%',
    height: verticalScale(200)
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  date: {
    marginTop: verticalScale(15)
  }
})
