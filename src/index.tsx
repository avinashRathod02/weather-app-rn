import React from 'react'
import {LogBox, StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
// import {AppUpdate} from '@/components/common'
import './config/config-i18n'
import {ApplicationNavigator} from './navigation'
import {Provider} from 'react-redux'
import {persistor, store} from './store'
import {PersistGate} from 'redux-persist/integration/react'

/**
 *
 * Main app
 *
 * App Name:          Weather App
 * Author:            Avinash Rathod
 *
 * @since             1.0.0
 *
 * @format
 * @flow
 */

console.warn = () => {}
LogBox.ignoreLogs(['Warning: ...'])
LogBox.ignoreAllLogs()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
          <ApplicationNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
