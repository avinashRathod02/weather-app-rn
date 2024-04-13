import {Dimensions} from 'react-native'
import {range} from 'lodash'
import {isIPhoneX} from './platform'

export const SCREEN_WIDTH = Dimensions.get('window').width

export const SCREEN_HEIGHT = Dimensions.get('window').height

export const defineLargeSizeParam = (large, normal) =>
  isIPhoneX() ? large : normal

export const isMajorScreenHeight = SCREEN_HEIGHT >= 800

export const isVerySmallScreen = SCREEN_WIDTH <= 340

export const modalHeight = SCREEN_HEIGHT * 0.84

export const defineSize = (small, medium, large, extraLarge) => {
  if (isIPhoneX()) {
    return extraLarge
  }

  if (isMajorScreenHeight) {
    return large
  }

  if (isVerySmallScreen) {
    return small
  }

  return medium
}

export const hitSlop = (top, right = top, bottom = top, left = top) => ({
  top,
  right,
  bottom,
  left
})

export const chunkArrayByColumn = (array, columns) => {
  var perChunk = columns // items per chunk
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
}

export const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT
export const LATITUDE_DELTA = 0.04
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
