import React from 'react'
import {hasObjectLength} from 'utils/condition'
import {Image, StyleSheet, View} from 'react-native'
import colors from '@/colors'
import icons from '@/assets/icons'
import {Text} from '@/components'

export default props => {
  const {data} = props
  if (!hasObjectLength(data)) return null
  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
  const description = data.weather[0].description

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{uri: icon}} />
        <View style={{width: '80%'}}>
          <Text text={description} />
          <Text style={styles.summary} text={data.summary} />
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.temperature}>
          <Text style={styles.label2} text={'TEMPERATURE'} />
          <Text style={styles.label2} text={'FEELS LIKE'} />
        </View>
        <View style={styles.tableData}>
          <DataTable
            label="Morning"
            value1={data.temp.morn}
            value2={data.feels_like.morn}
          />
          <DataTable
            label="Evening"
            value1={data.temp.eve}
            value2={data.feels_like.eve}
          />
          <DataTable
            label="Night"
            value1={data.temp.night}
            value2={data.feels_like.night}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.dataView}>
          <DataWithIcon icon={icons.cloud} value={data?.clouds} />
          <DataView label={'Humidity'} value={`${data?.humidity}%`} />
        </View>
        <View style={styles.dataView}>
          <DataWithIcon
            icon={icons.navigation}
            value={`${data?.wind_speed}m/s`}
          />
          <DataView label={'UV'} value={data?.uvi} />
        </View>
        <View style={styles.dataView}>
          <DataWithIcon icon={icons.pressure} value={`${data?.pressure} hPa`} />
          <DataView label={'Dew point:'} value={`${data?.dew_point}°C`} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <DataView2 label={'SUNRISE'} value={data?.sunrise} />
        <DataView2 label={'SUNSET'} value={data?.sunset} />
      </View>
    </View>
  )
}

const DataTable = props => {
  const {label, value1, value2} = props
  return (
    <View style={styles.dataTableContainer}>
      <Text text={label} style={styles.label2} />
      <Text text={`${value1}°C`} style={styles.value} />
      <Text text={`${value2}°C`} style={styles.value} />
    </View>
  )
}
const DataWithIcon = props => {
  const {icon, value} = props
  return (
    <View style={styles.dataWithIconContainer}>
      <Image source={icon} style={styles.icon} />
      <Text text={value} style={styles.value} />
    </View>
  )
}
const DataView = props => {
  const {label, value} = props
  return (
    <View style={styles.dataViewContainer}>
      <Text text={`${label}: `} style={styles.label} />
      <Text text={value} style={styles.value} />
    </View>
  )
}
const DataView2 = props => {
  const {label, value} = props
  return (
    <View style={styles.dataView2}>
      <Text text={label} style={styles.label} />
      <Text text={value} style={styles.value} />
    </View>
  )
}
const styles = StyleSheet.create({
  tableData: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  label2: {color: colors.gray5, fontSize: 14},
  temperature: {
    marginRight: 5,
    width: '30%',
    justifyContent: 'flex-end'
  },
  tableContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  summary: {color: colors.gray5, marginTop: 5, fontSize: 14},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {width: 45, height: 45, marginRight: 5},
  label: {fontSize: 14, color: colors.gray5},
  value: {fontSize: 14},
  icon: {width: 18, height: 18, marginRight: 5},
  dataView2: {marginRight: 15},
  dataViewContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataWithIconContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  dataTableContainer: {width: '33%'},
  bottomContainer: {flexDirection: 'row', marginTop: 30},
  dataView: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {width: '100%', flexDirection: 'row'},
  container: {marginTop: 20, paddingBottom: 10}
})
