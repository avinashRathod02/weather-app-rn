import React from 'react'
import {hasObjectLength} from 'utils/condition'
import {Image, StyleSheet, View} from 'react-native'
import moment from 'moment'
import {Text} from '@/components'
import icons from '@/assets/icons'
import FastImage from 'react-native-fast-image'

export default props => {
  const {item, isOpened, icon} = props
  if (!hasObjectLength(item)) return null
  const day = moment(item.dt * 1000).format('ddd, MMM DD')
  const minMax = `${item.temp.min}/${item.temp.max}°C`
  return (
    <View style={styles.dayContainer}>
      <View style={styles.day}>
        <Text text={day} />
      </View>
      <View style={styles.dataContainer}>
        <FastImage style={styles.logo1} source={{uri: icon}} />
        <Text text={minMax} />
        <Image
          style={styles.logo2}
          source={isOpened ? icons.up_arrow : icons.down_arrow}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '4%',
    paddingHorizontal: '4%'
  },
  dayContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  day: {
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center'
  },
  dataContainer: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo1: {width: 38, height: 30, marginRight: 5},
  logo2: {width: 15, height: 15, marginLeft: 5}
})
