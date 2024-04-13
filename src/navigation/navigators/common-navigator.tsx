import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {routes} from '../navigation-routes'
import Welcome from '@/screens/welcome'
import Dashboard from '@/screens/dashboard'
import LostConnection from '@/screens/lost-connection'
const Stack = createStackNavigator()

export const CommonNavigator = (
  <React.Fragment>
    <Stack.Screen name={routes.WELCOME} component={Welcome} />
    <Stack.Screen name={routes.MAIN_DASHBOARD} component={Dashboard} />
    <Stack.Screen name={routes.LOST_CONNECTION} component={LostConnection} />
  </React.Fragment>
)
