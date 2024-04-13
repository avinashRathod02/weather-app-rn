import {Dimensions, Platform} from 'react-native'
import DeviceInfo from 'react-native-device-info'

export function isIPhoneX() {
  const {height, width} = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    (height === 812 ||
      width === 812 ||
      height === 844 ||
      width === 844 ||
      height === 896 ||
      width === 896 ||
      height === 926 ||
      width === 926)
  )
}

export const isIphoneSE = DeviceInfo.getModel() === 'iPhone SE'

export const isIosPlatform = Platform.OS === 'ios'

export const isAndroidPlatform = Platform.OS === 'android'

export const definePlatformParam = (ios, android) =>
  isIosPlatform ? ios : android

export const majorVersionIOS = parseInt(String(Platform.Version), 10)
