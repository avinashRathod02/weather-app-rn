import colors from '@/colors'
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  container: {
    backgroundColor: colors.grayLight8,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    borderRadius: 10,
    height: '30%',
    justifyContent: 'space-between'
  },
  title: {fontWeight: '600', fontSize: 30}
})
