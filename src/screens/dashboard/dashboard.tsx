import React, {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Item from './item'
import {ActivityIndicator, FlatList, View} from 'react-native'
import colors from '@/colors'
import {Text} from '@/components'
import {useAppDispatch, useAppSelector, useLiveLocation} from '@/hooks'
import {hasObjectLength} from '@/utils'
import {useIsFocused} from '@react-navigation/native'
import {fetchWeatherData} from '@/store/slices/common'

export default props => {
  const [fetching, setFetching] = useState(true)
  const {items, dashboardLoading} = useAppSelector(state => state.common)

  const fetchWeather = async () => {
    if (!hasObjectLength(location)) return
    await dispatch(fetchWeatherData()).then(({payload}) => {
      setFetching(false)
    })
  }
  const dispatch = useAppDispatch()
  const location = useLiveLocation()
  const isFocused = useIsFocused()
  useEffect(() => {
    if (!hasObjectLength(location)) return
    if (isFocused) {
      fetchWeather()
    }
  }, [location, isFocused])

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        {fetching && <Loading />}
        {!fetching && (
          <FlatList
            ListEmptyComponent={NoData}
            refreshing={dashboardLoading}
            onRefresh={fetchWeather}
            data={items}
            style={{height: '100%', paddingTop: 30}}
            renderItem={({item, index}) => <Item item={item} index={index} />}
          />
        )}
      </SafeAreaView>
    </View>
  )
}

const NoData = () => (
  <Text
    tx="dashboard.no_data"
    style={{textAlign: 'center', marginTop: 50, fontSize: 20}}
  />
)
const Loading = () => (
  <ActivityIndicator style={{flex: 1}} size="large" color={colors.primary} />
)
