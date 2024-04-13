import {useEffect, useState} from 'react'
import {Alert, Linking} from 'react-native'
import GetLocation from 'react-native-get-location'
import t from '@/locales/use-translation'

const useLiveLocation = ({onLocationFailed}) => {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 20000
    })
      .then(location => {
        setLocation(location)
      })
      .catch(async error => {
        await onLocationFailed()
        askPermission()
      })
    return () => {}
  }, [])
  return location
}

export default useLiveLocation

export const askPermission = async () => {
  Alert.alert(
    t('location_permission_declined.title'),
    t('location_permission_declined.description'),
    [
      {
        text: t('button.got_to_settings'),
        onPress: Linking.openSettings
      },
      {
        text: t('button.cancel'),
        style: 'cancel'
      }
    ],
    {cancelable: true}
  )
}
