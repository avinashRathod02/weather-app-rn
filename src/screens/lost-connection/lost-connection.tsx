import React from 'react'
import ElegantHeader from 'react-native-elegant-header'
import colors from '@/colors'
import {SafeAreaView} from 'react-native-safe-area-context'
import t from 'locales/use-translation'
import {View} from 'react-native'

export default props => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <ElegantHeader
          title={t('header.lost_connection')}
          titleTextStyle={{color: colors.primary}}
        />
      </SafeAreaView>
    </View>
  )
}
