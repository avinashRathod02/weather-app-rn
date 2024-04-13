import React from 'react'
import {StackActions} from '@react-navigation/native'
import {CommonActions} from '@react-navigation/native'
import {TransitionPresets} from '@react-navigation/stack'
import {SCREEN_WIDTH} from '@/utils/size'
import {routes} from './navigation-routes'
import {LoginPromptIProps} from './type.d'

export const navigatorOptions = {
  animationEnabled: true,
  gestureEnabled: false,
  cardOverlayEnabled: false,
  gestureResponseDistance: SCREEN_WIDTH * 0.95,
  ...TransitionPresets.SlideFromRightIOS
}

export const navigatorOptions3 = {
  ...navigatorOptions,
  animationEnabled: false,
  gestureResponseDistance: 60
}
export const navigatorOptions2 = {
  ...navigatorOptions,
  gestureResponseDistance: 60
}

export const modalFadeTransition = {
  ...TransitionPresets.ModalFadeTransition
}

export const slideFromRightTransition = {
  ...TransitionPresets.SlideFromRightIOS
}

export let navigationRef: any = React.createRef()
export let navigationActionRef: any = null

export function navigateTo(route, params = {}) {
  navigationRef?.current?.navigate?.(route, params)
}

export function replaceTo(route, params = {}) {
  navigationRef?.current?.dispatch?.(StackActions.replace(route, params))
}

export function push(route, params = {}) {
  navigationRef?.current?.dispatch?.(StackActions.push(route, params))
}

export function resetNavigation(route, params = {}) {
  navigationRef?.current?.dispatch?.(
    StackActions.replace(route ?? routes.MAIN_TABS, params)
  )
}

export function goBack() {
  navigationRef?.current?.goBack?.(null)
}

export function replace(route, params = {}) {
  navigationRef?.current?.dispatch?.(StackActions.replace(route, params))
}

export function setNavigationActionRef(ref) {
  navigationActionRef = ref
}

export function redirectToHomePage() {
  navigationActionRef?.redirectToHomePage?.()
}

export function redirectToLoginPage() {
  navigationActionRef?.redirectToLoginPage?.()
}
export function navigateToLoginPrompt(params: LoginPromptIProps) {
  navigationRef?.current?.navigate?.(routes.LOGIN_PROMPT, params)
}

export const navigation = {
  navigateTo,
  goBack,
  replaceTo,
  replace,
  push,
  redirectToHomePage,
  redirectToLoginPage
}

export const dismissRoute = (routes, callback = null) => {
  navigationRef?.current?.dispatch?.(state => {
    const filteredRoutes = state.routes.filter(r => !routes.includes(r.name))

    return CommonActions.reset({
      ...state,
      routes: filteredRoutes,
      index: filteredRoutes.length - 1
    })
  })

  setTimeout(() => callback?.(), 100)
}
