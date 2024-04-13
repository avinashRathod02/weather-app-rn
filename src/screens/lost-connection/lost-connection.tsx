import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {View} from 'react-native'
import t from 'locales/use-translation'
import ElegantHeader from 'react-native-elegant-header'
import colors from '@/colors'

export default props => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ElegantHeader
          title={t('header.lost_connection')}
          titleTextStyle={{color: colors.primary}}
        />
      </SafeAreaView>
    </View>
  )
}
