import React, {Fragment} from 'react'
import ElegantHeader from 'react-native-elegant-header'
import colors from '@/colors'
import {SafeAreaView} from 'react-native-safe-area-context'
import Item from './item'
import t from 'locales/use-translation'
import {FlatList, View} from 'react-native'

export default props => {
  const {navigation} = props
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={ITEMS}
          style={{height: '100%', paddingTop: 30}}
          renderItem={({item, index}) => <Item item={item} index={index} />}
        />
      </SafeAreaView>
    </View>
  )
}

const ITEMS = [
  {
    id: 1,
    title: 'Facial Cream',
    expiryDate: '10 April 2024',
    expiringIn: '8 days left',
    isRead: true
  },
  {
    id: 2,
    title: 'Dove Shampoo',
    expiryDate: '12 April 2024',
    expiringIn: '10 days left',
    isRead: true
  },
  {
    id: 3,
    title: 'Nail polishing by Lakme',
    expiryDate: '14 April 2024',
    expiringIn: '12 days left',
    isRead: false
  },
  {
    id: 4,
    title: 'Toothpaste',
    expiryDate: '16 April 2024',
    expiringIn: '14 days left',
    isRead: false
  }
]
