import React, {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Item from './item'
import {ActivityIndicator, FlatList, View} from 'react-native'
import axios from 'axios'
import colors from '@/colors'
import {Text} from '@/components'
import {useLiveLocation} from '@/hooks'
import {hasObjectLength} from '@/utils'
import {useIsFocused} from '@react-navigation/native'

export default props => {
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [items, setItems] = useState([])
  const fetchWeather = async () => {
    if (!hasObjectLength(location)) return
    setLoading(true)
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${location?.latitude}&lon=${location?.longitude}&exclude=hourly%2Cminutely&appid=00d49afb60af52a47022d369756ca31a&units=metric`
    axios
      .get(url)
      .then(({data}) => {
        setItems(data?.daily ?? [])
      })
      .catch(err => {})
      .finally(() => {
        setFetching(false)
        setLoading(false)
      })
  }
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
            refreshing={loading}
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
