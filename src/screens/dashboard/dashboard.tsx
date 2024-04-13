import React, {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Item from './item'
import t from 'locales/use-translation'
import {ActivityIndicator, FlatList, View} from 'react-native'
import axios from 'axios'
import colors from '@/colors'
import {Text} from '@/components'

export default props => {
  const [loading, setLoading] = useState(!true)
  const [items, setItems] = useState([])
  const [location, setLocation] = useState({lat: 21.2213163, lon: 72.8391928})
  const fetchWeather = async () => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${location?.lat}&lon=${location?.lon}&exclude=hourly%2Cminutely&appid=00d49afb60af52a47022d369756ca31a&units=metric`
    axios
      .get(url)
      .then(({data}) => {
        setItems(data?.daily ?? [])
      })
      .catch(err => {})
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        {loading && <Loading />}
        {!loading && items?.length ? (
          <FlatList
            data={items}
            style={{height: '100%', paddingTop: 30}}
            renderItem={({item, index}) => <Item item={item} index={index} />}
          />
        ) : (
          <NoData />
        )}
      </SafeAreaView>
    </View>
  )
}

const ITEMS = [
  {
    dt: 1712989800,
    sunrise: 1712969459,
    sunset: 1713014811,
    moonrise: 1712982060,
    moonset: 1713032940,
    moon_phase: 0.17,
    summary:
      'You can expect partly cloudy in the morning, with clearing in the afternoon',
    temp: {
      day: 29.8,
      min: 25.74,
      max: 34.94,
      night: 27.36,
      eve: 32.72,
      morn: 26.09
    },
    feels_like: {
      day: 31.9,
      night: 29.58,
      eve: 33.35,
      morn: 26.09
    },
    pressure: 1012,
    humidity: 57,
    dew_point: 20.37,
    wind_speed: 5.26,
    wind_deg: 246,
    wind_gust: 7.11,
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d'
      }
    ],
    clouds: 19,
    pop: 0,
    uvi: 10.87
  },
  {
    dt: 1713076200,
    sunrise: 1713055809,
    sunset: 1713101230,
    moonrise: 1713071820,
    moonset: 0,
    moon_phase: 0.2,
    summary: 'Expect a day of partly cloudy with clear spells',
    temp: {
      day: 35.36,
      min: 26.48,
      max: 38,
      night: 31.36,
      eve: 36.14,
      morn: 26.69
    },
    feels_like: {
      day: 36.99,
      night: 33.44,
      eve: 37.19,
      morn: 28.55
    },
    pressure: 1011,
    humidity: 37,
    dew_point: 18.79,
    wind_speed: 5.67,
    wind_deg: 282,
    wind_gust: 8.6,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    clouds: 0,
    pop: 0,
    uvi: 10.91
  },
  {
    dt: 1713162600,
    sunrise: 1713142160,
    sunset: 1713187651,
    moonrise: 1713161760,
    moonset: 1713122640,
    moon_phase: 0.23,
    summary: 'Expect a day of partly cloudy with clear spells',
    temp: {
      day: 39.04,
      min: 27.85,
      max: 40.68,
      night: 32.78,
      eve: 38.64,
      morn: 28.16
    },
    feels_like: {
      day: 37.54,
      night: 32.33,
      eve: 37.5,
      morn: 28.19
    },
    pressure: 1011,
    humidity: 18,
    dew_point: 11.58,
    wind_speed: 6.49,
    wind_deg: 316,
    wind_gust: 11.41,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    clouds: 2,
    pop: 0,
    uvi: 10.79
  },
  {
    dt: 1713249000,
    sunrise: 1713228511,
    sunset: 1713274071,
    moonrise: 1713251520,
    moonset: 1713212040,
    moon_phase: 0.25,
    summary:
      'You can expect clear sky in the morning, with partly cloudy in the afternoon',
    temp: {
      day: 39.69,
      min: 29.19,
      max: 41.24,
      night: 33,
      eve: 39.53,
      morn: 29.57
    },
    feels_like: {
      day: 37.65,
      night: 33.37,
      eve: 37.92,
      morn: 28.43
    },
    pressure: 1009,
    humidity: 15,
    dew_point: 10.54,
    wind_speed: 5.93,
    wind_deg: 313,
    wind_gust: 9.23,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    clouds: 0,
    pop: 0,
    uvi: 10.53
  },
  {
    dt: 1713335400,
    sunrise: 1713314863,
    sunset: 1713360492,
    moonrise: 1713341280,
    moonset: 1713300960,
    moon_phase: 0.3,
    summary:
      'The day will start with partly cloudy through the late morning hours, transitioning to clearing',
    temp: {
      day: 40.05,
      min: 30.38,
      max: 41.87,
      night: 33.07,
      eve: 40.61,
      morn: 30.38
    },
    feels_like: {
      day: 38.32,
      night: 33.27,
      eve: 38.74,
      morn: 29.9
    },
    pressure: 1008,
    humidity: 16,
    dew_point: 11.18,
    wind_speed: 5.82,
    wind_deg: 258,
    wind_gust: 11.65,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    clouds: 2,
    pop: 0,
    uvi: 10.42
  },
  {
    dt: 1713421800,
    sunrise: 1713401216,
    sunset: 1713446913,
    moonrise: 1713430800,
    moonset: 1713389640,
    moon_phase: 0.33,
    summary:
      'The day will start with clear sky through the late morning hours, transitioning to partly cloudy',
    temp: {
      day: 36.02,
      min: 29.06,
      max: 38.59,
      night: 29.76,
      eve: 36.32,
      morn: 29.06
    },
    feels_like: {
      day: 34.53,
      night: 32.38,
      eve: 34.42,
      morn: 29.06
    },
    pressure: 1010,
    humidity: 22,
    dew_point: 11.47,
    wind_speed: 6.08,
    wind_deg: 329,
    wind_gust: 10.4,
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d'
      }
    ],
    clouds: 35,
    pop: 0,
    uvi: 11
  },
  {
    dt: 1713508200,
    sunrise: 1713487569,
    sunset: 1713533334,
    moonrise: 1713520200,
    moonset: 1713478080,
    moon_phase: 0.36,
    summary: 'There will be partly cloudy today',
    temp: {
      day: 36.31,
      min: 28.58,
      max: 38.7,
      night: 31.86,
      eve: 35.43,
      morn: 28.58
    },
    feels_like: {
      day: 37.47,
      night: 32.82,
      eve: 36.28,
      morn: 30.08
    },
    pressure: 1009,
    humidity: 33,
    dew_point: 18.05,
    wind_speed: 5.8,
    wind_deg: 280,
    wind_gust: 9.74,
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d'
      }
    ],
    clouds: 97,
    pop: 0,
    uvi: 11
  },
  {
    dt: 1713594600,
    sunrise: 1713573923,
    sunset: 1713619755,
    moonrise: 1713609540,
    moonset: 1713566340,
    moon_phase: 0.39,
    summary: 'There will be partly cloudy today',
    temp: {
      day: 34.69,
      min: 28.95,
      max: 37.41,
      night: 28.95,
      eve: 32.53,
      morn: 29.25
    },
    feels_like: {
      day: 34.04,
      night: 29.84,
      eve: 32.86,
      morn: 31.8
    },
    pressure: 1010,
    humidity: 29,
    dew_point: 14.64,
    wind_speed: 6.23,
    wind_deg: 230,
    wind_gust: 10.71,
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d'
      }
    ],
    clouds: 49,
    pop: 0,
    uvi: 11
  }
]

const NoData = () => (
  <Text
    tx="dashboard.no_data"
    style={{textAlign: 'center', marginTop: 50, fontSize: 20}}
  />
)
const Loading = () => (
  <ActivityIndicator style={{flex: 1}} size="large" color={colors.primary} />
)
