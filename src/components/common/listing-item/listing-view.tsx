import React, {Fragment, useEffect, useState} from 'react'
import {StyleSheet} from 'react-native'
import Animated from 'react-native-reanimated'
import {isAndroidPlatform, isIosPlatform} from 'utils/platform'
import {ButtonView, FadeList} from '@/components'

const duration = 400

export const ListingView = props => {
  const {
    children,
    show = true,
    scale = 0.99,
    disabled = false,
    index,
    onSelect
  } = props
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
    <Animated.View>
      <FadeList class={props?.class} delay={delay} duration={duration}>
        <ButtonView
          disabled={disabled}
          scale={scale}
          activeOpacity={1}
          bind-class={props?.['listing-view-class']}
          class="width-100% border-gray-200 rounded-16 bg-white"
          style={[showShadow && styles.container, showShadow && shadowStyle]}
          onPress={onSelect}>
          {children}
        </ButtonView>
      </FadeList>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowRadius: 7,
    elevation: 3
  }
})
