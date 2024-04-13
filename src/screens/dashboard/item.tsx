import React, {useState} from 'react'
import {hasObjectLength} from 'utils/condition'
import {ListingView} from '@/components/common'
import {StyleSheet, View} from 'react-native'
import ItemHeader from './partials/item-header'
import ItemData from './partials/item-data'

export default props => {
  const {index, item} = props
  const [isOpened, setIsOpened] = useState(false)
  if (!hasObjectLength(item)) return null
  const icon = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`
  return (
    <ListingView onSelect={() => setIsOpened(v => !v)} index={index}>
      <View style={styles.container}>
        <ItemHeader item={item} icon={icon} isOpened={isOpened} />
        {isOpened && <ItemData data={item} />}
      </View>
    </ListingView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    paddingHorizontal: '4%'
  }
})
