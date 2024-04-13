import React from 'react'
import moment from 'moment'
import {hasObjectLength} from 'utils/condition'

import {ListingView} from '@/components/common'
import {View} from 'react-native'

export default props => {
  const {item, onPress, index} = props
  if (!hasObjectLength(item)) return null

  const DETAILS_VIEW = (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '3%',
        paddingHorizontal: '2%'
      }}></View>
  )

  return (
    <ListingView onSelect={() => onPress?.(item)} index={index}>
      {DETAILS_VIEW}
    </ListingView>
  )
}
