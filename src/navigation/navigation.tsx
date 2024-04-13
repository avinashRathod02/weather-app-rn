import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {useAppAppearance, useLostConnectionDetector} from '@/hooks'
import {
  navigateTo,
  navigationRef,
  slideFromRightTransition
} from './navigation-action'
import {routes} from './navigation-routes'
import {CommonNavigator} from './navigators'
import colors from '@/colors'

const Stack = createStackNavigator()

export const ApplicationNavigator = () => {
  useAppAppearance()
  const isConnected = useLostConnectionDetector()
  if (!isConnected) navigateTo(routes.LOST_CONNECTION)
  const theme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, background: colors.background}
  }
  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={routes.WELCOME}
        screenOptions={slideFromRightTransition}>
        {CommonNavigator}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
