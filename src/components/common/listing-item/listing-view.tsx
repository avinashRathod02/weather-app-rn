import colors from '@/colors'
import React, {Fragment, useEffect, useState} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import Animated, {FadeInDown} from 'react-native-reanimated'
import {isAndroidPlatform, isIosPlatform} from 'utils/platform'

const duration = 400

export const ListingView = props => {
  const {children, show = true, disabled = false, index, onSelect} = props
  if (!show) return <Fragment />
  const [showShadow, setShowShadow] = useState(false)
  const delay = index.toString().slice(-1) * 50
  useEffect(() => {
    isAndroidPlatform &&
      setTimeout(() => setShowShadow(true), delay + duration + 150)
    isIosPlatform && setShowShadow(true)
    return () => {}
  }, [])

  const shadowStyle = {
    elevation: 2
  }

  return (
    <Animated.View entering={FadeInDown.delay(delay).duration(duration)}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={1}
        style={[showShadow && styles.container, showShadow && shadowStyle]}
        onPress={onSelect}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderWidth: 1,
    borderColor: colors.grayLight3,
    borderRadius: 10,
    marginBottom: 30,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowRadius: 4,
    elevation: 3
  }
})
