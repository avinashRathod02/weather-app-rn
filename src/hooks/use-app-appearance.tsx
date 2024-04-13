import {useEffect} from 'react'
import {StatusBar} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true)
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000)
    return () => {}
  }, [])
}
